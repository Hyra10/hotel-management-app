import React, { FC, useState } from 'react';
import { useDeleteRoomMutation, useGetAllRoomsQuery } from '../../generated/graphql'
import LoadingComponent from '../../components/Loading/loading.component';
import useStyles from './room.style';
import SectionHeaderComponent from '../../components/SectionHeader/sectionHeader.component';
import Button from '../../components/Common/Button/button.component';
import { buttonTypes } from '../../components/Common/Button/button.types';
import { toAmount } from '../../utils/string.util';
import RoomFormModal from './RoomModal/room.modal';
import { GrWheelchair } from 'react-icons/gr';
import { Usegct } from '../Context/useGlobalContext';
import { forceUpdate } from '../../utils/tempReload';

const RoomComponent: FC = () => {
  const { chosenHotelId: hotelId } = Usegct();
  const { data, loading } = useGetAllRoomsQuery({ variables: { hotelId }});
  const [ dltRoom ] = useDeleteRoomMutation();
  const classes = useStyles();
  const [roomId, setRoomId] = useState(-1);

  if (loading || !data) {
    return <LoadingComponent />
  }

  const openModal = (cId: number) => {
    setRoomId(cId);
  }

  const deleteRoom = async (rId: number) => {
    await dltRoom({variables: { roomId: rId }, update: forceUpdate});
  }

  return (
    <>
      { roomId !== -1 &&
        <RoomFormModal
          setToggleModal={openModal}
          roomId={roomId}
        />
      }

      <SectionHeaderComponent name="Cuartos"/>

      <div className={classes.buttonContainer}>
        <Button
          text="Crear Nuevo Cuarto"
          buttonType={buttonTypes.BT1}
          onClick={() => openModal(0)}
        />
      </div>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Numero de Cuarto</th>
              <th>Tipo de Cuarto</th>
              <th>Piso</th>
              <th>Edificio</th>
              <th>Precio</th>
              <th>Camas</th>
              <th><GrWheelchair size={20}/></th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllRooms.map(x =>
              <tr key={x.roomNumber}>
                <td>{x.roomNumber}</td>
                <td>{x.roomType.name}</td>
                <td>{x.floorNumber}</td>
                <td>{x.buildingNumber}</td>
                <td>{toAmount(x.price)}</td>
                <td>{x.roomBeds?.length}</td>
                <td>{!!x.allowHandicap && <GrWheelchair size={20} /> }</td>
                <td>
                  <Button
                    text="Editar"
                    buttonType={buttonTypes.BT2}
                    onClick={() => openModal(+x.roomId)}
                    className={classes.editButton}
                  />
                  <Button
                    text="Borrar"
                    buttonType={buttonTypes.BT3}
                    onClick={() => deleteRoom(+x.roomId)}
                    className={classes.deleteButton}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  </>
  );
};

export default RoomComponent;
