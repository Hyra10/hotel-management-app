import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Bed = {
  __typename?: 'Bed';
  bedId: Scalars['ID'];
  name: Scalars['String'];
  abbr?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  roomBeds: Array<RoomBed>;
};

export type BedInput = {
  bedId: Scalars['Float'];
  name: Scalars['String'];
  abbr: Scalars['String'];
  description: Scalars['String'];
};

export type Client = {
  __typename?: 'Client';
  clientId: Scalars['ID'];
  name: Scalars['String'];
  firstSurname: Scalars['String'];
  secondSurname: Scalars['String'];
  cedula: Scalars['String'];
  age: Scalars['Float'];
  phoneNumber: Scalars['String'];
  nationality: Scalars['String'];
  observation?: Maybe<Scalars['String']>;
  disability?: Maybe<Scalars['String']>;
  alergic?: Maybe<Scalars['String']>;
  isLactoseIntolerant: Scalars['Boolean'];
  creditCardNumber?: Maybe<Scalars['String']>;
  cvc?: Maybe<Scalars['String']>;
  expiredDate?: Maybe<Scalars['String']>;
  cardName?: Maybe<Scalars['String']>;
  hotel: Hotel;
  clientServiceReservations: Array<ClientServiceReservation>;
  reservations: Array<Reservation>;
};

export type ClientInput = {
  clientId: Scalars['Float'];
  name: Scalars['String'];
  firstSurname: Scalars['String'];
  secondSurname: Scalars['String'];
  cedula: Scalars['String'];
  age: Scalars['Float'];
  phoneNumber: Scalars['String'];
  nationality: Scalars['String'];
  observation?: Maybe<Scalars['String']>;
  disability?: Maybe<Scalars['String']>;
  alergic?: Maybe<Scalars['String']>;
  isLactoseIntolerant: Scalars['Boolean'];
  creditCardNumber: Scalars['String'];
  cvc: Scalars['String'];
  expiredDate: Scalars['DateTime'];
  cardName: Scalars['String'];
  hotelId: Scalars['Float'];
};

export type ClientServiceReservation = {
  __typename?: 'ClientServiceReservation';
  clientServiceReservationId: Scalars['ID'];
  client: Client;
  serviceReservation: ServiceReservation;
};


export type Hotel = {
  __typename?: 'Hotel';
  hotelId: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  clients: Array<Client>;
  user: User;
  rooms: Array<Room>;
  services: Array<Service>;
};

export type HotelInput = {
  hotelId: Scalars['Float'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type LoginInputType = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  registerStudent: User;
  login: LoginResponse;
  revokeRefreshToken: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  addClient: Client;
  updateClient: Client;
  deleteClient: Scalars['Boolean'];
  addService: Service;
  updateService: Service;
  deleteService: Service;
  addServiceReservation: ServiceReservation;
  updateServiceReservation: ServiceReservation;
  deleteServiceReservation: ServiceReservation;
  addServiceStatus: ServiceStatus;
  updateServiceStatus: ServiceStatus;
  deleteServiceStatus: ServiceStatus;
  addReservationStatus: ReservationStatus;
  updateReservationStatus: ReservationStatus;
  deleteReservationStatus: ReservationStatus;
  addReservation: Reservation;
  UpdateReservation: Scalars['Boolean'];
  addReservationItem: ReservationItem;
  updateReservationItem: ReservationItem;
  addRoom: Room;
  updateRoom: Room;
  deleteRoom: Room;
  addRoomView: RoomView;
  updateRoomView: RoomView;
  deleteRoomView: RoomView;
  addRoomStatus: RoomStatus;
  updateRoomStatus: RoomStatus;
  deleteRoomStatus: RoomStatus;
  addRoomType: RoomType;
  updateRoomType: RoomType;
  deleteRoomType: Scalars['Boolean'];
  addBed: Bed;
  updateBed: Bed;
  deleteBed: Bed;
  addHotel: Hotel;
  updateHotel: Hotel;
  deleteHotel: Scalars['Boolean'];
  addUser: User;
  updateUser: User;
  deleteUser: User;
  changePassword: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
};


export type MutationRegisterStudentArgs = {
  data: RegisterInputType;
};


export type MutationLoginArgs = {
  data: LoginInputType;
};


export type MutationRevokeRefreshTokenArgs = {
  userId: Scalars['Int'];
};


export type MutationAddClientArgs = {
  data: ClientInput;
};


export type MutationUpdateClientArgs = {
  data: ClientInput;
};


export type MutationDeleteClientArgs = {
  clientId: Scalars['Int'];
};


export type MutationAddServiceArgs = {
  data: ServiceInput;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
};


export type MutationDeleteServiceArgs = {
  serviceId: Scalars['Int'];
};


export type MutationAddServiceReservationArgs = {
  data: ServiceReservationInput;
};


export type MutationUpdateServiceReservationArgs = {
  data: ServiceReservationInput;
};


export type MutationDeleteServiceReservationArgs = {
  serviceReservationId: Scalars['Int'];
};


export type MutationAddServiceStatusArgs = {
  data: ServiceStatusInput;
};


export type MutationUpdateServiceStatusArgs = {
  data: ServiceStatusInput;
};


export type MutationDeleteServiceStatusArgs = {
  serviceStatusId: Scalars['Int'];
};


export type MutationAddReservationStatusArgs = {
  data: ReservationStatusInput;
};


export type MutationUpdateReservationStatusArgs = {
  data: ReservationStatusInput;
};


export type MutationDeleteReservationStatusArgs = {
  reservationStatusId: Scalars['Int'];
};


export type MutationAddReservationArgs = {
  data: ReservationInput;
};


export type MutationUpdateReservationArgs = {
  data: UpdateReservationInput;
};


export type MutationAddReservationItemArgs = {
  data: ReservationItemInput;
};


export type MutationUpdateReservationItemArgs = {
  data: ReservationItemInput;
};


export type MutationAddRoomArgs = {
  data: RoomInput;
};


export type MutationUpdateRoomArgs = {
  data: RoomInput;
};


export type MutationDeleteRoomArgs = {
  roomId: Scalars['Int'];
};


export type MutationAddRoomViewArgs = {
  data: RoomViewInput;
};


export type MutationUpdateRoomViewArgs = {
  data: RoomViewInput;
};


export type MutationDeleteRoomViewArgs = {
  roomViewId: Scalars['Int'];
};


export type MutationAddRoomStatusArgs = {
  data: RoomStatusInput;
};


export type MutationUpdateRoomStatusArgs = {
  data: RoomStatusInput;
};


export type MutationDeleteRoomStatusArgs = {
  roomStatusId: Scalars['Int'];
};


export type MutationAddRoomTypeArgs = {
  data: RoomTypeInput;
};


export type MutationUpdateRoomTypeArgs = {
  data: RoomTypeInput;
};


export type MutationDeleteRoomTypeArgs = {
  roomTypeId: Scalars['Int'];
};


export type MutationAddBedArgs = {
  data: BedInput;
};


export type MutationUpdateBedArgs = {
  data: BedInput;
};


export type MutationDeleteBedArgs = {
  bedId: Scalars['Int'];
};


export type MutationAddHotelArgs = {
  data: HotelInput;
};


export type MutationUpdateHotelArgs = {
  data: HotelInput;
};


export type MutationDeleteHotelArgs = {
  hotelId: Scalars['Int'];
};


export type MutationAddUserArgs = {
  data: UserInput;
};


export type MutationUpdateUserArgs = {
  data: UserInput;
};


export type MutationDeleteUserArgs = {
  userId: Scalars['Int'];
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  userId: Scalars['Int'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type ProfessorStudent = {
  __typename?: 'ProfessorStudent';
  professorStudentId: Scalars['ID'];
  profesor: User;
  student: User;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  getClientById: Client;
  getAllClients: Array<Client>;
  getAllClientsBySearchCriteria: Array<Client>;
  getServiceById: Service;
  getAllServices: Array<Service>;
  getServiceReservationById: ServiceReservation;
  getAllServiceReservation: Array<ServiceReservation>;
  getAllServiceStatuses: Array<ServiceStatus>;
  getServiceStatusById: ServiceStatus;
  getAllReservationStatuses: Array<ReservationStatus>;
  getReservationStatusById: ReservationStatus;
  getReservationById: Reservation;
  getAllReservation: Array<Reservation>;
  getReservationItemById: ReservationItem;
  getAllReservationItems: Array<ReservationItem>;
  getAllReservationRooms: Array<ReservationRoom>;
  getRoomById: Room;
  getAllRooms: Array<Room>;
  getRoomViewById: RoomView;
  getAllRoomView: Array<RoomView>;
  getAllRoomStatuses: Array<RoomStatus>;
  getRoomStatusById: RoomStatus;
  getAllRoomTypes: Array<RoomType>;
  getRoomTypeById: RoomType;
  getAllBeds: Array<Bed>;
  getBedById: Bed;
  getAllHotels: Array<Hotel>;
  getHotelById: Hotel;
  getAllUsers: Array<User>;
  getAllProfesors: Array<User>;
  getUserById: User;
  getAllUserRoles: Array<UserRole>;
  GetAllReports: Array<Report>;
  GetAllReportsByStudentId: Array<Report>;
};


export type QueryGetClientByIdArgs = {
  clientId: Scalars['Float'];
};


export type QueryGetAllClientsArgs = {
  hotelId: Scalars['Int'];
};


export type QueryGetAllClientsBySearchCriteriaArgs = {
  hotelId: Scalars['Int'];
  criteria: Scalars['String'];
};


export type QueryGetServiceByIdArgs = {
  serviceId: Scalars['Int'];
};


export type QueryGetAllServicesArgs = {
  hotelId: Scalars['Int'];
};


export type QueryGetServiceReservationByIdArgs = {
  serviceReservationId: Scalars['Int'];
};


export type QueryGetAllServiceReservationArgs = {
  hotelId: Scalars['Int'];
  endOfWeek: Scalars['DateTime'];
  startOfWeek: Scalars['DateTime'];
};


export type QueryGetServiceStatusByIdArgs = {
  serviceStatusId: Scalars['Int'];
};


export type QueryGetReservationStatusByIdArgs = {
  reservationStatusId: Scalars['Int'];
};


export type QueryGetReservationByIdArgs = {
  reservationId: Scalars['Int'];
};


export type QueryGetReservationItemByIdArgs = {
  reservationItemId: Scalars['Int'];
};


export type QueryGetAllReservationItemsArgs = {
  reservationId: Scalars['Int'];
};


export type QueryGetAllReservationRoomsArgs = {
  hotelId: Scalars['Int'];
  endDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
};


export type QueryGetRoomByIdArgs = {
  roomId: Scalars['Float'];
};


export type QueryGetAllRoomsArgs = {
  hotelId: Scalars['Int'];
};


export type QueryGetRoomViewByIdArgs = {
  roomViewId: Scalars['Int'];
};


export type QueryGetRoomStatusByIdArgs = {
  roomStatusId: Scalars['Int'];
};


export type QueryGetRoomTypeByIdArgs = {
  roomTypeId: Scalars['Int'];
};


export type QueryGetBedByIdArgs = {
  bedId: Scalars['Int'];
};


export type QueryGetHotelByIdArgs = {
  hotelId: Scalars['Int'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['Int'];
};


export type QueryGetAllReportsArgs = {
  profesorId: Scalars['Int'];
};


export type QueryGetAllReportsByStudentIdArgs = {
  studentId: Scalars['Int'];
};

export type RegisterInputType = {
  userName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  profesorId: Scalars['Float'];
};

export type Report = {
  __typename?: 'Report';
  reportId: Scalars['ID'];
  message: Scalars['String'];
  createdAt: Scalars['DateTime'];
  user: User;
};

export type Reservation = {
  __typename?: 'Reservation';
  reservationId: Scalars['ID'];
  subtotal: Scalars['Float'];
  tax: Scalars['Float'];
  total: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  client: Client;
  reservationStatus: ReservationStatus;
  reservationItems: Array<ReservationItem>;
  reservationRooms: Array<ReservationRoom>;
};

export type ReservationInput = {
  clientId: Scalars['Float'];
  room: Array<RoomDates>;
  subtotal: Scalars['Float'];
  tax: Scalars['Float'];
  total: Scalars['Float'];
  reservationStatusId: Scalars['Float'];
};

export type ReservationItem = {
  __typename?: 'ReservationItem';
  reservationItemId: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  reservation: Reservation;
};

export type ReservationItemInput = {
  reservationItemId: Scalars['Float'];
  reservationId: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type ReservationRoom = {
  __typename?: 'ReservationRoom';
  reservationRoomId: Scalars['ID'];
  checkInDate: Scalars['DateTime'];
  checkOutDate: Scalars['DateTime'];
  reservation: Reservation;
  room: Room;
};

export type ReservationStatus = {
  __typename?: 'ReservationStatus';
  reservationStatusId: Scalars['ID'];
  name: Scalars['String'];
  abbr?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  reservations: Array<Reservation>;
};

export type ReservationStatusInput = {
  reservationStatusId: Scalars['Float'];
  name: Scalars['String'];
  abbr: Scalars['String'];
  description: Scalars['String'];
};

export type Room = {
  __typename?: 'Room';
  roomId: Scalars['ID'];
  roomNumber: Scalars['Float'];
  floorNumber?: Maybe<Scalars['Float']>;
  buildingNumber?: Maybe<Scalars['Float']>;
  price: Scalars['Float'];
  allowHandicap: Scalars['Boolean'];
  observation?: Maybe<Scalars['String']>;
  reservationRooms: Array<ReservationRoom>;
  hotel: Hotel;
  roomStatus: RoomStatus;
  roomType: RoomType;
  roomView: RoomView;
  roomBeds: Array<RoomBed>;
};

export type RoomBed = {
  __typename?: 'RoomBed';
  roomBedId: Scalars['ID'];
  bed: Bed;
  room: Room;
};

export type RoomDates = {
  roomId: Scalars['Float'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
};

export type RoomInput = {
  roomId: Scalars['Float'];
  roomNumber: Scalars['Float'];
  floorNumber: Scalars['Float'];
  buildingNumber: Scalars['Float'];
  price: Scalars['Float'];
  beds: Array<Scalars['Float']>;
  roomType: Scalars['Float'];
  roomView: Scalars['Float'];
  roomStatus: Scalars['Float'];
  allowHandicap: Scalars['Boolean'];
  observation: Scalars['String'];
  hotelId: Scalars['Float'];
};

export type RoomStatus = {
  __typename?: 'RoomStatus';
  roomStatusId: Scalars['ID'];
  name: Scalars['String'];
  abbr: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  rooms: Array<Room>;
};

export type RoomStatusInput = {
  roomStatusId: Scalars['Float'];
  name: Scalars['String'];
  abbr: Scalars['String'];
  description: Scalars['String'];
  color?: Maybe<Scalars['String']>;
};

export type RoomType = {
  __typename?: 'RoomType';
  roomTypeId: Scalars['ID'];
  name: Scalars['String'];
  abbr: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  rooms: Array<Room>;
};

export type RoomTypeInput = {
  roomTypeId: Scalars['Float'];
  name: Scalars['String'];
  abbr: Scalars['String'];
  description: Scalars['String'];
};

export type RoomView = {
  __typename?: 'RoomView';
  roomViewId: Scalars['ID'];
  name: Scalars['String'];
  abbr?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rooms: Array<Room>;
};

export type RoomViewInput = {
  roomViewId: Scalars['Float'];
  name: Scalars['String'];
  abbr: Scalars['String'];
  description: Scalars['String'];
};

export type Service = {
  __typename?: 'Service';
  serviceId: Scalars['ID'];
  name: Scalars['String'];
  observation?: Maybe<Scalars['String']>;
  hotel: Hotel;
  serviceReservations: Array<ServiceReservation>;
};

export type ServiceInput = {
  serviceId: Scalars['Float'];
  name: Scalars['String'];
  observation: Scalars['String'];
  hotelId: Scalars['Float'];
};

export type ServiceReservation = {
  __typename?: 'ServiceReservation';
  serviceReservationId: Scalars['ID'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  serviceSubtype?: Maybe<Scalars['String']>;
  clientNotes?: Maybe<Scalars['String']>;
  staffNotes?: Maybe<Scalars['String']>;
  areThereChildren: Scalars['Boolean'];
  clientServiceReservations: Array<ClientServiceReservation>;
  service: Service;
  serviceStatus: ServiceStatus;
};

export type ServiceReservationInput = {
  serviceReservationId: Scalars['Float'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  serviceSubtype?: Maybe<Scalars['String']>;
  clientNotes?: Maybe<Scalars['String']>;
  staffNotes?: Maybe<Scalars['String']>;
  areThereChildren?: Maybe<Scalars['Boolean']>;
  clientId: Array<Scalars['Float']>;
  serviceStatusId: Scalars['Float'];
  serviceId: Scalars['Float'];
};

export type ServiceStatus = {
  __typename?: 'ServiceStatus';
  serviceStatusId: Scalars['ID'];
  name: Scalars['String'];
  abbr?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  serviceReservations: Array<ServiceReservation>;
};

export type ServiceStatusInput = {
  serviceStatusId: Scalars['Float'];
  name: Scalars['String'];
  abbr: Scalars['String'];
  description: Scalars['String'];
};

export type UpdateReservationInput = {
  reservationId: Scalars['Float'];
  reservationStatusId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  userId: Scalars['ID'];
  userName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  tokenVersion: Scalars['Float'];
  needsNewPassword: Scalars['Boolean'];
  hotels: Array<Hotel>;
  professorStudents: Array<ProfessorStudent>;
  professorStudents2: Array<ProfessorStudent>;
  reports: Array<Report>;
  userRole: UserRole;
};

export type UserInput = {
  userId: Scalars['Float'];
  userName: Scalars['String'];
  email: Scalars['String'];
  userRoleId: Scalars['Float'];
};

export type UserRole = {
  __typename?: 'UserRole';
  userRoleId: Scalars['ID'];
  name: Scalars['String'];
  users: Array<User>;
};

export type BedsFragmentFragment = (
  { __typename?: 'Bed' }
  & Pick<Bed, 'bedId' | 'name' | 'abbr' | 'description'>
);

export type GetAllBedsDdQueryVariables = {};


export type GetAllBedsDdQuery = (
  { __typename?: 'Query' }
  & { getAllBeds: Array<(
    { __typename?: 'Bed' }
    & Pick<Bed, 'name'>
    & { id: Bed['bedId'] }
  )> }
);

export type GetAllBedsQueryVariables = {};


export type GetAllBedsQuery = (
  { __typename?: 'Query' }
  & { getAllBeds: Array<(
    { __typename?: 'Bed' }
    & BedsFragmentFragment
  )> }
);

export type UpdateBedMutationVariables = {
  data: BedInput
};


export type UpdateBedMutation = (
  { __typename?: 'Mutation' }
  & { updateBed: (
    { __typename?: 'Bed' }
    & BedsFragmentFragment
  ) }
);

export type GetBedByIdQueryVariables = {
  bedId: Scalars['Int']
};


export type GetBedByIdQuery = (
  { __typename?: 'Query' }
  & { getBedById: (
    { __typename?: 'Bed' }
    & BedsFragmentFragment
  ) }
);

export type AddBedMutationVariables = {
  data: BedInput
};


export type AddBedMutation = (
  { __typename?: 'Mutation' }
  & { addBed: (
    { __typename?: 'Bed' }
    & BedsFragmentFragment
  ) }
);

export type DeleteBedMutationVariables = {
  bedId: Scalars['Int']
};


export type DeleteBedMutation = (
  { __typename?: 'Mutation' }
  & { deleteBed: (
    { __typename?: 'Bed' }
    & BedsFragmentFragment
  ) }
);

export type ClientFragFragment = (
  { __typename?: 'Client' }
  & Pick<Client, 'clientId' | 'name' | 'firstSurname' | 'secondSurname' | 'cedula' | 'age' | 'phoneNumber' | 'nationality' | 'observation' | 'disability' | 'alergic' | 'isLactoseIntolerant' | 'creditCardNumber' | 'cvc' | 'expiredDate' | 'cardName'>
);

export type GetAllClientsQueryVariables = {
  hotelId: Scalars['Int']
};


export type GetAllClientsQuery = (
  { __typename?: 'Query' }
  & { getAllClients: Array<(
    { __typename?: 'Client' }
    & Pick<Client, 'clientId' | 'name' | 'firstSurname' | 'secondSurname' | 'cedula' | 'phoneNumber'>
  )> }
);

export type GetAllClientsBySearchCriteriaQueryVariables = {
  criteria: Scalars['String'],
  hotelId: Scalars['Int']
};


export type GetAllClientsBySearchCriteriaQuery = (
  { __typename?: 'Query' }
  & { getAllClientsBySearchCriteria: Array<(
    { __typename?: 'Client' }
    & Pick<Client, 'clientId' | 'name' | 'firstSurname' | 'secondSurname' | 'cedula'>
  )> }
);

export type GetClientByIdQueryVariables = {
  clientId: Scalars['Float']
};


export type GetClientByIdQuery = (
  { __typename?: 'Query' }
  & { getClientById: (
    { __typename?: 'Client' }
    & ClientFragFragment
  ) }
);

export type AddClientMutationVariables = {
  data: ClientInput
};


export type AddClientMutation = (
  { __typename?: 'Mutation' }
  & { addClient: (
    { __typename?: 'Client' }
    & ClientFragFragment
  ) }
);

export type UpdateClientMutationVariables = {
  data: ClientInput
};


export type UpdateClientMutation = (
  { __typename?: 'Mutation' }
  & { updateClient: (
    { __typename?: 'Client' }
    & ClientFragFragment
  ) }
);

export type DeleteClientMutationVariables = {
  clientId: Scalars['Int']
};


export type DeleteClientMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteClient'>
);

export type ForgotPasswordMutationVariables = {
  email: Scalars['String']
};


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type HotelFragmentFragment = (
  { __typename?: 'Hotel' }
  & Pick<Hotel, 'hotelId' | 'name' | 'description'>
);

export type GetAllHotelsQueryVariables = {};


export type GetAllHotelsQuery = (
  { __typename?: 'Query' }
  & { getAllHotels: Array<(
    { __typename?: 'Hotel' }
    & HotelFragmentFragment
  )> }
);

export type UpdateHotelMutationVariables = {
  data: HotelInput
};


export type UpdateHotelMutation = (
  { __typename?: 'Mutation' }
  & { updateHotel: (
    { __typename?: 'Hotel' }
    & HotelFragmentFragment
  ) }
);

export type GetHotelByIdQueryVariables = {
  hotelId: Scalars['Int']
};


export type GetHotelByIdQuery = (
  { __typename?: 'Query' }
  & { getHotelById: (
    { __typename?: 'Hotel' }
    & HotelFragmentFragment
  ) }
);

export type AddHotelMutationVariables = {
  data: HotelInput
};


export type AddHotelMutation = (
  { __typename?: 'Mutation' }
  & { addHotel: (
    { __typename?: 'Hotel' }
    & HotelFragmentFragment
  ) }
);

export type DeleteHotelMutationVariables = {
  hotelId: Scalars['Int']
};


export type DeleteHotelMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteHotel'>
);

export type LoginMutationVariables = {
  data: LoginInputType
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'userName'>
      & { userRole: (
        { __typename?: 'UserRole' }
        & Pick<UserRole, 'userRoleId'>
      ) }
    ) }
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'email' | 'userName'>
    & { userRole: (
      { __typename?: 'UserRole' }
      & Pick<UserRole, 'userRoleId'>
    ) }
  ) }
);

export type RegisterStudentMutationVariables = {
  data: RegisterInputType
};


export type RegisterStudentMutation = (
  { __typename?: 'Mutation' }
  & { registerStudent: (
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'userName' | 'email'>
  ) }
);

export type ReportFragmentFragment = (
  { __typename?: 'Report' }
  & Pick<Report, 'reportId' | 'message' | 'createdAt'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'userName'>
  ) }
);

