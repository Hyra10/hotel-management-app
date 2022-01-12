import memoizeOne from 'memoize-one';
import {
  GetAllServicesDdQuery, GetAllRoomStatusesDdQuery,
  GetAllRoomViewsDdQuery, GetAllBedsDdQuery, GetAllReservationStatusesDdQuery,
  GetAllServiceStatusesDdQuery, GetAllRoomTypesDdQuery,
  GetAllUserRolesDdQuery, GetAllHotelsQuery
} from '../../generated/graphql'
import { mapToDropDown } from '../../components/Common/Dropdown/dropdown.helper'

const mapServicesDd = (payload: GetAllServicesDdQuery) => 
  payload?.getAllServices.map(x => mapToDropDown(x.name, x.id));

const mapRoomStatusesDd = (payload: GetAllRoomStatusesDdQuery) => 
  payload?.getAllRoomStatuses.map(x => mapToDropDown(x.name, x.id));

const mapRoomTypesDd = (payload: GetAllRoomTypesDdQuery) => 
  payload?.getAllRoomTypes.map(x => mapToDropDown(x.name, x.id));

const mapRoomViewsDd = (payload: GetAllRoomViewsDdQuery) => 
  payload?.getAllRoomView.map(x => mapToDropDown(x.name, x.id));

const mapBedsDd = (payload: GetAllBedsDdQuery) => 
  payload?.getAllBeds.map(x => mapToDropDown(x.name, x.id));

const mapServiceStatusDd = (payload: GetAllServiceStatusesDdQuery) => 
  payload?.getAllServiceStatuses.map(x => mapToDropDown(x.name, x.id));

const mapReservationStatusDd = (payload: GetAllReservationStatusesDdQuery) => 
  payload?.getAllReservationStatuses.map(x => mapToDropDown(x.name, x.id));

const mapUserRolesDd = (payload: GetAllUserRolesDdQuery) => 
payload?.getAllUserRoles.map(x => mapToDropDown(x.name, x.id));

const mapHotelsDd = (payload: GetAllHotelsQuery) => 
payload?.getAllHotels.map(x => mapToDropDown(x.name, x.hotelId));

export const mapServices = mapServicesDd;
export const mapRoomStatuses = memoizeOne(mapRoomStatusesDd);
export const mapRoomTypes = memoizeOne(mapRoomTypesDd);
export const mapRoomViews = memoizeOne(mapRoomViewsDd);
export const mapBeds = memoizeOne(mapBedsDd);
export const mapServiceStatus = memoizeOne(mapServiceStatusDd);
export const mapReservationStatus = memoizeOne(mapReservationStatusDd);
export const mapUserRoles = memoizeOne(mapUserRolesDd);
export const mapHotels = memoizeOne(mapHotelsDd);
