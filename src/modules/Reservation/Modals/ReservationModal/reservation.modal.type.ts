import moment from 'moment';

type StartDate = moment.Moment | null;
type EndDate = moment.Moment | null;

export type GlobalDatesTypes = {
  startDate: StartDate;
  endDate: EndDate;
}

export type RoomType = {
  roomId: number;
  startDate: StartDate;
  endDate: EndDate;
}

export type formValues = {
  clientId:  number;
  rooms: Array<RoomType>;
  subtotal: number;
  total: number;
  tax: number;
  reservationStatus: number;
  // globalDates: GlobalDatesTypes;
}