export type GetAllReportsQueryVariables = {
  profesorId: Scalars['Int']
};


export type GetAllReportsQuery = (
  { __typename?: 'Query' }
  & { GetAllReports: Array<(
    { __typename?: 'Report' }
    & ReportFragmentFragment
  )> }
);

export type GetAllReportsByStudentIdQueryVariables = {
  studentId: Scalars['Int']
};


export type GetAllReportsByStudentIdQuery = (
  { __typename?: 'Query' }
  & { GetAllReportsByStudentId: Array<(
    { __typename?: 'Report' }
    & ReportFragmentFragment
  )> }
);

export type ReservationFragmentFragment = (
  { __typename?: 'Reservation' }
  & Pick<Reservation, 'subtotal' | 'tax' | 'total'>
  & { client: (
    { __typename?: 'Client' }
    & Pick<Client, 'clientId'>
  ), reservationRooms: Array<(
    { __typename?: 'ReservationRoom' }
    & Pick<ReservationRoom, 'reservationRoomId' | 'checkInDate' | 'checkOutDate'>
  )>, reservationItems: Array<(
    { __typename?: 'ReservationItem' }
    & Pick<ReservationItem, 'reservationItemId' | 'name' | 'price'>
  )>, reservationStatus: (
    { __typename?: 'ReservationStatus' }
    & Pick<ReservationStatus, 'reservationStatusId'>
  ) }
);

export type GetAllReservationQueryVariables = {};


export type GetAllReservationQuery = (
  { __typename?: 'Query' }
  & { getAllReservation: Array<(
    { __typename?: 'Reservation' }
    & ReservationFragmentFragment
  )> }
);

export type GetReservationByIdQueryVariables = {
  reservationId: Scalars['Int']
};


export type GetReservationByIdQuery = (
  { __typename?: 'Query' }
  & { getReservationById: (
    { __typename?: 'Reservation' }
    & Pick<Reservation, 'subtotal' | 'tax' | 'total'>
    & { client: (
      { __typename?: 'Client' }
      & Pick<Client, 'clientId' | 'cedula' | 'name' | 'firstSurname' | 'secondSurname'>
    ), reservationRooms: Array<(
      { __typename?: 'ReservationRoom' }
      & Pick<ReservationRoom, 'reservationRoomId' | 'checkInDate' | 'checkOutDate'>
      & { room: (
        { __typename?: 'Room' }
        & Pick<Room, 'roomNumber'>
        & { roomType: (
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'name'>
        ) }
      ) }
    )>, reservationItems: Array<(
      { __typename?: 'ReservationItem' }
      & Pick<ReservationItem, 'reservationItemId' | 'name' | 'price'>
    )>, reservationStatus: (
      { __typename?: 'ReservationStatus' }
      & Pick<ReservationStatus, 'reservationStatusId'>
    ) }
  ) }
);

export type AddReservationMutationVariables = {
  data: ReservationInput
};


export type AddReservationMutation = (
  { __typename?: 'Mutation' }
  & { addReservation: (
    { __typename?: 'Reservation' }
    & { client: (
      { __typename?: 'Client' }
      & Pick<Client, 'clientId'>
    ) }
  ) }
);

export type UpdateReservationMutationVariables = {
  data: UpdateReservationInput
};


export type UpdateReservationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'UpdateReservation'>
);

export type ReservationItemFragmentFragment = (
  { __typename?: 'ReservationItem' }
  & Pick<ReservationItem, 'reservationItemId' | 'name' | 'price' | 'createdAt'>
);

export type GetAllReservationItemsQueryVariables = {
  reservationId: Scalars['Int']
};


export type GetAllReservationItemsQuery = (
  { __typename?: 'Query' }
  & { getAllReservationItems: Array<(
    { __typename?: 'ReservationItem' }
    & ReservationItemFragmentFragment
  )> }
);

export type GetReservationItemByIdQueryVariables = {
  reservationItemId: Scalars['Int']
};


export type GetReservationItemByIdQuery = (
  { __typename?: 'Query' }
  & { getReservationItemById: (
    { __typename?: 'ReservationItem' }
    & ReservationItemFragmentFragment
  ) }
);

export type AddReservationItemMutationVariables = {
  data: ReservationItemInput
};


export type AddReservationItemMutation = (
  { __typename?: 'Mutation' }
  & { addReservationItem: (
    { __typename?: 'ReservationItem' }
    & Pick<ReservationItem, 'reservationItemId'>
  ) }
);

export type UpdateReservationItemMutationVariables = {
  data: ReservationItemInput
};


export type UpdateReservationItemMutation = (
  { __typename?: 'Mutation' }
  & { updateReservationItem: (
    { __typename?: 'ReservationItem' }
    & Pick<ReservationItem, 'reservationItemId'>
  ) }
);

export type GetAllReservationRoomsQueryVariables = {
  startDate: Scalars['DateTime'],
  endDate: Scalars['DateTime'],
  hotelId: Scalars['Int']
};


export type GetAllReservationRoomsQuery = (
  { __typename?: 'Query' }
  & { getAllReservationRooms: Array<(
    { __typename?: 'ReservationRoom' }
    & Pick<ReservationRoom, 'checkInDate' | 'checkOutDate'>
    & { reservation: (
      { __typename?: 'Reservation' }
      & Pick<Reservation, 'reservationId'>
      & { reservationStatus: (
        { __typename?: 'ReservationStatus' }
        & Pick<ReservationStatus, 'abbr'>
      ) }
    ), room: (
      { __typename?: 'Room' }
      & Pick<Room, 'roomId'>
    ) }
  )> }
);

export type ReservationStatusFragmentFragment = (
  { __typename?: 'ReservationStatus' }
  & Pick<ReservationStatus, 'reservationStatusId' | 'name' | 'abbr' | 'description'>
);

export type GetAllReservationStatusesQueryVariables = {};


export type GetAllReservationStatusesQuery = (
  { __typename?: 'Query' }
  & { getAllReservationStatuses: Array<(
    { __typename?: 'ReservationStatus' }
    & ReservationStatusFragmentFragment
  )> }
);

export type GetAllReservationStatusesDdQueryVariables = {};


export type GetAllReservationStatusesDdQuery = (
  { __typename?: 'Query' }
  & { getAllReservationStatuses: Array<(
    { __typename?: 'ReservationStatus' }
    & Pick<ReservationStatus, 'name'>
    & { id: ReservationStatus['reservationStatusId'] }
  )> }
);

export type UpdateReservationStatusMutationVariables = {
  data: ReservationStatusInput
};


export type UpdateReservationStatusMutation = (
  { __typename?: 'Mutation' }
  & { updateReservationStatus: (
    { __typename?: 'ReservationStatus' }
    & ReservationStatusFragmentFragment
  ) }
);

export type GetReservationStatusByIdQueryVariables = {
  reservationStatusId: Scalars['Int']
};


export type GetReservationStatusByIdQuery = (
  { __typename?: 'Query' }
  & { getReservationStatusById: (
    { __typename?: 'ReservationStatus' }
    & ReservationStatusFragmentFragment
  ) }
);

export type AddReservationStatusMutationVariables = {
  data: ReservationStatusInput
};


export type AddReservationStatusMutation = (
  { __typename?: 'Mutation' }
  & { addReservationStatus: (
    { __typename?: 'ReservationStatus' }
    & ReservationStatusFragmentFragment
  ) }
);

export type DeleteReservationStatusMutationVariables = {
  reservationStatusId: Scalars['Int']
};


export type DeleteReservationStatusMutation = (
  { __typename?: 'Mutation' }
  & { deleteReservationStatus: (
    { __typename?: 'ReservationStatus' }
    & ReservationStatusFragmentFragment
  ) }
);

export type RoomFragmentFragment = (
  { __typename?: 'Room' }
  & Pick<Room, 'roomId' | 'roomNumber' | 'floorNumber' | 'buildingNumber' | 'price' | 'allowHandicap'>
  & { roomType: (
    { __typename?: 'RoomType' }
    & Pick<RoomType, 'name'>
  ), roomBeds: Array<(
    { __typename?: 'RoomBed' }
    & { bed: (
      { __typename?: 'Bed' }
      & Pick<Bed, 'bedId'>
    ) }
  )> }
);

export type GetAllRoomsQueryVariables = {
  hotelId: Scalars['Int']
};


export type GetAllRoomsQuery = (
  { __typename?: 'Query' }
  & { getAllRooms: Array<(
    { __typename?: 'Room' }
    & RoomFragmentFragment
  )> }
);

export type GetAllRoomsReservationQueryVariables = {
  hotelId: Scalars['Int']
};


export type GetAllRoomsReservationQuery = (
  { __typename?: 'Query' }
  & { getAllRooms: Array<(
    { __typename?: 'Room' }
    & Pick<Room, 'roomId' | 'roomNumber'>
    & { roomStatus: (
      { __typename?: 'RoomStatus' }
      & Pick<RoomStatus, 'abbr'>
    ) }
  )> }
);

export type GetRoomByIdQueryVariables = {
  roomId: Scalars['Float']
};


export type GetRoomByIdQuery = (
  { __typename?: 'Query' }
  & { getRoomById: (
    { __typename?: 'Room' }
    & Pick<Room, 'roomId' | 'roomNumber' | 'floorNumber' | 'buildingNumber' | 'price' | 'allowHandicap' | 'observation'>
    & { roomType: (
      { __typename?: 'RoomType' }
      & Pick<RoomType, 'roomTypeId'>
    ), roomView: (
      { __typename?: 'RoomView' }
      & Pick<RoomView, 'roomViewId'>
    ), roomStatus: (
      { __typename?: 'RoomStatus' }
      & Pick<RoomStatus, 'roomStatusId'>
    ), roomBeds: Array<(
      { __typename?: 'RoomBed' }
      & { bed: (
        { __typename?: 'Bed' }
        & Pick<Bed, 'bedId'>
      ) }
    )> }
  ) }
);

export type AddRoomMutationVariables = {
  data: RoomInput
};


export type AddRoomMutation = (
  { __typename?: 'Mutation' }
  & { addRoom: (
    { __typename?: 'Room' }
    & Pick<Room, 'roomId' | 'roomNumber' | 'floorNumber' | 'buildingNumber' | 'price' | 'allowHandicap'>
  ) }
);

export type UpdateRoomMutationVariables = {
  data: RoomInput
};


export type UpdateRoomMutation = (
  { __typename?: 'Mutation' }
  & { updateRoom: (
    { __typename?: 'Room' }
    & Pick<Room, 'roomId' | 'roomNumber' | 'floorNumber' | 'buildingNumber' | 'price' | 'allowHandicap'>
  ) }
);

export type DeleteRoomMutationVariables = {
  roomId: Scalars['Int']
};


export type DeleteRoomMutation = (
  { __typename?: 'Mutation' }
  & { deleteRoom: (
    { __typename?: 'Room' }
    & RoomFragmentFragment
  ) }
);

export type RoomStatusFragmentFragment = (
  { __typename?: 'RoomStatus' }
  & Pick<RoomStatus, 'roomStatusId' | 'name' | 'abbr' | 'description' | 'color'>
);

export type GetAllRoomStatusesDdQueryVariables = {};


export type GetAllRoomStatusesDdQuery = (
  { __typename?: 'Query' }
  & { getAllRoomStatuses: Array<(
    { __typename?: 'RoomStatus' }
    & Pick<RoomStatus, 'name'>
    & { id: RoomStatus['roomStatusId'] }
  )> }
);

export type GetAllRoomStatusesQueryVariables = {};


export type GetAllRoomStatusesQuery = (
  { __typename?: 'Query' }
  & { getAllRoomStatuses: Array<(
    { __typename?: 'RoomStatus' }
    & RoomStatusFragmentFragment
  )> }
);

export type UpdateRoomStatusMutationVariables = {
  data: RoomStatusInput
};


export type UpdateRoomStatusMutation = (
  { __typename?: 'Mutation' }
  & { updateRoomStatus: (
    { __typename?: 'RoomStatus' }
    & RoomStatusFragmentFragment
  ) }
);

export type GetRoomStatusByIdQueryVariables = {
  roomStatusId: Scalars['Int']
};


export type GetRoomStatusByIdQuery = (
  { __typename?: 'Query' }
  & { getRoomStatusById: (
    { __typename?: 'RoomStatus' }
    & RoomStatusFragmentFragment
  ) }
);

export type AddRoomStatusMutationVariables = {
  data: RoomStatusInput
};


export type AddRoomStatusMutation = (
  { __typename?: 'Mutation' }
  & { addRoomStatus: (
    { __typename?: 'RoomStatus' }
    & RoomStatusFragmentFragment
  ) }
);

export type DeleteRoomStatusMutationVariables = {
  roomStatusId: Scalars['Int']
};


