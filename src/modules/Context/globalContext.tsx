import React, { FC, createContext, useEffect, useState } from "react";
import {
  useGetAllServicesDdLazyQuery, useGetAllRoomStatusesDdLazyQuery,
  useGetAllBedsDdLazyQuery, useGetAllRoomTypesDdLazyQuery,
  useGetAllRoomViewsDdLazyQuery, useGetAllServiceStatusesDdLazyQuery,
  useGetAllReservationStatusesDdLazyQuery, useGetAllUserRolesDdLazyQuery,
  useGetAllHotelsLazyQuery,
} from '../../generated/graphql';
import { getAccessToken } from "../../utils/accessToken";
import { UseAuth } from "./AuthContext/useAuthContext";
import {
  mapBeds, mapHotels, mapReservationStatus, mapRoomStatuses,
  mapRoomTypes, mapRoomViews, mapServices,
  mapServiceStatus, mapUserRoles
} from "./globalContext.helper";
import { AllData, HotelType } from './globalContext.types'

const GlobalContext = createContext({});

const GlobalProvider: FC = ({ children }) => {
  const { userData } = UseAuth();
  const [chosenHotelId, setChosenHotelId] = useState(0);
  const [allData, setAllData] = useState({} as AllData);
  const [allServiceFn, { data: servicesData }] = useGetAllServicesDdLazyQuery();
  const [getAllRoomsFn, { data: roomStatusesData }] = useGetAllRoomStatusesDdLazyQuery();
  const [getAllBedsFn, { data: bedsData }] = useGetAllBedsDdLazyQuery();
  const [getAllRoomTypesFn, { data: roomTypesData }] = useGetAllRoomTypesDdLazyQuery();
  const [getRoomViews, { data: roomViewsData }] = useGetAllRoomViewsDdLazyQuery();
  const [getAllServiceStatusesFn, { data: serviceStatusesData }] = useGetAllServiceStatusesDdLazyQuery();
  const [getAllReservationStatusesFn, { data: reservationStatusesData }] = useGetAllReservationStatusesDdLazyQuery();
  const [getAllUserRolesFn, { data: userRolesData }] = useGetAllUserRolesDdLazyQuery();
  const [getAllHotelsFn, { data: userHotelsData }] = useGetAllHotelsLazyQuery();

  useEffect(() => {
    const token = getAccessToken();
    if(typeof userData.userRoleId !== 'undefined' && token)  {
      getAllRoomsFn();
      getAllBedsFn();
      getAllRoomTypesFn();
      getRoomViews();
      getAllServiceStatusesFn();
      getAllReservationStatusesFn();
      getAllUserRolesFn();
      getAllHotelsFn();
      allServiceFn({ variables: { hotelId: chosenHotelId }})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData])

  useEffect(() => {
    const services = servicesData && mapServices(servicesData);
    const roomStatuses = roomStatusesData && mapRoomStatuses(roomStatusesData);
    const beds = bedsData && mapBeds(bedsData);
    const roomTypes = roomTypesData && mapRoomTypes(roomTypesData);
    const roomViews = roomViewsData && mapRoomViews(roomViewsData);
    const serviceStatuses = serviceStatusesData && mapServiceStatus(serviceStatusesData);
    const reservationStatuses = reservationStatusesData && mapReservationStatus(reservationStatusesData);
    const hotelsPerUser = userHotelsData?.getAllHotels as HotelType;
    const hotels = userHotelsData && mapHotels(userHotelsData);
    const userRoles = userRolesData && mapUserRoles(userRolesData);

    setAllData((oldData) => ({
        ...oldData,
        services,
        serviceStatuses,
        roomStatuses,
        roomTypes,
        roomViews,
        beds,
        reservationStatuses,
        userRoles,
        hotelsPerUser,
        hotels,
        setHotelId,
        chosenHotelId,
    }) as AllData);

  }, [servicesData, roomStatusesData, bedsData, roomTypesData,
    roomViewsData, serviceStatusesData, reservationStatusesData,
    userRolesData, userHotelsData, chosenHotelId]);

  useEffect(() => {
    if(typeof userData.userRoleId !== 'undefined') {
      allServiceFn({ variables: { hotelId: chosenHotelId }})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenHotelId, allServiceFn])
  
  const setHotelId = (hotelId: number) => {
    setChosenHotelId(hotelId)
  }

  return (
    <GlobalContext.Provider value={allData}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider }