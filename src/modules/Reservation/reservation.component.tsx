import React, { FC, useEffect, useState } from 'react';
import Button from '../../components/Common/Button/button.component';
import { buttonTypes } from '../../components/Common/Button/button.types';
import {
  useGetAllReservationRoomsLazyQuery,
  useGetAllRoomsReservationLazyQuery,
} from '../../generated/graphql';
import useStyles from './reservation.style';
import ReservationModal from './Modals/ReservationModal/reservation.modal'
import { ReservationDates, ReservationRooms } from './reservation.types';
import { dateArr, getDateFormatted, getDatesFormatted } from './reservation.helper';
import { subMonths, addMonths } from 'date-fns'
import RoomFormModal from '../Room/RoomModal/room.modal';
import { Usegct } from '../Context/useGlobalContext';

const allUniqueMonth = new Set<string>();

const ReservationComponent: FC = () => {
  const classes = useStyles();
  const usegct = Usegct()
  const [ allRoomsFn, { data: allRooms }]  = useGetAllRoomsReservationLazyQuery();
  const [ allReservationRoomFn, { data: allReservationRooms }] = useGetAllReservationRoomsLazyQuery();
  const [toggleModal, setToggleModal] = useState(-1);
  const [reservationRooms, setReservationRooms] = useState<ReservationDates>({});
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedRoomId, setSelectedRoomId] = useState(-1);

  useEffect(() => {
    allUniqueMonth.clear()
    setReservationRooms({});
    getReservationRoomsbyMonth(currentDate);
    allRoomsFn({ variables: { hotelId: usegct.chosenHotelId } });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usegct.chosenHotelId]);

  useEffect(() => {
    const { startDate, endDate, formatedDateKey } = getDatesFormatted(currentDate);
    allRoomsFn({ variables: { hotelId: usegct.chosenHotelId } });
    allUniqueMonth.add(formatedDateKey);

    setCurrentDate(currentDate);
    allReservationRoomFn({
      variables: { startDate, endDate, hotelId: usegct.chosenHotelId }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allReservationRoomFn]);

  useEffect(() => {
    const groupByRoomId = allReservationRooms?.getAllReservationRooms
      .reduce<ReservationRooms>((acc, cur) => {
        if(!acc[cur.room.roomId]) {
          acc[cur.room.roomId] = [];
        }
        const checkInDay = new Date(cur.checkInDate).getDate();
        const checkOutDay = new Date(cur.checkOutDate).getDate();

        acc[cur.room.roomId].push({
          checkInDay,
          reservationId: +cur.reservation.reservationId,
          reservationStatus: cur.reservation.reservationStatus.abbr || '',
          totalColSpan: (checkOutDay - checkInDay + 1),
        });

        return acc;
    }, {});

    if(groupByRoomId) {
      const date = getDateFormatted(currentDate);
      setReservationRooms((oldData) => ({ ...oldData, [date]: groupByRoomId }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allReservationRooms]);

  const createTableTds = (roomId: string, datesArr: number[]) => {

    const date = getDateFormatted(currentDate);
    const reservationMonth = reservationRooms[date];
    const rooms = (reservationMonth && reservationMonth[roomId]) || [];
    const tds: JSX.Element[] = []; 

    for (let index = 0; index < datesArr.length; index++) {
      const hasReservation = rooms.find(x => x.checkInDay === datesArr[index]);

      if(hasReservation) {
        tds.push(
          <td
            key={hasReservation.reservationId}
            colSpan={hasReservation.totalColSpan}
            className={classes.booked}
            onClick={() => setToggleModal(hasReservation.reservationId)}
          > {hasReservation.reservationStatus}</td>
        );
        index += hasReservation.totalColSpan;

        // if(index >= dateArr.length +1) {
        //   index = dateArr.length +1
        // }
      }

      tds.push(<td key={`${roomId}-${index}`}></td>)
    }

    return tds;
  }

  const getReservationRoomsbyMonth = (monthDate: Date) => {

    const {
      startDate,
      endDate,
      formatedDateKey } = getDatesFormatted(monthDate);

    if(!allUniqueMonth.has(formatedDateKey)) {
      allUniqueMonth.add(formatedDateKey);
      allReservationRoomFn({ variables: {
        startDate, endDate, hotelId: usegct.chosenHotelId
      } });
    }

    setCurrentDate(monthDate);
  }

  const datesArray  = dateArr(currentDate);

  return (
    <>
      { toggleModal !== -1 &&
        <ReservationModal
          setToggleModal={setToggleModal}
          reservationId={toggleModal}
        />
      }
      { selectedRoomId !== -1 &&
        <RoomFormModal
          setToggleModal={(rId:  number) => setSelectedRoomId(rId)}
          roomId={selectedRoomId}
        />
      }
      <div className={classes.buttonContainer}>
        <div>
          <Button
            text="Mes Anterior"
            buttonType={buttonTypes.BT3}
            onClick={() => {
              const previousMonth = subMonths(currentDate, 1)
              getReservationRoomsbyMonth(previousMonth);
            }}
          />
          &nbsp;
          <Button
            text="Mes Actual"
            buttonType={buttonTypes.BT3}
            onClick={() => {
              const todaysDate = new Date();
              setCurrentDate(todaysDate);
              getReservationRoomsbyMonth(todaysDate);
            }}
          />
          &nbsp;
          <Button
            text="Mes Siguiente"
            buttonType={buttonTypes.BT3}
            onClick={() => {
              const nextMonth = addMonths(currentDate, 1);
              getReservationRoomsbyMonth(nextMonth);
            }}
          />
        </div>
        <Button
          text="Agregar nueva Reservacion"
          buttonType={buttonTypes.BT1}
          onClick={() => setToggleModal(0)}
        />
      </div>
      
      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th colSpan={datesArray.length + 1}>{getDateFormatted(currentDate)}</th>
            </tr>
            <tr>
              <th></th>
              { datesArray.map(x => <th key={x} >{x}</th>) }
            </tr>
          </thead>
          <tbody>

            {allRooms?.getAllRooms.map(x =>
              <tr key={x.roomId}>
                <td
                  onClick={() => setSelectedRoomId(+x.roomId)}
                  className={classes.rooms}
                >
                  {x.roomNumber} <b>({x.roomStatus.abbr})</b>
                </td>
                {createTableTds(x.roomId, datesArray)}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReservationComponent;