export type DeleteRoomStatusMutation = (
  { __typename?: 'Mutation' }
  & { deleteRoomStatus: (
    { __typename?: 'RoomStatus' }
    & RoomStatusFragmentFragment
  ) }
);

export type RoomTypesFragmentFragment = (
  { __typename?: 'RoomType' }
  & Pick<RoomType, 'roomTypeId' | 'name' | 'abbr' | 'description'>
);

export type GetAllRoomTypesDdQueryVariables = {};


export type GetAllRoomTypesDdQuery = (
  { __typename?: 'Query' }
  & { getAllRoomTypes: Array<(
    { __typename?: 'RoomType' }
    & Pick<RoomType, 'name'>
    & { id: RoomType['roomTypeId'] }
  )> }
);

export type GetAllRoomTypesQueryVariables = {};


export type GetAllRoomTypesQuery = (
  { __typename?: 'Query' }
  & { getAllRoomTypes: Array<(
    { __typename?: 'RoomType' }
    & RoomTypesFragmentFragment
  )> }
);

export type UpdateRoomTypeMutationVariables = {
  data: RoomTypeInput
};


export type UpdateRoomTypeMutation = (
  { __typename?: 'Mutation' }
  & { updateRoomType: (
    { __typename?: 'RoomType' }
    & RoomTypesFragmentFragment
  ) }
);

export type GetRoomTypeByIdQueryVariables = {
  roomTypeId: Scalars['Int']
};


export type GetRoomTypeByIdQuery = (
  { __typename?: 'Query' }
  & { getRoomTypeById: (
    { __typename?: 'RoomType' }
    & RoomTypesFragmentFragment
  ) }
);

export type AddRoomTypeMutationVariables = {
  data: RoomTypeInput
};


export type AddRoomTypeMutation = (
  { __typename?: 'Mutation' }
  & { addRoomType: (
    { __typename?: 'RoomType' }
    & RoomTypesFragmentFragment
  ) }
);

export type DeleteRoomTypeMutationVariables = {
  roomTypeId: Scalars['Int']
};


export type DeleteRoomTypeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteRoomType'>
);

export type RoomViewsFragmentFragment = (
  { __typename?: 'RoomView' }
  & Pick<RoomView, 'roomViewId' | 'name' | 'abbr' | 'description'>
);

export type GetAllRoomViewsDdQueryVariables = {};


export type GetAllRoomViewsDdQuery = (
  { __typename?: 'Query' }
  & { getAllRoomView: Array<(
    { __typename?: 'RoomView' }
    & Pick<RoomView, 'name'>
    & { id: RoomView['roomViewId'] }
  )> }
);

export type GetAllRoomViewQueryVariables = {};


export type GetAllRoomViewQuery = (
  { __typename?: 'Query' }
  & { getAllRoomView: Array<(
    { __typename?: 'RoomView' }
    & RoomViewsFragmentFragment
  )> }
);

export type UpdateRoomViewMutationVariables = {
  data: RoomViewInput
};


export type UpdateRoomViewMutation = (
  { __typename?: 'Mutation' }
  & { updateRoomView: (
    { __typename?: 'RoomView' }
    & RoomViewsFragmentFragment
  ) }
);

export type GetRoomViewByIdQueryVariables = {
  roomViewId: Scalars['Int']
};


export type GetRoomViewByIdQuery = (
  { __typename?: 'Query' }
  & { getRoomViewById: (
    { __typename?: 'RoomView' }
    & RoomViewsFragmentFragment
  ) }
);

export type AddRoomViewMutationVariables = {
  data: RoomViewInput
};


export type AddRoomViewMutation = (
  { __typename?: 'Mutation' }
  & { addRoomView: (
    { __typename?: 'RoomView' }
    & RoomViewsFragmentFragment
  ) }
);

export type DeleteRoomViewMutationVariables = {
  roomViewId: Scalars['Int']
};


export type DeleteRoomViewMutation = (
  { __typename?: 'Mutation' }
  & { deleteRoomView: (
    { __typename?: 'RoomView' }
    & RoomViewsFragmentFragment
  ) }
);

export type ServiceFragmentFragment = (
  { __typename?: 'Service' }
  & Pick<Service, 'serviceId' | 'name' | 'observation'>
);

export type GetAllServicesDdQueryVariables = {
  hotelId: Scalars['Int']
};


export type GetAllServicesDdQuery = (
  { __typename?: 'Query' }
  & { getAllServices: Array<(
    { __typename?: 'Service' }
    & Pick<Service, 'name'>
    & { id: Service['serviceId'] }
  )> }
);

export type GetAllServicesQueryVariables = {
  hotelId: Scalars['Int']
};


export type GetAllServicesQuery = (
  { __typename?: 'Query' }
  & { getAllServices: Array<(
    { __typename?: 'Service' }
    & ServiceFragmentFragment
  )> }
);

export type GetServiceByIdQueryVariables = {
  serviceId: Scalars['Int']
};


export type GetServiceByIdQuery = (
  { __typename?: 'Query' }
  & { getServiceById: (
    { __typename?: 'Service' }
    & ServiceFragmentFragment
  ) }
);

export type AddServiceMutationVariables = {
  data: ServiceInput
};


export type AddServiceMutation = (
  { __typename?: 'Mutation' }
  & { addService: (
    { __typename?: 'Service' }
    & ServiceFragmentFragment
  ) }
);

export type UpdateServiceMutationVariables = {
  data: ServiceInput
};


export type UpdateServiceMutation = (
  { __typename?: 'Mutation' }
  & { updateService: (
    { __typename?: 'Service' }
    & ServiceFragmentFragment
  ) }
);

export type DeleteServiceMutationVariables = {
  serviceId: Scalars['Int']
};


export type DeleteServiceMutation = (
  { __typename?: 'Mutation' }
  & { deleteService: (
    { __typename?: 'Service' }
    & ServiceFragmentFragment
  ) }
);

export type GetAllServiceReservationQueryVariables = {
  startOfWeek: Scalars['DateTime'],
  endOfWeek: Scalars['DateTime'],
  hotelId: Scalars['Int']
};


export type GetAllServiceReservationQuery = (
  { __typename?: 'Query' }
  & { getAllServiceReservation: Array<(
    { __typename?: 'ServiceReservation' }
    & Pick<ServiceReservation, 'serviceReservationId' | 'startDate' | 'endDate'>
    & { service: (
      { __typename?: 'Service' }
      & Pick<Service, 'name'>
    ), serviceStatus: (
      { __typename?: 'ServiceStatus' }
      & Pick<ServiceStatus, 'abbr'>
    ) }
  )> }
);

export type GetServiceReservationByIdQueryVariables = {
  serviceReservationId: Scalars['Int']
};


export type GetServiceReservationByIdQuery = (
  { __typename?: 'Query' }
  & { getServiceReservationById: (
    { __typename?: 'ServiceReservation' }
    & Pick<ServiceReservation, 'serviceReservationId' | 'startDate' | 'endDate' | 'areThereChildren' | 'clientNotes' | 'serviceSubtype' | 'staffNotes'>
    & { service: (
      { __typename?: 'Service' }
      & Pick<Service, 'serviceId'>
    ), serviceStatus: (
      { __typename?: 'ServiceStatus' }
      & Pick<ServiceStatus, 'serviceStatusId'>
    ), clientServiceReservations: Array<(
      { __typename?: 'ClientServiceReservation' }
      & { client: (
        { __typename?: 'Client' }
        & Pick<Client, 'clientId' | 'cedula' | 'name' | 'firstSurname' | 'secondSurname'>
      ) }
    )> }
  ) }
);

export type AddServiceReservationMutationVariables = {
  data: ServiceReservationInput
};


export type AddServiceReservationMutation = (
  { __typename?: 'Mutation' }
  & { addServiceReservation: (
    { __typename?: 'ServiceReservation' }
    & Pick<ServiceReservation, 'serviceReservationId'>
  ) }
);

export type UpdateServiceReservationMutationVariables = {
  data: ServiceReservationInput
};


export type UpdateServiceReservationMutation = (
  { __typename?: 'Mutation' }
  & { updateServiceReservation: (
    { __typename?: 'ServiceReservation' }
    & Pick<ServiceReservation, 'serviceReservationId'>
  ) }
);

export type DeleteServiceReservationMutationVariables = {
  serviceReservationId: Scalars['Int']
};


export type DeleteServiceReservationMutation = (
  { __typename?: 'Mutation' }
  & { deleteServiceReservation: (
    { __typename?: 'ServiceReservation' }
    & Pick<ServiceReservation, 'serviceReservationId'>
  ) }
);

export type ServiceStatusFragmentFragment = (
  { __typename?: 'ServiceStatus' }
  & Pick<ServiceStatus, 'serviceStatusId' | 'name' | 'abbr' | 'description'>
);

export type GetAllServiceStatusesQueryVariables = {};


export type GetAllServiceStatusesQuery = (
  { __typename?: 'Query' }
  & { getAllServiceStatuses: Array<(
    { __typename?: 'ServiceStatus' }
    & ServiceStatusFragmentFragment
  )> }
);

export type GetAllServiceStatusesDdQueryVariables = {};


export type GetAllServiceStatusesDdQuery = (
  { __typename?: 'Query' }
  & { getAllServiceStatuses: Array<(
    { __typename?: 'ServiceStatus' }
    & Pick<ServiceStatus, 'name'>
    & { id: ServiceStatus['serviceStatusId'] }
  )> }
);

export type UpdateServiceStatusMutationVariables = {
  data: ServiceStatusInput
};


export type UpdateServiceStatusMutation = (
  { __typename?: 'Mutation' }
  & { updateServiceStatus: (
    { __typename?: 'ServiceStatus' }
    & ServiceStatusFragmentFragment
  ) }
);

export type GetServiceStatusByIdQueryVariables = {
  serviceStatusId: Scalars['Int']
};


export type GetServiceStatusByIdQuery = (
  { __typename?: 'Query' }
  & { getServiceStatusById: (
    { __typename?: 'ServiceStatus' }
    & ServiceStatusFragmentFragment
  ) }
);

export type AddServiceStatusMutationVariables = {
  data: ServiceStatusInput
};


export type AddServiceStatusMutation = (
  { __typename?: 'Mutation' }
  & { addServiceStatus: (
    { __typename?: 'ServiceStatus' }
    & ServiceStatusFragmentFragment
  ) }
);

export type DeleteServiceStatusMutationVariables = {
  serviceStatusId: Scalars['Int']
};


export type DeleteServiceStatusMutation = (
  { __typename?: 'Mutation' }
  & { deleteServiceStatus: (
    { __typename?: 'ServiceStatus' }
    & ServiceStatusFragmentFragment
  ) }
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'userId' | 'userName' | 'email' | 'needsNewPassword'>
);

export type GetAllUsersQueryVariables = {};


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { getAllUsers: Array<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export type GetAllProfesorsQueryVariables = {};


export type GetAllProfesorsQuery = (
  { __typename?: 'Query' }
  & { getAllProfesors: Array<(
    { __typename?: 'User' }
    & Pick<User, 'userName'>
    & { id: User['userId'] }
  )> }
);

export type GetAllUsersDdQueryVariables = {};


export type GetAllUsersDdQuery = (
  { __typename?: 'Query' }
  & { getAllUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'userName'>
    & { id: User['userId'] }
  )> }
);

