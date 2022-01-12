import { DropdownOptions } from '../../components/Common/Dropdown/dropdown.types'

export type AllData = {
  services: DropdownOptions[],
  roomTypes: DropdownOptions[],
  roomViews: DropdownOptions[],
  roomStatuses: DropdownOptions[],
  beds: DropdownOptions[],
  serviceStatuses: DropdownOptions[],
  reservationStatuses: DropdownOptions[],
  userRoles: DropdownOptions[],
  hotels: DropdownOptions[],
  hotelsPerUser: HotelType,
  setHotelId: (hotelId: number) => void,
  chosenHotelId: number,
}

export type HotelData = {
  hotelId?: number
  name?: string
  description?: string
}

export type HotelType = {
  hotelData?: Array<HotelData>
}