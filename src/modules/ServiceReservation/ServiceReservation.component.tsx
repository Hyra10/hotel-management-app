import React, { FC, useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ServiceReservation.styles.css';
import ServiceReservationFormModal from './ServiceReservationModal/serviceReservation.modal'
import { slotInfo } from './ServiceReservation.type';
import {
  GetAllServiceReservationQuery, useGetAllServiceReservationLazyQuery,
  useGetServiceReservationByIdLazyQuery
} from '../../generated/graphql'
import { ReactSelectType } from '../../components/Common/AsyncSelect/asyncSelect.types';
import { ServiceReservationFormValues } from './ServiceReservationModal/serviceReservation.modal.types';
import 'moment/locale/es'
import { Usegct } from '../Context/useGlobalContext';
import useStyles from './ServiceReservation.style';
import { forceUpdate } from '../../utils/tempReload';

const localizer = momentLocalizer(moment);
moment.locale('es');
const allDateRanges = new Set();

type VisibleDates = {
  startDate: Date,
  endDate: Date
}

const ReservationComponent: FC = () => {
  const classes = useStyles();
  const [calendarEvent, setCalendarEvent] = useState({} as ServiceReservationFormValues);
  const [GetAllServiceReservation, { data }] = useGetAllServiceReservationLazyQuery();
  const [GetServiceReservation, { data: serviceReservation }] = useGetServiceReservationByIdLazyQuery();
  const [events, setEvents] = useState([] as slotInfo[]);
  const [visibleDates, setVisibleDates]  = useState({} as VisibleDates)
  const usegct = Usegct();

  useEffect(() => {

    allDateRanges.clear();
    setEvents([]);

    onRangeChange(visibleDates.startDate, visibleDates.endDate)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usegct.chosenHotelId])
 
  
  useEffect(() => {

    const todaysDate = new Date();
    const startOfWeek = moment(todaysDate).startOf('week').toDate();
    const endOfWeek = moment(todaysDate).endOf('week').toDate();
    allDateRanges.add(startOfWeek.getTime());

    GetAllServiceReservation({
      variables: { startOfWeek, endOfWeek, hotelId: usegct.chosenHotelId }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [GetAllServiceReservation])

  useEffect(() => {
    const parsedData = parseDataToEvents(data);
    if(parsedData && parsedData.length > 0) {
      setEvents((oldData) => [...oldData, ...parsedData]);
    }
  }, [data])

  useEffect(() => {
    const sr = serviceReservation?.getServiceReservationById;

    if(!sr) {
      return
    }

    const serviceStatusId = +sr.serviceStatus.serviceStatusId;
    const serviceId = +sr.service.serviceId;
    const clients = sr.clientServiceReservations.map((x) => {
        const c = x.client;
        return {
          value: c.clientId,
          label: `${c.cedula} - ${c.name} ${c.firstSurname} ${c.secondSurname}`
        } as ReactSelectType;
    });

    setCalendarEvent({
      serviceReservationId: +sr.serviceReservationId,
      startDate: sr.startDate,
      endDate: sr.endDate,
      areThereChildren: sr.areThereChildren,
      clientNotes: sr.clientNotes!,
      clients,
      serviceId,
      serviceStatusId,
      serviceSubtype: sr.serviceSubtype!,
      staffNotes: sr.staffNotes!,
    });

  }, [serviceReservation])

  const parseDataToEvents = (payload: GetAllServiceReservationQuery | undefined) => {
    return payload?.getAllServiceReservation.map(x => 
      ({
        id: +x.serviceReservationId,
        title: `${x.service.name} | (${x.serviceStatus.abbr})`,
        start: moment(x.startDate).toDate(),
        end: moment(x.endDate).toDate(),
      } as slotInfo)
    );
  }

  const onRangeChangeEvent = (dates: Date[] | Object) => {
    if(!Array.isArray(dates) || dates.length < 2){
      return
    }

    const sd = dates.shift()!
    const ed = dates.pop()!

    setVisibleDates({
      startDate: sd,
      endDate: ed
    })

    onRangeChange(sd, ed)
  }

  const onRangeChange = (startDate: Date, endDate: Date) => {

    const time = startDate?.getTime();

    if(!allDateRanges.has(time)) {
      GetAllServiceReservation({
        variables: {
          startOfWeek: startDate,
          endOfWeek: endDate,
          hotelId: usegct.chosenHotelId
        }
      });
      allDateRanges.add(time);
    }
  }

  const onDoubleClickEvent = (event: slotInfo) => {
    GetServiceReservation({variables:{ serviceReservationId: event.id! }})
  }

  const onSelectSlot = ({ start, end }: slotInfo) => {

    setCalendarEvent({
      serviceReservationId: 0,
      startDate: (start as Date),
      endDate: (end as Date),
      areThereChildren: false,
      clientNotes: '',
      clients: null,
      serviceId: 0,
      serviceStatusId: 0,
      serviceSubtype: '',
      staffNotes: ''
    });
  }

  return (
    <>
      { typeof calendarEvent.serviceReservationId !== 'undefined'  &&
        <ServiceReservationFormModal
          eventInfo={calendarEvent}
          setEventInfo={setCalendarEvent}
        />
      }
      <br/>
      <div className={classes.container}>
        <Calendar
          localizer={localizer}
          events={events}
          onRangeChange={onRangeChangeEvent}
          onSelectSlot={(a) => onSelectSlot(a)}
          onDoubleClickEvent={onDoubleClickEvent}
          defaultView={'week'}
          views={['week', 'day']}
          popup
          selectable
          messages={{
            next: "Siguiente",
            previous: "Anterior",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día"
          }}
        />

      </div>
    </>
  );
};

export default ReservationComponent;