export type UpdateUserMutationVariables = {
  data: UserInput
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

export type GetUserByIdQueryVariables = {
  userId: Scalars['Int']
};


export type GetUserByIdQuery = (
  { __typename?: 'Query' }
  & { getUserById: (
    { __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

export type AddUserMutationVariables = {
  data: UserInput
};


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser: (
    { __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

export type DeleteUserMutationVariables = {
  userId: Scalars['Int']
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: (
    { __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

export type ResetPasswordMutationVariables = {
  userId: Scalars['Int']
};


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetPassword'>
);

export type ChangePasswordMutationVariables = {
  password: Scalars['String']
};


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changePassword'>
);

export type GetAllUserRolesDdQueryVariables = {};


export type GetAllUserRolesDdQuery = (
  { __typename?: 'Query' }
  & { getAllUserRoles: Array<(
    { __typename?: 'UserRole' }
    & Pick<UserRole, 'name'>
    & { id: UserRole['userRoleId'] }
  )> }
);

export const BedsFragmentFragmentDoc = gql`
    fragment BedsFragment on Bed {
  bedId
  name
  abbr
  description
}
    `;
export const ClientFragFragmentDoc = gql`
    fragment ClientFrag on Client {
  clientId
  name
  firstSurname
  secondSurname
  cedula
  age
  phoneNumber
  nationality
  observation
  disability
  alergic
  isLactoseIntolerant
  creditCardNumber
  cvc
  expiredDate
  cardName
}
    `;
export const HotelFragmentFragmentDoc = gql`
    fragment HotelFragment on Hotel {
  hotelId
  name
  description
}
    `;
export const ReportFragmentFragmentDoc = gql`
    fragment ReportFragment on Report {
  reportId
  message
  createdAt
  user {
    userId
    userName
  }
}
    `;
export const ReservationFragmentFragmentDoc = gql`
    fragment ReservationFragment on Reservation {
  subtotal
  tax
  total
  client {
    clientId
  }
  reservationRooms {
    reservationRoomId
    checkInDate
    checkOutDate
  }
  reservationItems {
    reservationItemId
    name
    price
  }
  reservationStatus {
    reservationStatusId
  }
}
    `;
export const ReservationItemFragmentFragmentDoc = gql`
    fragment ReservationItemFragment on ReservationItem {
  reservationItemId
  name
  price
  createdAt
}
    `;
export const ReservationStatusFragmentFragmentDoc = gql`
    fragment ReservationStatusFragment on ReservationStatus {
  reservationStatusId
  name
  abbr
  description
}
    `;
export const RoomFragmentFragmentDoc = gql`
    fragment RoomFragment on Room {
  roomId
  roomNumber
  floorNumber
  buildingNumber
  price
  allowHandicap
  roomType {
    name
  }
  roomBeds {
    bed {
      bedId
    }
  }
}
    `;
export const RoomStatusFragmentFragmentDoc = gql`
    fragment RoomStatusFragment on RoomStatus {
  roomStatusId
  name
  abbr
  description
  color
}
    `;
export const RoomTypesFragmentFragmentDoc = gql`
    fragment RoomTypesFragment on RoomType {
  roomTypeId
  name
  abbr
  description
}
    `;
export const RoomViewsFragmentFragmentDoc = gql`
    fragment RoomViewsFragment on RoomView {
  roomViewId
  name
  abbr
  description
}
    `;
export const ServiceFragmentFragmentDoc = gql`
    fragment ServiceFragment on Service {
  serviceId
  name
  observation
}
    `;
export const ServiceStatusFragmentFragmentDoc = gql`
    fragment ServiceStatusFragment on ServiceStatus {
  serviceStatusId
  name
  abbr
  description
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  userId
  userName
  email
  needsNewPassword
}
    `;
export const GetAllBedsDdDocument = gql`
    query getAllBedsDd {
  getAllBeds {
    id: bedId
    name
  }
}
    `;

/**
 * __useGetAllBedsDdQuery__
 *
 * To run a query within a React component, call `useGetAllBedsDdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBedsDdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBedsDdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBedsDdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllBedsDdQuery, GetAllBedsDdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllBedsDdQuery, GetAllBedsDdQueryVariables>(GetAllBedsDdDocument, baseOptions);
      }
export function useGetAllBedsDdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllBedsDdQuery, GetAllBedsDdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllBedsDdQuery, GetAllBedsDdQueryVariables>(GetAllBedsDdDocument, baseOptions);
        }
export type GetAllBedsDdQueryHookResult = ReturnType<typeof useGetAllBedsDdQuery>;
export type GetAllBedsDdLazyQueryHookResult = ReturnType<typeof useGetAllBedsDdLazyQuery>;
export type GetAllBedsDdQueryResult = ApolloReactCommon.QueryResult<GetAllBedsDdQuery, GetAllBedsDdQueryVariables>;
export const GetAllBedsDocument = gql`
    query getAllBeds {
  getAllBeds {
    ...BedsFragment
  }
}
    ${BedsFragmentFragmentDoc}`;

/**
 * __useGetAllBedsQuery__
 *
 * To run a query within a React component, call `useGetAllBedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBedsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBedsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBedsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllBedsQuery, GetAllBedsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllBedsQuery, GetAllBedsQueryVariables>(GetAllBedsDocument, baseOptions);
      }
export function useGetAllBedsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllBedsQuery, GetAllBedsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllBedsQuery, GetAllBedsQueryVariables>(GetAllBedsDocument, baseOptions);
        }
export type GetAllBedsQueryHookResult = ReturnType<typeof useGetAllBedsQuery>;
export type GetAllBedsLazyQueryHookResult = ReturnType<typeof useGetAllBedsLazyQuery>;
export type GetAllBedsQueryResult = ApolloReactCommon.QueryResult<GetAllBedsQuery, GetAllBedsQueryVariables>;
export const UpdateBedDocument = gql`
    mutation updateBed($data: BedInput!) {
  updateBed(data: $data) {
    ...BedsFragment
  }
}
    ${BedsFragmentFragmentDoc}`;
export type UpdateBedMutationFn = ApolloReactCommon.MutationFunction<UpdateBedMutation, UpdateBedMutationVariables>;

/**
 * __useUpdateBedMutation__
 *
 * To run a mutation, you first call `useUpdateBedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBedMutation, { data, loading, error }] = useUpdateBedMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateBedMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBedMutation, UpdateBedMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateBedMutation, UpdateBedMutationVariables>(UpdateBedDocument, baseOptions);
      }
export type UpdateBedMutationHookResult = ReturnType<typeof useUpdateBedMutation>;
export type UpdateBedMutationResult = ApolloReactCommon.MutationResult<UpdateBedMutation>;
export type UpdateBedMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBedMutation, UpdateBedMutationVariables>;
export const GetBedByIdDocument = gql`
    query getBedById($bedId: Int!) {
  getBedById(bedId: $bedId) {
    ...BedsFragment
  }
}
    ${BedsFragmentFragmentDoc}`;

/**
 * __useGetBedByIdQuery__
 *
 * To run a query within a React component, call `useGetBedByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBedByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBedByIdQuery({
 *   variables: {
 *      bedId: // value for 'bedId'
 *   },
 * });
 */
export function useGetBedByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBedByIdQuery, GetBedByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBedByIdQuery, GetBedByIdQueryVariables>(GetBedByIdDocument, baseOptions);
      }
export function useGetBedByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBedByIdQuery, GetBedByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBedByIdQuery, GetBedByIdQueryVariables>(GetBedByIdDocument, baseOptions);
        }
export type GetBedByIdQueryHookResult = ReturnType<typeof useGetBedByIdQuery>;
export type GetBedByIdLazyQueryHookResult = ReturnType<typeof useGetBedByIdLazyQuery>;
export type GetBedByIdQueryResult = ApolloReactCommon.QueryResult<GetBedByIdQuery, GetBedByIdQueryVariables>;
export const AddBedDocument = gql`
    mutation addBed($data: BedInput!) {
  addBed(data: $data) {
    ...BedsFragment
  }
}
    ${BedsFragmentFragmentDoc}`;
export type AddBedMutationFn = ApolloReactCommon.MutationFunction<AddBedMutation, AddBedMutationVariables>;

/**
 * __useAddBedMutation__
 *
 * To run a mutation, you first call `useAddBedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBedMutation, { data, loading, error }] = useAddBedMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddBedMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddBedMutation, AddBedMutationVariables>) {
        return ApolloReactHooks.useMutation<AddBedMutation, AddBedMutationVariables>(AddBedDocument, baseOptions);
      }
export type AddBedMutationHookResult = ReturnType<typeof useAddBedMutation>;
export type AddBedMutationResult = ApolloReactCommon.MutationResult<AddBedMutation>;
export type AddBedMutationOptions = ApolloReactCommon.BaseMutationOptions<AddBedMutation, AddBedMutationVariables>;
export const DeleteBedDocument = gql`
    mutation deleteBed($bedId: Int!) {
  deleteBed(bedId: $bedId) {
    ...BedsFragment
  }
}
    ${BedsFragmentFragmentDoc}`;
export type DeleteBedMutationFn = ApolloReactCommon.MutationFunction<DeleteBedMutation, DeleteBedMutationVariables>;

/**
 * __useDeleteBedMutation__
 *
 * To run a mutation, you first call `useDeleteBedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBedMutation, { data, loading, error }] = useDeleteBedMutation({
 *   variables: {
 *      bedId: // value for 'bedId'
 *   },
 * });
 */
export function useDeleteBedMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteBedMutation, DeleteBedMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteBedMutation, DeleteBedMutationVariables>(DeleteBedDocument, baseOptions);
      }
export type DeleteBedMutationHookResult = ReturnType<typeof useDeleteBedMutation>;
export type DeleteBedMutationResult = ApolloReactCommon.MutationResult<DeleteBedMutation>;
export type DeleteBedMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBedMutation, DeleteBedMutationVariables>;
export const GetAllClientsDocument = gql`
    query getAllClients($hotelId: Int!) {
  getAllClients(hotelId: $hotelId) {
    clientId
    name
    firstSurname
    secondSurname
    cedula
    phoneNumber
  }
}
    `;

/**
 * __useGetAllClientsQuery__
 *
 * To run a query within a React component, call `useGetAllClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllClientsQuery({
 *   variables: {
 *      hotelId: // value for 'hotelId'
 *   },
 * });
 */
export function useGetAllClientsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllClientsQuery, GetAllClientsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllClientsQuery, GetAllClientsQueryVariables>(GetAllClientsDocument, baseOptions);
      }
export function useGetAllClientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllClientsQuery, GetAllClientsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllClientsQuery, GetAllClientsQueryVariables>(GetAllClientsDocument, baseOptions);
        }
export type GetAllClientsQueryHookResult = ReturnType<typeof useGetAllClientsQuery>;
export type GetAllClientsLazyQueryHookResult = ReturnType<typeof useGetAllClientsLazyQuery>;
export type GetAllClientsQueryResult = ApolloReactCommon.QueryResult<GetAllClientsQuery, GetAllClientsQueryVariables>;
export const GetAllClientsBySearchCriteriaDocument = gql`
    query getAllClientsBySearchCriteria($criteria: String!, $hotelId: Int!) {
  getAllClientsBySearchCriteria(criteria: $criteria, hotelId: $hotelId) {
    clientId
    name
    firstSurname
    secondSurname
    cedula
  }
}
    `;

/**
 * __useGetAllClientsBySearchCriteriaQuery__
 *
 * To run a query within a React component, call `useGetAllClientsBySearchCriteriaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllClientsBySearchCriteriaQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllClientsBySearchCriteriaQuery({
 *   variables: {
 *      criteria: // value for 'criteria'
 *      hotelId: // value for 'hotelId'
 *   },
 * });
 */
export function useGetAllClientsBySearchCriteriaQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllClientsBySearchCriteriaQuery, GetAllClientsBySearchCriteriaQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllClientsBySearchCriteriaQuery, GetAllClientsBySearchCriteriaQueryVariables>(GetAllClientsBySearchCriteriaDocument, baseOptions);
      }
export function useGetAllClientsBySearchCriteriaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllClientsBySearchCriteriaQuery, GetAllClientsBySearchCriteriaQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllClientsBySearchCriteriaQuery, GetAllClientsBySearchCriteriaQueryVariables>(GetAllClientsBySearchCriteriaDocument, baseOptions);
        }
export type GetAllClientsBySearchCriteriaQueryHookResult = ReturnType<typeof useGetAllClientsBySearchCriteriaQuery>;
export type GetAllClientsBySearchCriteriaLazyQueryHookResult = ReturnType<typeof useGetAllClientsBySearchCriteriaLazyQuery>;
export type GetAllClientsBySearchCriteriaQueryResult = ApolloReactCommon.QueryResult<GetAllClientsBySearchCriteriaQuery, GetAllClientsBySearchCriteriaQueryVariables>;
export const GetClientByIdDocument = gql`
    query getClientById($clientId: Float!) {
  getClientById(clientId: $clientId) {
    ...ClientFrag
  }
}
    ${ClientFragFragmentDoc}`;

/**
 * __useGetClientByIdQuery__
 *
 * To run a query within a React component, call `useGetClientByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientByIdQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useGetClientByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetClientByIdQuery, GetClientByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetClientByIdQuery, GetClientByIdQueryVariables>(GetClientByIdDocument, baseOptions);
      }
export function useGetClientByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetClientByIdQuery, GetClientByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetClientByIdQuery, GetClientByIdQueryVariables>(GetClientByIdDocument, baseOptions);
        }
export type GetClientByIdQueryHookResult = ReturnType<typeof useGetClientByIdQuery>;
export type GetClientByIdLazyQueryHookResult = ReturnType<typeof useGetClientByIdLazyQuery>;
export type GetClientByIdQueryResult = ApolloReactCommon.QueryResult<GetClientByIdQuery, GetClientByIdQueryVariables>;
export const AddClientDocument = gql`
    mutation addClient($data: ClientInput!) {
  addClient(data: $data) {
    ...ClientFrag
  }
}
    ${ClientFragFragmentDoc}`;
export type AddClientMutationFn = ApolloReactCommon.MutationFunction<AddClientMutation, AddClientMutationVariables>;

/**
 * __useAddClientMutation__
 *
 * To run a mutation, you first call `useAddClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addClientMutation, { data, loading, error }] = useAddClientMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddClientMutation, AddClientMutationVariables>) {
        return ApolloReactHooks.useMutation<AddClientMutation, AddClientMutationVariables>(AddClientDocument, baseOptions);
      }
export type AddClientMutationHookResult = ReturnType<typeof useAddClientMutation>;
export type AddClientMutationResult = ApolloReactCommon.MutationResult<AddClientMutation>;
export type AddClientMutationOptions = ApolloReactCommon.BaseMutationOptions<AddClientMutation, AddClientMutationVariables>;
export const UpdateClientDocument = gql`
    mutation updateClient($data: ClientInput!) {
  updateClient(data: $data) {
    ...ClientFrag
  }
}
    ${ClientFragFragmentDoc}`;
export type UpdateClientMutationFn = ApolloReactCommon.MutationFunction<UpdateClientMutation, UpdateClientMutationVariables>;

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientMutation, { data, loading, error }] = useUpdateClientMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateClientMutation, UpdateClientMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(UpdateClientDocument, baseOptions);
      }
export type UpdateClientMutationHookResult = ReturnType<typeof useUpdateClientMutation>;
export type UpdateClientMutationResult = ApolloReactCommon.MutationResult<UpdateClientMutation>;
export type UpdateClientMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>;
export const DeleteClientDocument = gql`
    mutation deleteClient($clientId: Int!) {
  deleteClient(clientId: $clientId)
}
    `;
export type DeleteClientMutationFn = ApolloReactCommon.MutationFunction<DeleteClientMutation, DeleteClientMutationVariables>;

/**
 * __useDeleteClientMutation__
 *
 * To run a mutation, you first call `useDeleteClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClientMutation, { data, loading, error }] = useDeleteClientMutation({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useDeleteClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteClientMutation, DeleteClientMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteClientMutation, DeleteClientMutationVariables>(DeleteClientDocument, baseOptions);
      }
export type DeleteClientMutationHookResult = ReturnType<typeof useDeleteClientMutation>;
export type DeleteClientMutationResult = ApolloReactCommon.MutationResult<DeleteClientMutation>;
export type DeleteClientMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteClientMutation, DeleteClientMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const GetAllHotelsDocument = gql`
    query getAllHotels {
  getAllHotels {
    ...HotelFragment
  }
}
    ${HotelFragmentFragmentDoc}`;

/**
 * __useGetAllHotelsQuery__
 *
 * To run a query within a React component, call `useGetAllHotelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHotelsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHotelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllHotelsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllHotelsQuery, GetAllHotelsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllHotelsQuery, GetAllHotelsQueryVariables>(GetAllHotelsDocument, baseOptions);
      }
export function useGetAllHotelsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllHotelsQuery, GetAllHotelsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllHotelsQuery, GetAllHotelsQueryVariables>(GetAllHotelsDocument, baseOptions);
        }
export type GetAllHotelsQueryHookResult = ReturnType<typeof useGetAllHotelsQuery>;
export type GetAllHotelsLazyQueryHookResult = ReturnType<typeof useGetAllHotelsLazyQuery>;
export type GetAllHotelsQueryResult = ApolloReactCommon.QueryResult<GetAllHotelsQuery, GetAllHotelsQueryVariables>;
export const UpdateHotelDocument = gql`
    mutation updateHotel($data: HotelInput!) {
  updateHotel(data: $data) {
    ...HotelFragment
  }
}
    ${HotelFragmentFragmentDoc}`;
export type UpdateHotelMutationFn = ApolloReactCommon.MutationFunction<UpdateHotelMutation, UpdateHotelMutationVariables>;

/**
 * __useUpdateHotelMutation__
 *
 * To run a mutation, you first call `useUpdateHotelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHotelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHotelMutation, { data, loading, error }] = useUpdateHotelMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateHotelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateHotelMutation, UpdateHotelMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateHotelMutation, UpdateHotelMutationVariables>(UpdateHotelDocument, baseOptions);
      }
export type UpdateHotelMutationHookResult = ReturnType<typeof useUpdateHotelMutation>;
export type UpdateHotelMutationResult = ApolloReactCommon.MutationResult<UpdateHotelMutation>;
export type UpdateHotelMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateHotelMutation, UpdateHotelMutationVariables>;
export const GetHotelByIdDocument = gql`
    query getHotelById($hotelId: Int!) {
  getHotelById(hotelId: $hotelId) {
    ...HotelFragment
  }
}
    ${HotelFragmentFragmentDoc}`;

/**
 * __useGetHotelByIdQuery__
 *
 * To run a query within a React component, call `useGetHotelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHotelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHotelByIdQuery({
 *   variables: {
 *      hotelId: // value for 'hotelId'
 *   },
 * });
 */
export function useGetHotelByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetHotelByIdQuery, GetHotelByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetHotelByIdQuery, GetHotelByIdQueryVariables>(GetHotelByIdDocument, baseOptions);
      }
export function useGetHotelByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetHotelByIdQuery, GetHotelByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetHotelByIdQuery, GetHotelByIdQueryVariables>(GetHotelByIdDocument, baseOptions);
        }
export type GetHotelByIdQueryHookResult = ReturnType<typeof useGetHotelByIdQuery>;
export type GetHotelByIdLazyQueryHookResult = ReturnType<typeof useGetHotelByIdLazyQuery>;
export type GetHotelByIdQueryResult = ApolloReactCommon.QueryResult<GetHotelByIdQuery, GetHotelByIdQueryVariables>;
export const AddHotelDocument = gql`
    mutation addHotel($data: HotelInput!) {
  addHotel(data: $data) {
    ...HotelFragment
  }
}
    ${HotelFragmentFragmentDoc}`;
export type AddHotelMutationFn = ApolloReactCommon.MutationFunction<AddHotelMutation, AddHotelMutationVariables>;

/**
 * __useAddHotelMutation__
 *
 * To run a mutation, you first call `useAddHotelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddHotelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addHotelMutation, { data, loading, error }] = useAddHotelMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddHotelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddHotelMutation, AddHotelMutationVariables>) {
        return ApolloReactHooks.useMutation<AddHotelMutation, AddHotelMutationVariables>(AddHotelDocument, baseOptions);
      }
export type AddHotelMutationHookResult = ReturnType<typeof useAddHotelMutation>;
export type AddHotelMutationResult = ApolloReactCommon.MutationResult<AddHotelMutation>;
export type AddHotelMutationOptions = ApolloReactCommon.BaseMutationOptions<AddHotelMutation, AddHotelMutationVariables>;
export const DeleteHotelDocument = gql`
    mutation deleteHotel($hotelId: Int!) {
  deleteHotel(hotelId: $hotelId)
}
    `;
export type DeleteHotelMutationFn = ApolloReactCommon.MutationFunction<DeleteHotelMutation, DeleteHotelMutationVariables>;

/**
 * __useDeleteHotelMutation__
 *
 * To run a mutation, you first call `useDeleteHotelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHotelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHotelMutation, { data, loading, error }] = useDeleteHotelMutation({
 *   variables: {
 *      hotelId: // value for 'hotelId'
 *   },
 * });
 */
export function useDeleteHotelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteHotelMutation, DeleteHotelMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteHotelMutation, DeleteHotelMutationVariables>(DeleteHotelDocument, baseOptions);
      }
export type DeleteHotelMutationHookResult = ReturnType<typeof useDeleteHotelMutation>;
export type DeleteHotelMutationResult = ApolloReactCommon.MutationResult<DeleteHotelMutation>;
export type DeleteHotelMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteHotelMutation, DeleteHotelMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInputType!) {
  login(data: $data) {
    accessToken
    user {
      userId
      email
      userName
      userRole {
        userRoleId
      }
    }
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    userId
    email
    userName
    userRole {
      userRoleId
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterStudentDocument = gql`
    mutation registerStudent($data: RegisterInputType!) {
  registerStudent(data: $data) {
    userId
    userName
    email
  }
}
    `;
export type RegisterStudentMutationFn = ApolloReactCommon.MutationFunction<RegisterStudentMutation, RegisterStudentMutationVariables>;

/**
 * __useRegisterStudentMutation__
 *
 * To run a mutation, you first call `useRegisterStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerStudentMutation, { data, loading, error }] = useRegisterStudentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterStudentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterStudentMutation, RegisterStudentMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterStudentMutation, RegisterStudentMutationVariables>(RegisterStudentDocument, baseOptions);
      }
export type RegisterStudentMutationHookResult = ReturnType<typeof useRegisterStudentMutation>;
export type RegisterStudentMutationResult = ApolloReactCommon.MutationResult<RegisterStudentMutation>;
export type RegisterStudentMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterStudentMutation, RegisterStudentMutationVariables>;
export const GetAllReportsDocument = gql`
    query GetAllReports($profesorId: Int!) {
  GetAllReports(profesorId: $profesorId) {
    ...ReportFragment
  }
}
    ${ReportFragmentFragmentDoc}`;

/**
 * __useGetAllReportsQuery__
 *
 * To run a query within a React component, call `useGetAllReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReportsQuery({
 *   variables: {
 *      profesorId: // value for 'profesorId'
 *   },
 * });
 */
export function useGetAllReportsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllReportsQuery, GetAllReportsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllReportsQuery, GetAllReportsQueryVariables>(GetAllReportsDocument, baseOptions);
      }
export function useGetAllReportsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllReportsQuery, GetAllReportsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllReportsQuery, GetAllReportsQueryVariables>(GetAllReportsDocument, baseOptions);
        }
export type GetAllReportsQueryHookResult = ReturnType<typeof useGetAllReportsQuery>;
export type GetAllReportsLazyQueryHookResult = ReturnType<typeof useGetAllReportsLazyQuery>;
export type GetAllReportsQueryResult = ApolloReactCommon.QueryResult<GetAllReportsQuery, GetAllReportsQueryVariables>;
export const GetAllReportsByStudentIdDocument = gql`
    query GetAllReportsByStudentId($studentId: Int!) {
  GetAllReportsByStudentId(studentId: $studentId) {
    ...ReportFragment
  }
}
    ${ReportFragmentFragmentDoc}`;

/**
 * __useGetAllReportsByStudentIdQuery__
 *
 * To run a query within a React component, call `useGetAllReportsByStudentIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReportsByStudentIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReportsByStudentIdQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useGetAllReportsByStudentIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllReportsByStudentIdQuery, GetAllReportsByStudentIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllReportsByStudentIdQuery, GetAllReportsByStudentIdQueryVariables>(GetAllReportsByStudentIdDocument, baseOptions);
      }
export function useGetAllReportsByStudentIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllReportsByStudentIdQuery, GetAllReportsByStudentIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllReportsByStudentIdQuery, GetAllReportsByStudentIdQueryVariables>(GetAllReportsByStudentIdDocument, baseOptions);
        }
export type GetAllReportsByStudentIdQueryHookResult = ReturnType<typeof useGetAllReportsByStudentIdQuery>;
export type GetAllReportsByStudentIdLazyQueryHookResult = ReturnType<typeof useGetAllReportsByStudentIdLazyQuery>;
export type GetAllReportsByStudentIdQueryResult = ApolloReactCommon.QueryResult<GetAllReportsByStudentIdQuery, GetAllReportsByStudentIdQueryVariables>;
export const GetAllReservationDocument = gql`
    query getAllReservation {
  getAllReservation {
    ...ReservationFragment
  }
}
    ${ReservationFragmentFragmentDoc}`;

/**
 * __useGetAllReservationQuery__
 *
 * To run a query within a React component, call `useGetAllReservationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReservationQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReservationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllReservationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllReservationQuery, GetAllReservationQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllReservationQuery, GetAllReservationQueryVariables>(GetAllReservationDocument, baseOptions);
      }
export function useGetAllReservationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllReservationQuery, GetAllReservationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllReservationQuery, GetAllReservationQueryVariables>(GetAllReservationDocument, baseOptions);
        }
export type GetAllReservationQueryHookResult = ReturnType<typeof useGetAllReservationQuery>;
export type GetAllReservationLazyQueryHookResult = ReturnType<typeof useGetAllReservationLazyQuery>;
export type GetAllReservationQueryResult = ApolloReactCommon.QueryResult<GetAllReservationQuery, GetAllReservationQueryVariables>;
export const GetReservationByIdDocument = gql`
    query getReservationById($reservationId: Int!) {
  getReservationById(reservationId: $reservationId) {
    subtotal
    tax
    total
    client {
      clientId
      cedula
      name
      firstSurname
      secondSurname
    }
    reservationRooms {
      reservationRoomId
      checkInDate
      checkOutDate
      room {
        roomNumber
        roomType {
          name
        }
      }
    }
    reservationItems {
      reservationItemId
      name
      price
    }
    reservationStatus {
      reservationStatusId
    }
  }
}
    `;

/**
 * __useGetReservationByIdQuery__
 *
 * To run a query within a React component, call `useGetReservationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReservationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReservationByIdQuery({
 *   variables: {
 *      reservationId: // value for 'reservationId'
 *   },
 * });
 */
export function useGetReservationByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetReservationByIdQuery, GetReservationByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetReservationByIdQuery, GetReservationByIdQueryVariables>(GetReservationByIdDocument, baseOptions);
      }
