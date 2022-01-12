export type Rooms = {
  checkInDay: number,
  totalColSpan: number,
  reservationId: number,
  reservationStatus?: string,
}

export type ReservationRooms = {
  [roomId: string]: Array<Rooms>
}

export type ReservationDates = {
  [date: string]: ReservationRooms
}