export function useGetReservationByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetReservationByIdQuery, GetReservationByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetReservationByIdQuery, GetReservationByIdQueryVariables>(GetReservationByIdDocument, baseOptions);
        }
export type GetReservationByIdQueryHookResult = ReturnType<typeof useGetReservationByIdQuery>;
export type GetReservationByIdLazyQueryHookResult = ReturnType<typeof useGetReservationByIdLazyQuery>;
export type GetReservationByIdQueryResult = ApolloReactCommon.QueryResult<GetReservationByIdQuery, GetReservationByIdQueryVariables>;
export const AddReservationDocument = gql`
    mutation addReservation($data: ReservationInput!) {
  addReservation(data: $data) {
    client {
      clientId
    }
  }
}
    `;
export type AddReservationMutationFn = ApolloReactCommon.MutationFunction<AddReservationMutation, AddReservationMutationVariables>;

/**
 * __useAddReservationMutation__
 *
 * To run a mutation, you first call `useAddReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReservationMutation, { data, loading, error }] = useAddReservationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddReservationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddReservationMutation, AddReservationMutationVariables>) {
        return ApolloReactHooks.useMutation<AddReservationMutation, AddReservationMutationVariables>(AddReservationDocument, baseOptions);
      }
export type AddReservationMutationHookResult = ReturnType<typeof useAddReservationMutation>;
export type AddReservationMutationResult = ApolloReactCommon.MutationResult<AddReservationMutation>;
export type AddReservationMutationOptions = ApolloReactCommon.BaseMutationOptions<AddReservationMutation, AddReservationMutationVariables>;
export const UpdateReservationDocument = gql`
    mutation UpdateReservation($data: UpdateReservationInput!) {
  UpdateReservation(data: $data)
}
    `;
export type UpdateReservationMutationFn = ApolloReactCommon.MutationFunction<UpdateReservationMutation, UpdateReservationMutationVariables>;

/**
 * __useUpdateReservationMutation__
 *
 * To run a mutation, you first call `useUpdateReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReservationMutation, { data, loading, error }] = useUpdateReservationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateReservationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateReservationMutation, UpdateReservationMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateReservationMutation, UpdateReservationMutationVariables>(UpdateReservationDocument, baseOptions);
      }
export type UpdateReservationMutationHookResult = ReturnType<typeof useUpdateReservationMutation>;
export type UpdateReservationMutationResult = ApolloReactCommon.MutationResult<UpdateReservationMutation>;
export type UpdateReservationMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateReservationMutation, UpdateReservationMutationVariables>;
export const GetAllReservationItemsDocument = gql`
    query getAllReservationItems($reservationId: Int!) {
  getAllReservationItems(reservationId: $reservationId) {
    ...ReservationItemFragment
  }
}
    ${ReservationItemFragmentFragmentDoc}`;

/**
 * __useGetAllReservationItemsQuery__
 *
 * To run a query within a React component, call `useGetAllReservationItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReservationItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReservationItemsQuery({
 *   variables: {
 *      reservationId: // value for 'reservationId'
 *   },
 * });
 */
export function useGetAllReservationItemsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllReservationItemsQuery, GetAllReservationItemsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllReservationItemsQuery, GetAllReservationItemsQueryVariables>(GetAllReservationItemsDocument, baseOptions);
      }
export function useGetAllReservationItemsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllReservationItemsQuery, GetAllReservationItemsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllReservationItemsQuery, GetAllReservationItemsQueryVariables>(GetAllReservationItemsDocument, baseOptions);
        }
export type GetAllReservationItemsQueryHookResult = ReturnType<typeof useGetAllReservationItemsQuery>;
export type GetAllReservationItemsLazyQueryHookResult = ReturnType<typeof useGetAllReservationItemsLazyQuery>;
export type GetAllReservationItemsQueryResult = ApolloReactCommon.QueryResult<GetAllReservationItemsQuery, GetAllReservationItemsQueryVariables>;
export const GetReservationItemByIdDocument = gql`
    query getReservationItemById($reservationItemId: Int!) {
  getReservationItemById(reservationItemId: $reservationItemId) {
    ...ReservationItemFragment
  }
}
    ${ReservationItemFragmentFragmentDoc}`;

/**
 * __useGetReservationItemByIdQuery__
 *
 * To run a query within a React component, call `useGetReservationItemByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReservationItemByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReservationItemByIdQuery({
 *   variables: {
 *      reservationItemId: // value for 'reservationItemId'
 *   },
 * });
 */
export function useGetReservationItemByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetReservationItemByIdQuery, GetReservationItemByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetReservationItemByIdQuery, GetReservationItemByIdQueryVariables>(GetReservationItemByIdDocument, baseOptions);
      }
export function useGetReservationItemByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetReservationItemByIdQuery, GetReservationItemByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetReservationItemByIdQuery, GetReservationItemByIdQueryVariables>(GetReservationItemByIdDocument, baseOptions);
        }
export type GetReservationItemByIdQueryHookResult = ReturnType<typeof useGetReservationItemByIdQuery>;
export type GetReservationItemByIdLazyQueryHookResult = ReturnType<typeof useGetReservationItemByIdLazyQuery>;
export type GetReservationItemByIdQueryResult = ApolloReactCommon.QueryResult<GetReservationItemByIdQuery, GetReservationItemByIdQueryVariables>;
export const AddReservationItemDocument = gql`
    mutation addReservationItem($data: ReservationItemInput!) {
  addReservationItem(data: $data) {
    reservationItemId
  }
}
    `;
export type AddReservationItemMutationFn = ApolloReactCommon.MutationFunction<AddReservationItemMutation, AddReservationItemMutationVariables>;

/**
 * __useAddReservationItemMutation__
 *
 * To run a mutation, you first call `useAddReservationItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReservationItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReservationItemMutation, { data, loading, error }] = useAddReservationItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddReservationItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddReservationItemMutation, AddReservationItemMutationVariables>) {
        return ApolloReactHooks.useMutation<AddReservationItemMutation, AddReservationItemMutationVariables>(AddReservationItemDocument, baseOptions);
      }
export type AddReservationItemMutationHookResult = ReturnType<typeof useAddReservationItemMutation>;
export type AddReservationItemMutationResult = ApolloReactCommon.MutationResult<AddReservationItemMutation>;
export type AddReservationItemMutationOptions = ApolloReactCommon.BaseMutationOptions<AddReservationItemMutation, AddReservationItemMutationVariables>;
export const UpdateReservationItemDocument = gql`
    mutation updateReservationItem($data: ReservationItemInput!) {
  updateReservationItem(data: $data) {
    reservationItemId
  }
}
    `;
export type UpdateReservationItemMutationFn = ApolloReactCommon.MutationFunction<UpdateReservationItemMutation, UpdateReservationItemMutationVariables>;

/**
 * __useUpdateReservationItemMutation__
 *
 * To run a mutation, you first call `useUpdateReservationItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReservationItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReservationItemMutation, { data, loading, error }] = useUpdateReservationItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateReservationItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateReservationItemMutation, UpdateReservationItemMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateReservationItemMutation, UpdateReservationItemMutationVariables>(UpdateReservationItemDocument, baseOptions);
      }
export type UpdateReservationItemMutationHookResult = ReturnType<typeof useUpdateReservationItemMutation>;
export type UpdateReservationItemMutationResult = ApolloReactCommon.MutationResult<UpdateReservationItemMutation>;
export type UpdateReservationItemMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateReservationItemMutation, UpdateReservationItemMutationVariables>;
export const GetAllReservationRoomsDocument = gql`
    query getAllReservationRooms($startDate: DateTime!, $endDate: DateTime!, $hotelId: Int!) {
  getAllReservationRooms(startDate: $startDate, endDate: $endDate, hotelId: $hotelId) {
    checkInDate
    checkOutDate
    reservation {
      reservationId
      reservationStatus {
        abbr
      }
    }
    room {
      roomId
    }
  }
}
    `;

/**
 * __useGetAllReservationRoomsQuery__
 *
 * To run a query within a React component, call `useGetAllReservationRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReservationRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReservationRoomsQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      hotelId: // value for 'hotelId'
 *   },
 * });
 */
export function useGetAllReservationRoomsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllReservationRoomsQuery, GetAllReservationRoomsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllReservationRoomsQuery, GetAllReservationRoomsQueryVariables>(GetAllReservationRoomsDocument, baseOptions);
      }
export function useGetAllReservationRoomsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllReservationRoomsQuery, GetAllReservationRoomsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllReservationRoomsQuery, GetAllReservationRoomsQueryVariables>(GetAllReservationRoomsDocument, baseOptions);
        }
export type GetAllReservationRoomsQueryHookResult = ReturnType<typeof useGetAllReservationRoomsQuery>;
export type GetAllReservationRoomsLazyQueryHookResult = ReturnType<typeof useGetAllReservationRoomsLazyQuery>;
export type GetAllReservationRoomsQueryResult = ApolloReactCommon.QueryResult<GetAllReservationRoomsQuery, GetAllReservationRoomsQueryVariables>;
export const GetAllReservationStatusesDocument = gql`
    query getAllReservationStatuses {
  getAllReservationStatuses {
    ...ReservationStatusFragment
  }
}
    ${ReservationStatusFragmentFragmentDoc}`;

/**
 * __useGetAllReservationStatusesQuery__
 *
 * To run a query within a React component, call `useGetAllReservationStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReservationStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReservationStatusesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllReservationStatusesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllReservationStatusesQuery, GetAllReservationStatusesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllReservationStatusesQuery, GetAllReservationStatusesQueryVariables>(GetAllReservationStatusesDocument, baseOptions);
      }
export function useGetAllReservationStatusesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllReservationStatusesQuery, GetAllReservationStatusesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllReservationStatusesQuery, GetAllReservationStatusesQueryVariables>(GetAllReservationStatusesDocument, baseOptions);
        }
export type GetAllReservationStatusesQueryHookResult = ReturnType<typeof useGetAllReservationStatusesQuery>;
export type GetAllReservationStatusesLazyQueryHookResult = ReturnType<typeof useGetAllReservationStatusesLazyQuery>;
export type GetAllReservationStatusesQueryResult = ApolloReactCommon.QueryResult<GetAllReservationStatusesQuery, GetAllReservationStatusesQueryVariables>;
export const GetAllReservationStatusesDdDocument = gql`
    query getAllReservationStatusesDd {
  getAllReservationStatuses {
    id: reservationStatusId
    name
  }
}
    `;

/**
 * __useGetAllReservationStatusesDdQuery__
 *
 * To run a query within a React component, call `useGetAllReservationStatusesDdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReservationStatusesDdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReservationStatusesDdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllReservationStatusesDdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllReservationStatusesDdQuery, GetAllReservationStatusesDdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllReservationStatusesDdQuery, GetAllReservationStatusesDdQueryVariables>(GetAllReservationStatusesDdDocument, baseOptions);
      }
export function useGetAllReservationStatusesDdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllReservationStatusesDdQuery, GetAllReservationStatusesDdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllReservationStatusesDdQuery, GetAllReservationStatusesDdQueryVariables>(GetAllReservationStatusesDdDocument, baseOptions);
        }
export type GetAllReservationStatusesDdQueryHookResult = ReturnType<typeof useGetAllReservationStatusesDdQuery>;
export type GetAllReservationStatusesDdLazyQueryHookResult = ReturnType<typeof useGetAllReservationStatusesDdLazyQuery>;
export type GetAllReservationStatusesDdQueryResult = ApolloReactCommon.QueryResult<GetAllReservationStatusesDdQuery, GetAllReservationStatusesDdQueryVariables>;
export const UpdateReservationStatusDocument = gql`
    mutation updateReservationStatus($data: ReservationStatusInput!) {
  updateReservationStatus(data: $data) {
    ...ReservationStatusFragment
  }
}
    ${ReservationStatusFragmentFragmentDoc}`;
export type UpdateReservationStatusMutationFn = ApolloReactCommon.MutationFunction<UpdateReservationStatusMutation, UpdateReservationStatusMutationVariables>;

/**
 * __useUpdateReservationStatusMutation__
 *
 * To run a mutation, you first call `useUpdateReservationStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReservationStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReservationStatusMutation, { data, loading, error }] = useUpdateReservationStatusMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateReservationStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateReservationStatusMutation, UpdateReservationStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateReservationStatusMutation, UpdateReservationStatusMutationVariables>(UpdateReservationStatusDocument, baseOptions);
      }
export type UpdateReservationStatusMutationHookResult = ReturnType<typeof useUpdateReservationStatusMutation>;
export type UpdateReservationStatusMutationResult = ApolloReactCommon.MutationResult<UpdateReservationStatusMutation>;
export type UpdateReservationStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateReservationStatusMutation, UpdateReservationStatusMutationVariables>;
export const GetReservationStatusByIdDocument = gql`
    query getReservationStatusById($reservationStatusId: Int!) {
  getReservationStatusById(reservationStatusId: $reservationStatusId) {
    ...ReservationStatusFragment
  }
}
    ${ReservationStatusFragmentFragmentDoc}`;

/**
 * __useGetReservationStatusByIdQuery__
 *
 * To run a query within a React component, call `useGetReservationStatusByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReservationStatusByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReservationStatusByIdQuery({
 *   variables: {
 *      reservationStatusId: // value for 'reservationStatusId'
 *   },
 * });
 */
export function useGetReservationStatusByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetReservationStatusByIdQuery, GetReservationStatusByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetReservationStatusByIdQuery, GetReservationStatusByIdQueryVariables>(GetReservationStatusByIdDocument, baseOptions);
      }
export function useGetReservationStatusByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetReservationStatusByIdQuery, GetReservationStatusByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetReservationStatusByIdQuery, GetReservationStatusByIdQueryVariables>(GetReservationStatusByIdDocument, baseOptions);
        }
export type GetReservationStatusByIdQueryHookResult = ReturnType<typeof useGetReservationStatusByIdQuery>;
export type GetReservationStatusByIdLazyQueryHookResult = ReturnType<typeof useGetReservationStatusByIdLazyQuery>;
export type GetReservationStatusByIdQueryResult = ApolloReactCommon.QueryResult<GetReservationStatusByIdQuery, GetReservationStatusByIdQueryVariables>;
export const AddReservationStatusDocument = gql`
    mutation addReservationStatus($data: ReservationStatusInput!) {
  addReservationStatus(data: $data) {
    ...ReservationStatusFragment
  }
}
    ${ReservationStatusFragmentFragmentDoc}`;
export type AddReservationStatusMutationFn = ApolloReactCommon.MutationFunction<AddReservationStatusMutation, AddReservationStatusMutationVariables>;

/**
 * __useAddReservationStatusMutation__
 *
 * To run a mutation, you first call `useAddReservationStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReservationStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReservationStatusMutation, { data, loading, error }] = useAddReservationStatusMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddReservationStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddReservationStatusMutation, AddReservationStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<AddReservationStatusMutation, AddReservationStatusMutationVariables>(AddReservationStatusDocument, baseOptions);
      }
export type AddReservationStatusMutationHookResult = ReturnType<typeof useAddReservationStatusMutation>;
export type AddReservationStatusMutationResult = ApolloReactCommon.MutationResult<AddReservationStatusMutation>;
export type AddReservationStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<AddReservationStatusMutation, AddReservationStatusMutationVariables>;
export const DeleteReservationStatusDocument = gql`
    mutation deleteReservationStatus($reservationStatusId: Int!) {
  deleteReservationStatus(reservationStatusId: $reservationStatusId) {
    ...ReservationStatusFragment
  }
}
    ${ReservationStatusFragmentFragmentDoc}`;
export type DeleteReservationStatusMutationFn = ApolloReactCommon.MutationFunction<DeleteReservationStatusMutation, DeleteReservationStatusMutationVariables>;

/**
 * __useDeleteReservationStatusMutation__
 *
 * To run a mutation, you first call `useDeleteReservationStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReservationStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReservationStatusMutation, { data, loading, error }] = useDeleteReservationStatusMutation({
 *   variables: {
 *      reservationStatusId: // value for 'reservationStatusId'
 *   },
 * });
 */
export function useDeleteReservationStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteReservationStatusMutation, DeleteReservationStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteReservationStatusMutation, DeleteReservationStatusMutationVariables>(DeleteReservationStatusDocument, baseOptions);
      }
export type DeleteReservationStatusMutationHookResult = ReturnType<typeof useDeleteReservationStatusMutation>;
export type DeleteReservationStatusMutationResult = ApolloReactCommon.MutationResult<DeleteReservationStatusMutation>;
export type DeleteReservationStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteReservationStatusMutation, DeleteReservationStatusMutationVariables>;
export const GetAllRoomsDocument = gql`
    query getAllRooms($hotelId: Int!) {
  getAllRooms(hotelId: $hotelId) {
    ...RoomFragment
  }
}
    ${RoomFragmentFragmentDoc}`;

/**
 * __useGetAllRoomsQuery__
 *
 * To run a query within a React component, call `useGetAllRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoomsQuery({
 *   variables: {
 *      hotelId: // value for 'hotelId'
 *   },
 * });
 */
export function useGetAllRoomsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllRoomsQuery, GetAllRoomsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllRoomsQuery, GetAllRoomsQueryVariables>(GetAllRoomsDocument, baseOptions);
      }
export function useGetAllRoomsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllRoomsQuery, GetAllRoomsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllRoomsQuery, GetAllRoomsQueryVariables>(GetAllRoomsDocument, baseOptions);
        }
export type GetAllRoomsQueryHookResult = ReturnType<typeof useGetAllRoomsQuery>;
export type GetAllRoomsLazyQueryHookResult = ReturnType<typeof useGetAllRoomsLazyQuery>;
export type GetAllRoomsQueryResult = ApolloReactCommon.QueryResult<GetAllRoomsQuery, GetAllRoomsQueryVariables>;
export const GetAllRoomsReservationDocument = gql`
    query getAllRoomsReservation($hotelId: Int!) {
  getAllRooms(hotelId: $hotelId) {
    roomId
    roomNumber
    roomStatus {
      abbr
    }
  }
}
    `;

/**
 * __useGetAllRoomsReservationQuery__
 *
 * To run a query within a React component, call `useGetAllRoomsReservationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoomsReservationQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoomsReservationQuery({
 *   variables: {
 *      hotelId: // value for 'hotelId'
 *   },
 * });
 */
export function useGetAllRoomsReservationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllRoomsReservationQuery, GetAllRoomsReservationQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllRoomsReservationQuery, GetAllRoomsReservationQueryVariables>(GetAllRoomsReservationDocument, baseOptions);
      }
export function useGetAllRoomsReservationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllRoomsReservationQuery, GetAllRoomsReservationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllRoomsReservationQuery, GetAllRoomsReservationQueryVariables>(GetAllRoomsReservationDocument, baseOptions);
        }
export type GetAllRoomsReservationQueryHookResult = ReturnType<typeof useGetAllRoomsReservationQuery>;
export type GetAllRoomsReservationLazyQueryHookResult = ReturnType<typeof useGetAllRoomsReservationLazyQuery>;
export type GetAllRoomsReservationQueryResult = ApolloReactCommon.QueryResult<GetAllRoomsReservationQuery, GetAllRoomsReservationQueryVariables>;
export const GetRoomByIdDocument = gql`
    query getRoomById($roomId: Float!) {
  getRoomById(roomId: $roomId) {
    roomId
    roomNumber
    floorNumber
    buildingNumber
    price
    allowHandicap
    observation
    roomType {
      roomTypeId
    }
    roomView {
      roomViewId
    }
    roomStatus {
      roomStatusId
    }
    roomBeds {
      bed {
        bedId
      }
    }
  }
}
    `;

/**
 * __useGetRoomByIdQuery__
 *
 * To run a query within a React component, call `useGetRoomByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomByIdQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetRoomByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRoomByIdQuery, GetRoomByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRoomByIdQuery, GetRoomByIdQueryVariables>(GetRoomByIdDocument, baseOptions);
      }
export function useGetRoomByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRoomByIdQuery, GetRoomByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRoomByIdQuery, GetRoomByIdQueryVariables>(GetRoomByIdDocument, baseOptions);
        }
export type GetRoomByIdQueryHookResult = ReturnType<typeof useGetRoomByIdQuery>;
export type GetRoomByIdLazyQueryHookResult = ReturnType<typeof useGetRoomByIdLazyQuery>;
export type GetRoomByIdQueryResult = ApolloReactCommon.QueryResult<GetRoomByIdQuery, GetRoomByIdQueryVariables>;
export const AddRoomDocument = gql`
    mutation addRoom($data: RoomInput!) {
  addRoom(data: $data) {
    roomId
    roomNumber
    floorNumber
    buildingNumber
    price
    allowHandicap
  }
}
    `;
export type AddRoomMutationFn = ApolloReactCommon.MutationFunction<AddRoomMutation, AddRoomMutationVariables>;

/**
 * __useAddRoomMutation__
 *
 * To run a mutation, you first call `useAddRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRoomMutation, { data, loading, error }] = useAddRoomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddRoomMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddRoomMutation, AddRoomMutationVariables>) {
        return ApolloReactHooks.useMutation<AddRoomMutation, AddRoomMutationVariables>(AddRoomDocument, baseOptions);
      }
export type AddRoomMutationHookResult = ReturnType<typeof useAddRoomMutation>;
export type AddRoomMutationResult = ApolloReactCommon.MutationResult<AddRoomMutation>;
export type AddRoomMutationOptions = ApolloReactCommon.BaseMutationOptions<AddRoomMutation, AddRoomMutationVariables>;
export const UpdateRoomDocument = gql`
    mutation updateRoom($data: RoomInput!) {
  updateRoom(data: $data) {
    roomId
    roomNumber
    floorNumber
    buildingNumber
    price
    allowHandicap
  }
}
    `;
export type UpdateRoomMutationFn = ApolloReactCommon.MutationFunction<UpdateRoomMutation, UpdateRoomMutationVariables>;

/**
 * __useUpdateRoomMutation__
 *
 * To run a mutation, you first call `useUpdateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoomMutation, { data, loading, error }] = useUpdateRoomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRoomMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRoomMutation, UpdateRoomMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateRoomMutation, UpdateRoomMutationVariables>(UpdateRoomDocument, baseOptions);
      }
export type UpdateRoomMutationHookResult = ReturnType<typeof useUpdateRoomMutation>;
export type UpdateRoomMutationResult = ApolloReactCommon.MutationResult<UpdateRoomMutation>;
export type UpdateRoomMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateRoomMutation, UpdateRoomMutationVariables>;
export const DeleteRoomDocument = gql`
    mutation deleteRoom($roomId: Int!) {
  deleteRoom(roomId: $roomId) {
    ...RoomFragment
  }
}
    ${RoomFragmentFragmentDoc}`;
export type DeleteRoomMutationFn = ApolloReactCommon.MutationFunction<DeleteRoomMutation, DeleteRoomMutationVariables>;

/**
 * __useDeleteRoomMutation__
 *
 * To run a mutation, you first call `useDeleteRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoomMutation, { data, loading, error }] = useDeleteRoomMutation({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useDeleteRoomMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRoomMutation, DeleteRoomMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteRoomMutation, DeleteRoomMutationVariables>(DeleteRoomDocument, baseOptions);
      }
export type DeleteRoomMutationHookResult = ReturnType<typeof useDeleteRoomMutation>;
export type DeleteRoomMutationResult = ApolloReactCommon.MutationResult<DeleteRoomMutation>;
export type DeleteRoomMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteRoomMutation, DeleteRoomMutationVariables>;
export const GetAllRoomStatusesDdDocument = gql`
    query getAllRoomStatusesDd {
  getAllRoomStatuses {
    id: roomStatusId
    name
  }
}
    `;

/**
 * __useGetAllRoomStatusesDdQuery__
 *
 * To run a query within a React component, call `useGetAllRoomStatusesDdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoomStatusesDdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoomStatusesDdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRoomStatusesDdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllRoomStatusesDdQuery, GetAllRoomStatusesDdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllRoomStatusesDdQuery, GetAllRoomStatusesDdQueryVariables>(GetAllRoomStatusesDdDocument, baseOptions);
      }
export function useGetAllRoomStatusesDdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllRoomStatusesDdQuery, GetAllRoomStatusesDdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllRoomStatusesDdQuery, GetAllRoomStatusesDdQueryVariables>(GetAllRoomStatusesDdDocument, baseOptions);
        }
export type GetAllRoomStatusesDdQueryHookResult = ReturnType<typeof useGetAllRoomStatusesDdQuery>;
export type GetAllRoomStatusesDdLazyQueryHookResult = ReturnType<typeof useGetAllRoomStatusesDdLazyQuery>;
export type GetAllRoomStatusesDdQueryResult = ApolloReactCommon.QueryResult<GetAllRoomStatusesDdQuery, GetAllRoomStatusesDdQueryVariables>;
export const GetAllRoomStatusesDocument = gql`
    query getAllRoomStatuses {
  getAllRoomStatuses {
    ...RoomStatusFragment
  }
}
    ${RoomStatusFragmentFragmentDoc}`;

/**
 * __useGetAllRoomStatusesQuery__
 *
 * To run a query within a React component, call `useGetAllRoomStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoomStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoomStatusesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRoomStatusesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllRoomStatusesQuery, GetAllRoomStatusesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllRoomStatusesQuery, GetAllRoomStatusesQueryVariables>(GetAllRoomStatusesDocument, baseOptions);
      }
export function useGetAllRoomStatusesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllRoomStatusesQuery, GetAllRoomStatusesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllRoomStatusesQuery, GetAllRoomStatusesQueryVariables>(GetAllRoomStatusesDocument, baseOptions);
        }
export type GetAllRoomStatusesQueryHookResult = ReturnType<typeof useGetAllRoomStatusesQuery>;
export type GetAllRoomStatusesLazyQueryHookResult = ReturnType<typeof useGetAllRoomStatusesLazyQuery>;
export type GetAllRoomStatusesQueryResult = ApolloReactCommon.QueryResult<GetAllRoomStatusesQuery, GetAllRoomStatusesQueryVariables>;
export const UpdateRoomStatusDocument = gql`
    mutation updateRoomStatus($data: RoomStatusInput!) {
  updateRoomStatus(data: $data) {
    ...RoomStatusFragment
  }
}
    ${RoomStatusFragmentFragmentDoc}`;
export type UpdateRoomStatusMutationFn = ApolloReactCommon.MutationFunction<UpdateRoomStatusMutation, UpdateRoomStatusMutationVariables>;

/**
 * __useUpdateRoomStatusMutation__
 *
 * To run a mutation, you first call `useUpdateRoomStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoomStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoomStatusMutation, { data, loading, error }] = useUpdateRoomStatusMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRoomStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRoomStatusMutation, UpdateRoomStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateRoomStatusMutation, UpdateRoomStatusMutationVariables>(UpdateRoomStatusDocument, baseOptions);
      }
export type UpdateRoomStatusMutationHookResult = ReturnType<typeof useUpdateRoomStatusMutation>;
export type UpdateRoomStatusMutationResult = ApolloReactCommon.MutationResult<UpdateRoomStatusMutation>;
export type UpdateRoomStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateRoomStatusMutation, UpdateRoomStatusMutationVariables>;
export const GetRoomStatusByIdDocument = gql`
    query getRoomStatusById($roomStatusId: Int!) {
  getRoomStatusById(roomStatusId: $roomStatusId) {
    ...RoomStatusFragment
  }
}
    ${RoomStatusFragmentFragmentDoc}`;

/**
 * __useGetRoomStatusByIdQuery__
 *
 * To run a query within a React component, call `useGetRoomStatusByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomStatusByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomStatusByIdQuery({
 *   variables: {
 *      roomStatusId: // value for 'roomStatusId'
 *   },
 * });
 */
export function useGetRoomStatusByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRoomStatusByIdQuery, GetRoomStatusByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRoomStatusByIdQuery, GetRoomStatusByIdQueryVariables>(GetRoomStatusByIdDocument, baseOptions);
      }
export function useGetRoomStatusByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRoomStatusByIdQuery, GetRoomStatusByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRoomStatusByIdQuery, GetRoomStatusByIdQueryVariables>(GetRoomStatusByIdDocument, baseOptions);
        }
export type GetRoomStatusByIdQueryHookResult = ReturnType<typeof useGetRoomStatusByIdQuery>;
export type GetRoomStatusByIdLazyQueryHookResult = ReturnType<typeof useGetRoomStatusByIdLazyQuery>;
export type GetRoomStatusByIdQueryResult = ApolloReactCommon.QueryResult<GetRoomStatusByIdQuery, GetRoomStatusByIdQueryVariables>;
export const AddRoomStatusDocument = gql`
    mutation addRoomStatus($data: RoomStatusInput!) {
  addRoomStatus(data: $data) {
    ...RoomStatusFragment
  }
}
    ${RoomStatusFragmentFragmentDoc}`;
export type AddRoomStatusMutationFn = ApolloReactCommon.MutationFunction<AddRoomStatusMutation, AddRoomStatusMutationVariables>;

/**
 * __useAddRoomStatusMutation__
 *
 * To run a mutation, you first call `useAddRoomStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRoomStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRoomStatusMutation, { data, loading, error }] = useAddRoomStatusMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddRoomStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddRoomStatusMutation, AddRoomStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<AddRoomStatusMutation, AddRoomStatusMutationVariables>(AddRoomStatusDocument, baseOptions);
      }
export type AddRoomStatusMutationHookResult = ReturnType<typeof useAddRoomStatusMutation>;
export type AddRoomStatusMutationResult = ApolloReactCommon.MutationResult<AddRoomStatusMutation>;
export type AddRoomStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<AddRoomStatusMutation, AddRoomStatusMutationVariables>;
export const DeleteRoomStatusDocument = gql`
    mutation deleteRoomStatus($roomStatusId: Int!) {
  deleteRoomStatus(roomStatusId: $roomStatusId) {
    ...RoomStatusFragment
  }
}
    ${RoomStatusFragmentFragmentDoc}`;
export type DeleteRoomStatusMutationFn = ApolloReactCommon.MutationFunction<DeleteRoomStatusMutation, DeleteRoomStatusMutationVariables>;

/**
 * __useDeleteRoomStatusMutation__
 *
 * To run a mutation, you first call `useDeleteRoomStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoomStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoomStatusMutation, { data, loading, error }] = useDeleteRoomStatusMutation({
 *   variables: {
 *      roomStatusId: // value for 'roomStatusId'
 *   },
 * });
 */
export function useDeleteRoomStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRoomStatusMutation, DeleteRoomStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteRoomStatusMutation, DeleteRoomStatusMutationVariables>(DeleteRoomStatusDocument, baseOptions);
      }
export type DeleteRoomStatusMutationHookResult = ReturnType<typeof useDeleteRoomStatusMutation>;
export type DeleteRoomStatusMutationResult = ApolloReactCommon.MutationResult<DeleteRoomStatusMutation>;
export type DeleteRoomStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteRoomStatusMutation, DeleteRoomStatusMutationVariables>;
export const GetAllRoomTypesDdDocument = gql`
    query getAllRoomTypesDd {
  getAllRoomTypes {
    id: roomTypeId
    name
  }
}
    `;

/**
 * __useGetAllRoomTypesDdQuery__
 *
 * To run a query within a React component, call `useGetAllRoomTypesDdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoomTypesDdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoomTypesDdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRoomTypesDdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllRoomTypesDdQuery, GetAllRoomTypesDdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllRoomTypesDdQuery, GetAllRoomTypesDdQueryVariables>(GetAllRoomTypesDdDocument, baseOptions);
      }
export function useGetAllRoomTypesDdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllRoomTypesDdQuery, GetAllRoomTypesDdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllRoomTypesDdQuery, GetAllRoomTypesDdQueryVariables>(GetAllRoomTypesDdDocument, baseOptions);
        }
export type GetAllRoomTypesDdQueryHookResult = ReturnType<typeof useGetAllRoomTypesDdQuery>;
export type GetAllRoomTypesDdLazyQueryHookResult = ReturnType<typeof useGetAllRoomTypesDdLazyQuery>;
export type GetAllRoomTypesDdQueryResult = ApolloReactCommon.QueryResult<GetAllRoomTypesDdQuery, GetAllRoomTypesDdQueryVariables>;
export const GetAllRoomTypesDocument = gql`
    query getAllRoomTypes {
  getAllRoomTypes {
    ...RoomTypesFragment
  }
}
    ${RoomTypesFragmentFragmentDoc}`;

/**
 * __useGetAllRoomTypesQuery__
 *
 * To run a query within a React component, call `useGetAllRoomTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoomTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoomTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRoomTypesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllRoomTypesQuery, GetAllRoomTypesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllRoomTypesQuery, GetAllRoomTypesQueryVariables>(GetAllRoomTypesDocument, baseOptions);
      }
export function useGetAllRoomTypesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllRoomTypesQuery, GetAllRoomTypesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllRoomTypesQuery, GetAllRoomTypesQueryVariables>(GetAllRoomTypesDocument, baseOptions);
        }
export type GetAllRoomTypesQueryHookResult = ReturnType<typeof useGetAllRoomTypesQuery>;
export type GetAllRoomTypesLazyQueryHookResult = ReturnType<typeof useGetAllRoomTypesLazyQuery>;
export type GetAllRoomTypesQueryResult = ApolloReactCommon.QueryResult<GetAllRoomTypesQuery, GetAllRoomTypesQueryVariables>;
export const UpdateRoomTypeDocument = gql`
    mutation updateRoomType($data: RoomTypeInput!) {
  updateRoomType(data: $data) {
    ...RoomTypesFragment
  }
}
    ${RoomTypesFragmentFragmentDoc}`;
export type UpdateRoomTypeMutationFn = ApolloReactCommon.MutationFunction<UpdateRoomTypeMutation, UpdateRoomTypeMutationVariables>;

/**
 * __useUpdateRoomTypeMutation__
 *
 * To run a mutation, you first call `useUpdateRoomTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoomTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoomTypeMutation, { data, loading, error }] = useUpdateRoomTypeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRoomTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRoomTypeMutation, UpdateRoomTypeMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateRoomTypeMutation, UpdateRoomTypeMutationVariables>(UpdateRoomTypeDocument, baseOptions);
      }
export type UpdateRoomTypeMutationHookResult = ReturnType<typeof useUpdateRoomTypeMutation>;
export type UpdateRoomTypeMutationResult = ApolloReactCommon.MutationResult<UpdateRoomTypeMutation>;
export type UpdateRoomTypeMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateRoomTypeMutation, UpdateRoomTypeMutationVariables>;
export const GetRoomTypeByIdDocument = gql`
    query getRoomTypeById($roomTypeId: Int!) {
  getRoomTypeById(roomTypeId: $roomTypeId) {
    ...RoomTypesFragment
  }
}
    ${RoomTypesFragmentFragmentDoc}`;

/**
 * __useGetRoomTypeByIdQuery__
 *
 * To run a query within a React component, call `useGetRoomTypeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomTypeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomTypeByIdQuery({
 *   variables: {
 *      roomTypeId: // value for 'roomTypeId'
 *   },
 * });
 */
export function useGetRoomTypeByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRoomTypeByIdQuery, GetRoomTypeByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRoomTypeByIdQuery, GetRoomTypeByIdQueryVariables>(GetRoomTypeByIdDocument, baseOptions);
      }
export function useGetRoomTypeByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRoomTypeByIdQuery, GetRoomTypeByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRoomTypeByIdQuery, GetRoomTypeByIdQueryVariables>(GetRoomTypeByIdDocument, baseOptions);
        }
export type GetRoomTypeByIdQueryHookResult = ReturnType<typeof useGetRoomTypeByIdQuery>;
export type GetRoomTypeByIdLazyQueryHookResult = ReturnType<typeof useGetRoomTypeByIdLazyQuery>;
export type GetRoomTypeByIdQueryResult = ApolloReactCommon.QueryResult<GetRoomTypeByIdQuery, GetRoomTypeByIdQueryVariables>;
export const AddRoomTypeDocument = gql`
    mutation addRoomType($data: RoomTypeInput!) {
  addRoomType(data: $data) {
    ...RoomTypesFragment
  }
}
    ${RoomTypesFragmentFragmentDoc}`;
export type AddRoomTypeMutationFn = ApolloReactCommon.MutationFunction<AddRoomTypeMutation, AddRoomTypeMutationVariables>;

/**
 * __useAddRoomTypeMutation__
 *
 * To run a mutation, you first call `useAddRoomTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRoomTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRoomTypeMutation, { data, loading, error }] = useAddRoomTypeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddRoomTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddRoomTypeMutation, AddRoomTypeMutationVariables>) {
        return ApolloReactHooks.useMutation<AddRoomTypeMutation, AddRoomTypeMutationVariables>(AddRoomTypeDocument, baseOptions);
      }
export type AddRoomTypeMutationHookResult = ReturnType<typeof useAddRoomTypeMutation>;
export type AddRoomTypeMutationResult = ApolloReactCommon.MutationResult<AddRoomTypeMutation>;
export type AddRoomTypeMutationOptions = ApolloReactCommon.BaseMutationOptions<AddRoomTypeMutation, AddRoomTypeMutationVariables>;
export const DeleteRoomTypeDocument = gql`
    mutation deleteRoomType($roomTypeId: Int!) {
  deleteRoomType(roomTypeId: $roomTypeId)
}
    `;
export type DeleteRoomTypeMutationFn = ApolloReactCommon.MutationFunction<DeleteRoomTypeMutation, DeleteRoomTypeMutationVariables>;

/**
 * __useDeleteRoomTypeMutation__
 *
 * To run a mutation, you first call `useDeleteRoomTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoomTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoomTypeMutation, { data, loading, error }] = useDeleteRoomTypeMutation({
 *   variables: {
 *      roomTypeId: // value for 'roomTypeId'
 *   },
 * });
 */
export function useDeleteRoomTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRoomTypeMutation, DeleteRoomTypeMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteRoomTypeMutation, DeleteRoomTypeMutationVariables>(DeleteRoomTypeDocument, baseOptions);
      }
export type DeleteRoomTypeMutationHookResult = ReturnType<typeof useDeleteRoomTypeMutation>;
export type DeleteRoomTypeMutationResult = ApolloReactCommon.MutationResult<DeleteRoomTypeMutation>;
export type DeleteRoomTypeMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteRoomTypeMutation, DeleteRoomTypeMutationVariables>;
export const GetAllRoomViewsDdDocument = gql`
    query getAllRoomViewsDd {
  getAllRoomView {
    id: roomViewId
    name
  }
}
    `;

/**
 * __useGetAllRoomViewsDdQuery__
 *
 * To run a query within a React component, call `useGetAllRoomViewsDdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoomViewsDdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoomViewsDdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRoomViewsDdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllRoomViewsDdQuery, GetAllRoomViewsDdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllRoomViewsDdQuery, GetAllRoomViewsDdQueryVariables>(GetAllRoomViewsDdDocument, baseOptions);
      }
export function useGetAllRoomViewsDdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllRoomViewsDdQuery, GetAllRoomViewsDdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllRoomViewsDdQuery, GetAllRoomViewsDdQueryVariables>(GetAllRoomViewsDdDocument, baseOptions);
        }
export type GetAllRoomViewsDdQueryHookResult = ReturnType<typeof useGetAllRoomViewsDdQuery>;
export type GetAllRoomViewsDdLazyQueryHookResult = ReturnType<typeof useGetAllRoomViewsDdLazyQuery>;
export type GetAllRoomViewsDdQueryResult = ApolloReactCommon.QueryResult<GetAllRoomViewsDdQuery, GetAllRoomViewsDdQueryVariables>;
export const GetAllRoomViewDocument = gql`
    query getAllRoomView {
  getAllRoomView {
    ...RoomViewsFragment
  }
}
    ${RoomViewsFragmentFragmentDoc}`;

/**
 * __useGetAllRoomViewQuery__
 *
 * To run a query within a React component, call `useGetAllRoomViewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoomViewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoomViewQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRoomViewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllRoomViewQuery, GetAllRoomViewQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllRoomViewQuery, GetAllRoomViewQueryVariables>(GetAllRoomViewDocument, baseOptions);
      }
export function useGetAllRoomViewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllRoomViewQuery, GetAllRoomViewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllRoomViewQuery, GetAllRoomViewQueryVariables>(GetAllRoomViewDocument, baseOptions);
        }
export type GetAllRoomViewQueryHookResult = ReturnType<typeof useGetAllRoomViewQuery>;
export type GetAllRoomViewLazyQueryHookResult = ReturnType<typeof useGetAllRoomViewLazyQuery>;
export type GetAllRoomViewQueryResult = ApolloReactCommon.QueryResult<GetAllRoomViewQuery, GetAllRoomViewQueryVariables>;
export const UpdateRoomViewDocument = gql`
    mutation updateRoomView($data: RoomViewInput!) {
  updateRoomView(data: $data) {
    ...RoomViewsFragment
  }
}
    ${RoomViewsFragmentFragmentDoc}`;
export type UpdateRoomViewMutationFn = ApolloReactCommon.MutationFunction<UpdateRoomViewMutation, UpdateRoomViewMutationVariables>;

/**
 * __useUpdateRoomViewMutation__
 *
 * To run a mutation, you first call `useUpdateRoomViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoomViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoomViewMutation, { data, loading, error }] = useUpdateRoomViewMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRoomViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRoomViewMutation, UpdateRoomViewMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateRoomViewMutation, UpdateRoomViewMutationVariables>(UpdateRoomViewDocument, baseOptions);
      }
export type UpdateRoomViewMutationHookResult = ReturnType<typeof useUpdateRoomViewMutation>;
export type UpdateRoomViewMutationResult = ApolloReactCommon.MutationResult<UpdateRoomViewMutation>;
export type UpdateRoomViewMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateRoomViewMutation, UpdateRoomViewMutationVariables>;
export const GetRoomViewByIdDocument = gql`
    query getRoomViewById($roomViewId: Int!) {
  getRoomViewById(roomViewId: $roomViewId) {
    ...RoomViewsFragment
  }
}
    ${RoomViewsFragmentFragmentDoc}`;

/**
 * __useGetRoomViewByIdQuery__
 *
 * To run a query within a React component, call `useGetRoomViewByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomViewByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomViewByIdQuery({
 *   variables: {
 *      roomViewId: // value for 'roomViewId'
 *   },
 * });
 */
export function useGetRoomViewByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRoomViewByIdQuery, GetRoomViewByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRoomViewByIdQuery, GetRoomViewByIdQueryVariables>(GetRoomViewByIdDocument, baseOptions);
      }
export function useGetRoomViewByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRoomViewByIdQuery, GetRoomViewByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRoomViewByIdQuery, GetRoomViewByIdQueryVariables>(GetRoomViewByIdDocument, baseOptions);
        }
export type GetRoomViewByIdQueryHookResult = ReturnType<typeof useGetRoomViewByIdQuery>;
export type GetRoomViewByIdLazyQueryHookResult = ReturnType<typeof useGetRoomViewByIdLazyQuery>;
export type GetRoomViewByIdQueryResult = ApolloReactCommon.QueryResult<GetRoomViewByIdQuery, GetRoomViewByIdQueryVariables>;
export const AddRoomViewDocument = gql`
    mutation addRoomView($data: RoomViewInput!) {
  addRoomView(data: $data) {
    ...RoomViewsFragment
  }
}
    ${RoomViewsFragmentFragmentDoc}`;
export type AddRoomViewMutationFn = ApolloReactCommon.MutationFunction<AddRoomViewMutation, AddRoomViewMutationVariables>;

/**
 * __useAddRoomViewMutation__
 *
 * To run a mutation, you first call `useAddRoomViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRoomViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRoomViewMutation, { data, loading, error }] = useAddRoomViewMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddRoomViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddRoomViewMutation, AddRoomViewMutationVariables>) {
        return ApolloReactHooks.useMutation<AddRoomViewMutation, AddRoomViewMutationVariables>(AddRoomViewDocument, baseOptions);
      }
export type AddRoomViewMutationHookResult = ReturnType<typeof useAddRoomViewMutation>;
export type AddRoomViewMutationResult = ApolloReactCommon.MutationResult<AddRoomViewMutation>;
export type AddRoomViewMutationOptions = ApolloReactCommon.BaseMutationOptions<AddRoomViewMutation, AddRoomViewMutationVariables>;
export const DeleteRoomViewDocument = gql`
    mutation deleteRoomView($roomViewId: Int!) {
  deleteRoomView(roomViewId: $roomViewId) {
    ...RoomViewsFragment
  }
}
    ${RoomViewsFragmentFragmentDoc}`;
export type DeleteRoomViewMutationFn = ApolloReactCommon.MutationFunction<DeleteRoomViewMutation, DeleteRoomViewMutationVariables>;

/**
 * __useDeleteRoomViewMutation__
 *
 * To run a mutation, you first call `useDeleteRoomViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoomViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoomViewMutation, { data, loading, error }] = useDeleteRoomViewMutation({
 *   variables: {
 *      roomViewId: // value for 'roomViewId'
 *   },
 * });
 */
export function useDeleteRoomViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRoomViewMutation, DeleteRoomViewMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteRoomViewMutation, DeleteRoomViewMutationVariables>(DeleteRoomViewDocument, baseOptions);
      }
export type DeleteRoomViewMutationHookResult = ReturnType<typeof useDeleteRoomViewMutation>;
export type DeleteRoomViewMutationResult = ApolloReactCommon.MutationResult<DeleteRoomViewMutation>;
export type DeleteRoomViewMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteRoomViewMutation, DeleteRoomViewMutationVariables>;
export const GetAllServicesDdDocument = gql`
    query getAllServicesDd($hotelId: Int!) {
  getAllServices(hotelId: $hotelId) {
    id: serviceId
    name
  }
}
    `;

/**
 * __useGetAllServicesDdQuery__
 *
 * To run a query within a React component, call `useGetAllServicesDdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllServicesDdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllServicesDdQuery({
 *   variables: {
 *      hotelId: // value for 'hotelId'
 *   },
 * });
 */
export function useGetAllServicesDdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllServicesDdQuery, GetAllServicesDdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllServicesDdQuery, GetAllServicesDdQueryVariables>(GetAllServicesDdDocument, baseOptions);
      }
export function useGetAllServicesDdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllServicesDdQuery, GetAllServicesDdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllServicesDdQuery, GetAllServicesDdQueryVariables>(GetAllServicesDdDocument, baseOptions);
        }
export type GetAllServicesDdQueryHookResult = ReturnType<typeof useGetAllServicesDdQuery>;
export type GetAllServicesDdLazyQueryHookResult = ReturnType<typeof useGetAllServicesDdLazyQuery>;
export type GetAllServicesDdQueryResult = ApolloReactCommon.QueryResult<GetAllServicesDdQuery, GetAllServicesDdQueryVariables>;
export const GetAllServicesDocument = gql`
    query getAllServices($hotelId: Int!) {
  getAllServices(hotelId: $hotelId) {
    ...ServiceFragment
  }
}
    ${ServiceFragmentFragmentDoc}`;

/**
 * __useGetAllServicesQuery__
 *
 * To run a query within a React component, call `useGetAllServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllServicesQuery({
 *   variables: {
 *      hotelId: // value for 'hotelId'
 *   },
 * });
 */
export function useGetAllServicesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllServicesQuery, GetAllServicesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllServicesQuery, GetAllServicesQueryVariables>(GetAllServicesDocument, baseOptions);
      }
export function useGetAllServicesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllServicesQuery, GetAllServicesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllServicesQuery, GetAllServicesQueryVariables>(GetAllServicesDocument, baseOptions);
        }
export type GetAllServicesQueryHookResult = ReturnType<typeof useGetAllServicesQuery>;
export type GetAllServicesLazyQueryHookResult = ReturnType<typeof useGetAllServicesLazyQuery>;
export type GetAllServicesQueryResult = ApolloReactCommon.QueryResult<GetAllServicesQuery, GetAllServicesQueryVariables>;
export const GetServiceByIdDocument = gql`
    query getServiceById($serviceId: Int!) {
  getServiceById(serviceId: $serviceId) {
    ...ServiceFragment
  }
}
    ${ServiceFragmentFragmentDoc}`;

/**
 * __useGetServiceByIdQuery__
 *
 * To run a query within a React component, call `useGetServiceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceByIdQuery({
 *   variables: {
 *      serviceId: // value for 'serviceId'
 *   },
 * });
 */
export function useGetServiceByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetServiceByIdQuery, GetServiceByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetServiceByIdQuery, GetServiceByIdQueryVariables>(GetServiceByIdDocument, baseOptions);
      }
export function useGetServiceByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetServiceByIdQuery, GetServiceByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetServiceByIdQuery, GetServiceByIdQueryVariables>(GetServiceByIdDocument, baseOptions);
        }
export type GetServiceByIdQueryHookResult = ReturnType<typeof useGetServiceByIdQuery>;
export type GetServiceByIdLazyQueryHookResult = ReturnType<typeof useGetServiceByIdLazyQuery>;
export type GetServiceByIdQueryResult = ApolloReactCommon.QueryResult<GetServiceByIdQuery, GetServiceByIdQueryVariables>;
export const AddServiceDocument = gql`
    mutation addService($data: ServiceInput!) {
  addService(data: $data) {
    ...ServiceFragment
  }
}
    ${ServiceFragmentFragmentDoc}`;
export type AddServiceMutationFn = ApolloReactCommon.MutationFunction<AddServiceMutation, AddServiceMutationVariables>;

/**
 * __useAddServiceMutation__
 *
 * To run a mutation, you first call `useAddServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addServiceMutation, { data, loading, error }] = useAddServiceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddServiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddServiceMutation, AddServiceMutationVariables>) {
        return ApolloReactHooks.useMutation<AddServiceMutation, AddServiceMutationVariables>(AddServiceDocument, baseOptions);
      }
export type AddServiceMutationHookResult = ReturnType<typeof useAddServiceMutation>;
export type AddServiceMutationResult = ApolloReactCommon.MutationResult<AddServiceMutation>;
export type AddServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<AddServiceMutation, AddServiceMutationVariables>;
export const UpdateServiceDocument = gql`
    mutation updateService($data: ServiceInput!) {
  updateService(data: $data) {
    ...ServiceFragment
  }
}
    ${ServiceFragmentFragmentDoc}`;
export type UpdateServiceMutationFn = ApolloReactCommon.MutationFunction<UpdateServiceMutation, UpdateServiceMutationVariables>;

/**
 * __useUpdateServiceMutation__
 *
 * To run a mutation, you first call `useUpdateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceMutation, { data, loading, error }] = useUpdateServiceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateServiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateServiceMutation, UpdateServiceMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateServiceMutation, UpdateServiceMutationVariables>(UpdateServiceDocument, baseOptions);
      }
export type UpdateServiceMutationHookResult = ReturnType<typeof useUpdateServiceMutation>;
export type UpdateServiceMutationResult = ApolloReactCommon.MutationResult<UpdateServiceMutation>;
export type UpdateServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateServiceMutation, UpdateServiceMutationVariables>;
export const DeleteServiceDocument = gql`
    mutation deleteService($serviceId: Int!) {
  deleteService(serviceId: $serviceId) {
    ...ServiceFragment
  }
}
    ${ServiceFragmentFragmentDoc}`;
export type DeleteServiceMutationFn = ApolloReactCommon.MutationFunction<DeleteServiceMutation, DeleteServiceMutationVariables>;

/**
 * __useDeleteServiceMutation__
 *
 * To run a mutation, you first call `useDeleteServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceMutation, { data, loading, error }] = useDeleteServiceMutation({
 *   variables: {
 *      serviceId: // value for 'serviceId'
 *   },
 * });
 */
export function useDeleteServiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteServiceMutation, DeleteServiceMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteServiceMutation, DeleteServiceMutationVariables>(DeleteServiceDocument, baseOptions);
      }
export type DeleteServiceMutationHookResult = ReturnType<typeof useDeleteServiceMutation>;
export type DeleteServiceMutationResult = ApolloReactCommon.MutationResult<DeleteServiceMutation>;
export type DeleteServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteServiceMutation, DeleteServiceMutationVariables>;
export const GetAllServiceReservationDocument = gql`
    query getAllServiceReservation($startOfWeek: DateTime!, $endOfWeek: DateTime!, $hotelId: Int!) {
  getAllServiceReservation(startOfWeek: $startOfWeek, endOfWeek: $endOfWeek, hotelId: $hotelId) {
    serviceReservationId
    startDate
    endDate
    service {
      name
    }
    serviceStatus {
      abbr
    }
  }
}
    `;

/**
 * __useGetAllServiceReservationQuery__
 *
 * To run a query within a React component, call `useGetAllServiceReservationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllServiceReservationQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllServiceReservationQuery({
 *   variables: {
 *      startOfWeek: // value for 'startOfWeek'
 *      endOfWeek: // value for 'endOfWeek'
 *      hotelId: // value for 'hotelId'
 *   },
 * });
 */
export function useGetAllServiceReservationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllServiceReservationQuery, GetAllServiceReservationQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllServiceReservationQuery, GetAllServiceReservationQueryVariables>(GetAllServiceReservationDocument, baseOptions);
      }
export function useGetAllServiceReservationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllServiceReservationQuery, GetAllServiceReservationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllServiceReservationQuery, GetAllServiceReservationQueryVariables>(GetAllServiceReservationDocument, baseOptions);
        }
export type GetAllServiceReservationQueryHookResult = ReturnType<typeof useGetAllServiceReservationQuery>;
export type GetAllServiceReservationLazyQueryHookResult = ReturnType<typeof useGetAllServiceReservationLazyQuery>;
export type GetAllServiceReservationQueryResult = ApolloReactCommon.QueryResult<GetAllServiceReservationQuery, GetAllServiceReservationQueryVariables>;
export const GetServiceReservationByIdDocument = gql`
    query getServiceReservationById($serviceReservationId: Int!) {
  getServiceReservationById(serviceReservationId: $serviceReservationId) {
    serviceReservationId
    startDate
    endDate
    areThereChildren
    clientNotes
    serviceSubtype
    staffNotes
    service {
      serviceId
    }
    serviceStatus {
      serviceStatusId
    }
    clientServiceReservations {
      client {
        clientId
        cedula
        name
        firstSurname
        secondSurname
      }
    }
  }
}
    `;

/**
 * __useGetServiceReservationByIdQuery__
 *
 * To run a query within a React component, call `useGetServiceReservationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceReservationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceReservationByIdQuery({
 *   variables: {
 *      serviceReservationId: // value for 'serviceReservationId'
 *   },
 * });
 */
export function useGetServiceReservationByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetServiceReservationByIdQuery, GetServiceReservationByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetServiceReservationByIdQuery, GetServiceReservationByIdQueryVariables>(GetServiceReservationByIdDocument, baseOptions);
      }
export function useGetServiceReservationByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetServiceReservationByIdQuery, GetServiceReservationByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetServiceReservationByIdQuery, GetServiceReservationByIdQueryVariables>(GetServiceReservationByIdDocument, baseOptions);
        }
export type GetServiceReservationByIdQueryHookResult = ReturnType<typeof useGetServiceReservationByIdQuery>;
export type GetServiceReservationByIdLazyQueryHookResult = ReturnType<typeof useGetServiceReservationByIdLazyQuery>;
export type GetServiceReservationByIdQueryResult = ApolloReactCommon.QueryResult<GetServiceReservationByIdQuery, GetServiceReservationByIdQueryVariables>;
export const AddServiceReservationDocument = gql`
    mutation addServiceReservation($data: ServiceReservationInput!) {
  addServiceReservation(data: $data) {
    serviceReservationId
  }
}
    `;
export type AddServiceReservationMutationFn = ApolloReactCommon.MutationFunction<AddServiceReservationMutation, AddServiceReservationMutationVariables>;

/**
 * __useAddServiceReservationMutation__
 *
 * To run a mutation, you first call `useAddServiceReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddServiceReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addServiceReservationMutation, { data, loading, error }] = useAddServiceReservationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddServiceReservationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddServiceReservationMutation, AddServiceReservationMutationVariables>) {
        return ApolloReactHooks.useMutation<AddServiceReservationMutation, AddServiceReservationMutationVariables>(AddServiceReservationDocument, baseOptions);
      }
export type AddServiceReservationMutationHookResult = ReturnType<typeof useAddServiceReservationMutation>;
export type AddServiceReservationMutationResult = ApolloReactCommon.MutationResult<AddServiceReservationMutation>;
export type AddServiceReservationMutationOptions = ApolloReactCommon.BaseMutationOptions<AddServiceReservationMutation, AddServiceReservationMutationVariables>;
export const UpdateServiceReservationDocument = gql`
    mutation updateServiceReservation($data: ServiceReservationInput!) {
  updateServiceReservation(data: $data) {
    serviceReservationId
  }
}
    `;
export type UpdateServiceReservationMutationFn = ApolloReactCommon.MutationFunction<UpdateServiceReservationMutation, UpdateServiceReservationMutationVariables>;

/**
 * __useUpdateServiceReservationMutation__
 *
 * To run a mutation, you first call `useUpdateServiceReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceReservationMutation, { data, loading, error }] = useUpdateServiceReservationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateServiceReservationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateServiceReservationMutation, UpdateServiceReservationMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateServiceReservationMutation, UpdateServiceReservationMutationVariables>(UpdateServiceReservationDocument, baseOptions);
      }
export type UpdateServiceReservationMutationHookResult = ReturnType<typeof useUpdateServiceReservationMutation>;
export type UpdateServiceReservationMutationResult = ApolloReactCommon.MutationResult<UpdateServiceReservationMutation>;
export type UpdateServiceReservationMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateServiceReservationMutation, UpdateServiceReservationMutationVariables>;
export const DeleteServiceReservationDocument = gql`
    mutation deleteServiceReservation($serviceReservationId: Int!) {
  deleteServiceReservation(serviceReservationId: $serviceReservationId) {
    serviceReservationId
  }
}
    `;
export type DeleteServiceReservationMutationFn = ApolloReactCommon.MutationFunction<DeleteServiceReservationMutation, DeleteServiceReservationMutationVariables>;

/**
 * __useDeleteServiceReservationMutation__
 *
 * To run a mutation, you first call `useDeleteServiceReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceReservationMutation, { data, loading, error }] = useDeleteServiceReservationMutation({
 *   variables: {
 *      serviceReservationId: // value for 'serviceReservationId'
 *   },
 * });
 */
export function useDeleteServiceReservationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteServiceReservationMutation, DeleteServiceReservationMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteServiceReservationMutation, DeleteServiceReservationMutationVariables>(DeleteServiceReservationDocument, baseOptions);
      }
export type DeleteServiceReservationMutationHookResult = ReturnType<typeof useDeleteServiceReservationMutation>;
export type DeleteServiceReservationMutationResult = ApolloReactCommon.MutationResult<DeleteServiceReservationMutation>;
export type DeleteServiceReservationMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteServiceReservationMutation, DeleteServiceReservationMutationVariables>;
export const GetAllServiceStatusesDocument = gql`
    query getAllServiceStatuses {
  getAllServiceStatuses {
    ...ServiceStatusFragment
  }
}
    ${ServiceStatusFragmentFragmentDoc}`;

/**
 * __useGetAllServiceStatusesQuery__
 *
 * To run a query within a React component, call `useGetAllServiceStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllServiceStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllServiceStatusesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllServiceStatusesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllServiceStatusesQuery, GetAllServiceStatusesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllServiceStatusesQuery, GetAllServiceStatusesQueryVariables>(GetAllServiceStatusesDocument, baseOptions);
      }
export function useGetAllServiceStatusesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllServiceStatusesQuery, GetAllServiceStatusesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllServiceStatusesQuery, GetAllServiceStatusesQueryVariables>(GetAllServiceStatusesDocument, baseOptions);
        }
export type GetAllServiceStatusesQueryHookResult = ReturnType<typeof useGetAllServiceStatusesQuery>;
export type GetAllServiceStatusesLazyQueryHookResult = ReturnType<typeof useGetAllServiceStatusesLazyQuery>;
export type GetAllServiceStatusesQueryResult = ApolloReactCommon.QueryResult<GetAllServiceStatusesQuery, GetAllServiceStatusesQueryVariables>;
export const GetAllServiceStatusesDdDocument = gql`
    query getAllServiceStatusesDd {
  getAllServiceStatuses {
    id: serviceStatusId
    name
  }
}
    `;

/**
 * __useGetAllServiceStatusesDdQuery__
 *
 * To run a query within a React component, call `useGetAllServiceStatusesDdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllServiceStatusesDdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllServiceStatusesDdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllServiceStatusesDdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllServiceStatusesDdQuery, GetAllServiceStatusesDdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllServiceStatusesDdQuery, GetAllServiceStatusesDdQueryVariables>(GetAllServiceStatusesDdDocument, baseOptions);
      }
export function useGetAllServiceStatusesDdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllServiceStatusesDdQuery, GetAllServiceStatusesDdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllServiceStatusesDdQuery, GetAllServiceStatusesDdQueryVariables>(GetAllServiceStatusesDdDocument, baseOptions);
        }
export type GetAllServiceStatusesDdQueryHookResult = ReturnType<typeof useGetAllServiceStatusesDdQuery>;
export type GetAllServiceStatusesDdLazyQueryHookResult = ReturnType<typeof useGetAllServiceStatusesDdLazyQuery>;
export type GetAllServiceStatusesDdQueryResult = ApolloReactCommon.QueryResult<GetAllServiceStatusesDdQuery, GetAllServiceStatusesDdQueryVariables>;
export const UpdateServiceStatusDocument = gql`
    mutation updateServiceStatus($data: ServiceStatusInput!) {
  updateServiceStatus(data: $data) {
    ...ServiceStatusFragment
  }
}
    ${ServiceStatusFragmentFragmentDoc}`;
export type UpdateServiceStatusMutationFn = ApolloReactCommon.MutationFunction<UpdateServiceStatusMutation, UpdateServiceStatusMutationVariables>;

/**
 * __useUpdateServiceStatusMutation__
 *
 * To run a mutation, you first call `useUpdateServiceStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceStatusMutation, { data, loading, error }] = useUpdateServiceStatusMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateServiceStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateServiceStatusMutation, UpdateServiceStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateServiceStatusMutation, UpdateServiceStatusMutationVariables>(UpdateServiceStatusDocument, baseOptions);
      }
export type UpdateServiceStatusMutationHookResult = ReturnType<typeof useUpdateServiceStatusMutation>;
export type UpdateServiceStatusMutationResult = ApolloReactCommon.MutationResult<UpdateServiceStatusMutation>;
export type UpdateServiceStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateServiceStatusMutation, UpdateServiceStatusMutationVariables>;
export const GetServiceStatusByIdDocument = gql`
    query getServiceStatusById($serviceStatusId: Int!) {
  getServiceStatusById(serviceStatusId: $serviceStatusId) {
    ...ServiceStatusFragment
  }
}
    ${ServiceStatusFragmentFragmentDoc}`;

/**
 * __useGetServiceStatusByIdQuery__
 *
 * To run a query within a React component, call `useGetServiceStatusByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceStatusByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceStatusByIdQuery({
 *   variables: {
 *      serviceStatusId: // value for 'serviceStatusId'
 *   },
 * });
 */
export function useGetServiceStatusByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetServiceStatusByIdQuery, GetServiceStatusByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetServiceStatusByIdQuery, GetServiceStatusByIdQueryVariables>(GetServiceStatusByIdDocument, baseOptions);
      }
export function useGetServiceStatusByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetServiceStatusByIdQuery, GetServiceStatusByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetServiceStatusByIdQuery, GetServiceStatusByIdQueryVariables>(GetServiceStatusByIdDocument, baseOptions);
        }
export type GetServiceStatusByIdQueryHookResult = ReturnType<typeof useGetServiceStatusByIdQuery>;
export type GetServiceStatusByIdLazyQueryHookResult = ReturnType<typeof useGetServiceStatusByIdLazyQuery>;
export type GetServiceStatusByIdQueryResult = ApolloReactCommon.QueryResult<GetServiceStatusByIdQuery, GetServiceStatusByIdQueryVariables>;
export const AddServiceStatusDocument = gql`
    mutation addServiceStatus($data: ServiceStatusInput!) {
  addServiceStatus(data: $data) {
    ...ServiceStatusFragment
  }
}
    ${ServiceStatusFragmentFragmentDoc}`;
export type AddServiceStatusMutationFn = ApolloReactCommon.MutationFunction<AddServiceStatusMutation, AddServiceStatusMutationVariables>;

/**
 * __useAddServiceStatusMutation__
 *
 * To run a mutation, you first call `useAddServiceStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddServiceStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addServiceStatusMutation, { data, loading, error }] = useAddServiceStatusMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddServiceStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddServiceStatusMutation, AddServiceStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<AddServiceStatusMutation, AddServiceStatusMutationVariables>(AddServiceStatusDocument, baseOptions);
      }
export type AddServiceStatusMutationHookResult = ReturnType<typeof useAddServiceStatusMutation>;
export type AddServiceStatusMutationResult = ApolloReactCommon.MutationResult<AddServiceStatusMutation>;
export type AddServiceStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<AddServiceStatusMutation, AddServiceStatusMutationVariables>;
export const DeleteServiceStatusDocument = gql`
    mutation deleteServiceStatus($serviceStatusId: Int!) {
  deleteServiceStatus(serviceStatusId: $serviceStatusId) {
    ...ServiceStatusFragment
  }
}
    ${ServiceStatusFragmentFragmentDoc}`;
export type DeleteServiceStatusMutationFn = ApolloReactCommon.MutationFunction<DeleteServiceStatusMutation, DeleteServiceStatusMutationVariables>;

/**
 * __useDeleteServiceStatusMutation__
 *
 * To run a mutation, you first call `useDeleteServiceStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceStatusMutation, { data, loading, error }] = useDeleteServiceStatusMutation({
 *   variables: {
 *      serviceStatusId: // value for 'serviceStatusId'
 *   },
 * });
 */
export function useDeleteServiceStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteServiceStatusMutation, DeleteServiceStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteServiceStatusMutation, DeleteServiceStatusMutationVariables>(DeleteServiceStatusDocument, baseOptions);
      }
export type DeleteServiceStatusMutationHookResult = ReturnType<typeof useDeleteServiceStatusMutation>;
export type DeleteServiceStatusMutationResult = ApolloReactCommon.MutationResult<DeleteServiceStatusMutation>;
export type DeleteServiceStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteServiceStatusMutation, DeleteServiceStatusMutationVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  getAllUsers {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
      }
export function useGetAllUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = ApolloReactCommon.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetAllProfesorsDocument = gql`
    query getAllProfesors {
  getAllProfesors {
    id: userId
    userName
  }
}
    `;

/**
 * __useGetAllProfesorsQuery__
 *
 * To run a query within a React component, call `useGetAllProfesorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProfesorsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProfesorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProfesorsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllProfesorsQuery, GetAllProfesorsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllProfesorsQuery, GetAllProfesorsQueryVariables>(GetAllProfesorsDocument, baseOptions);
      }
export function useGetAllProfesorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllProfesorsQuery, GetAllProfesorsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllProfesorsQuery, GetAllProfesorsQueryVariables>(GetAllProfesorsDocument, baseOptions);
        }
export type GetAllProfesorsQueryHookResult = ReturnType<typeof useGetAllProfesorsQuery>;
export type GetAllProfesorsLazyQueryHookResult = ReturnType<typeof useGetAllProfesorsLazyQuery>;
export type GetAllProfesorsQueryResult = ApolloReactCommon.QueryResult<GetAllProfesorsQuery, GetAllProfesorsQueryVariables>;
export const GetAllUsersDdDocument = gql`
    query getAllUsersDd {
  getAllUsers {
    id: userId
    userName
  }
}
    `;

/**
 * __useGetAllUsersDdQuery__
 *
 * To run a query within a React component, call `useGetAllUsersDdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersDdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersDdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersDdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllUsersDdQuery, GetAllUsersDdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllUsersDdQuery, GetAllUsersDdQueryVariables>(GetAllUsersDdDocument, baseOptions);
      }
export function useGetAllUsersDdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllUsersDdQuery, GetAllUsersDdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllUsersDdQuery, GetAllUsersDdQueryVariables>(GetAllUsersDdDocument, baseOptions);
        }
export type GetAllUsersDdQueryHookResult = ReturnType<typeof useGetAllUsersDdQuery>;
export type GetAllUsersDdLazyQueryHookResult = ReturnType<typeof useGetAllUsersDdLazyQuery>;
export type GetAllUsersDdQueryResult = ApolloReactCommon.QueryResult<GetAllUsersDdQuery, GetAllUsersDdQueryVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($data: UserInput!) {
  updateUser(data: $data) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetUserByIdDocument = gql`
    query getUserById($userId: Int!) {
  getUserById(userId: $userId) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, baseOptions);
      }
export function useGetUserByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, baseOptions);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = ApolloReactCommon.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const AddUserDocument = gql`
    mutation addUser($data: UserInput!) {
  addUser(data: $data) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type AddUserMutationFn = ApolloReactCommon.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        return ApolloReactHooks.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, baseOptions);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = ApolloReactCommon.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = ApolloReactCommon.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($userId: Int!) {
  deleteUser(userId: $userId) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($userId: Int!) {
  resetPassword(userId: $userId)
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($password: String!) {
  changePassword(password: $password)
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const GetAllUserRolesDdDocument = gql`
    query getAllUserRolesDd {
  getAllUserRoles {
    id: userRoleId
    name
  }
}
    `;

/**
 * __useGetAllUserRolesDdQuery__
 *
 * To run a query within a React component, call `useGetAllUserRolesDdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserRolesDdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserRolesDdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserRolesDdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllUserRolesDdQuery, GetAllUserRolesDdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllUserRolesDdQuery, GetAllUserRolesDdQueryVariables>(GetAllUserRolesDdDocument, baseOptions);
      }
export function useGetAllUserRolesDdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllUserRolesDdQuery, GetAllUserRolesDdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllUserRolesDdQuery, GetAllUserRolesDdQueryVariables>(GetAllUserRolesDdDocument, baseOptions);
        }
export type GetAllUserRolesDdQueryHookResult = ReturnType<typeof useGetAllUserRolesDdQuery>;
export type GetAllUserRolesDdLazyQueryHookResult = ReturnType<typeof useGetAllUserRolesDdLazyQuery>;
export type GetAllUserRolesDdQueryResult = ApolloReactCommon.QueryResult<GetAllUserRolesDdQuery, GetAllUserRolesDdQueryVariables>;