import React, { FC, ReactElement, useState } from 'react';
import { Formik, FormikProps, Form, FieldArray, FieldArrayRenderProps } from 'formik';
import * as Yup from 'yup';
import { useApolloClient } from "@apollo/react-hooks";
import moment from 'moment';
import {
  GetAllClientsBySearchCriteriaDocument, GetAllClientsBySearchCriteriaQuery,
  useGetReservationByIdQuery, GetReservationByIdQuery,
  useGetClientByIdLazyQuery, useGetAllRoomsQuery, useAddReservationMutation,
  useUpdateReservationMutation
} from '../../../../generated/graphql'
import useStyles from './reservation.modal.style';
import Dropdown from '../../../../components/Common/Dropdown/dropdown.component';
import ModalComponent from '../../../../components/Common/Modal/modal.component';
import Input from '../../../../components/Common/Input/input.component';
import SectionHeaderComponent from '../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../components/Common/Button/button.types';
import { formValues, RoomType } from './reservation.modal.type';
import { required, dropdownText } from '../../../../utils/formErrors';
import { primaryColor } from '../../../../utils/styles/colors';
import { ReactSelectType } from '../../../../components/Common/AsyncSelect/asyncSelect.types';
import ClientFormModal from '../../../Client/ClientModal/client.modal';
import DatePickerComponent from '../../../../components/Common/DatePicker/datePicker.component';
import { FiPlusCircle } from 'react-icons/fi';
import AsyncSelectComponent from '../../../../components/Common/AsyncSelect/asyncSelect.component';
import ReservationItemFormModal from '../ReservationItemModal/reservationItem.modal';
import { Usegct } from '../../../Context/useGlobalContext';
import { getReservationStatusId } from './reservation.modal.helper';
import { forceUpdate } from '../../../../utils/tempReload';

const defaultReactDateArr: RoomType = { roomId: 0, startDate: null, endDate: null }
type ClientDataType = {
  cedula: string,
  name: string,
  firstSurname: string,
  secondSurname: string,
}
const formatClientData = (x: ClientDataType) =>
  `${x.cedula} - ${x.name} ${x.firstSurname} ${x.secondSurname}`

interface Props {
  reservationId: number;
  setToggleModal: Function;
}

const ServiceFormModal: FC<Props> = ({
  reservationId,
  setToggleModal,
}): ReactElement => {
  const classes = useStyles();
  const usegct = Usegct();
  const apolloClient = useApolloClient();
  const { data: reservationData } = useGetReservationByIdQuery({ variables: { reservationId }});
  const { data: allRoomsQuery } = useGetAllRoomsQuery({ variables: { hotelId: usegct.chosenHotelId } });
  const [ createReservation ] = useAddReservationMutation();
  const [ updateService ] = useUpdateReservationMutation();
  const [getClient, { data: clientData }] = useGetClientByIdLazyQuery();
  const [clientModal, setClientModal] = useState(false);
  const [reservationItemId, setReservationItemId] = useState(-1);
  const disabled = reservationId > 0;

  const openReservationItemModal = (resvItemId: number) => {
    setReservationItemId(resvItemId)
  }

  const deleteReservationItemModal = (resvItemId: number) => {
    console.log(resvItemId)
  }

  const onHandleSubmit = async (values: formValues) => {
    const variables = {
      data: {
        clientId: values.clientId,
        room: values.rooms,
        subtotal: values.subtotal,
        tax: values.tax,
        total: values.total,
        reservationStatusId: +values.reservationStatus,
      }
    };

    if(reservationId === 0) {
      await createReservation({ variables, update: forceUpdate })
    } else  {
      await updateService({
        variables: {
          data:{
            reservationId,
            reservationStatusId: +values.reservationStatus
          }
        },
        update: forceUpdate,
      });
    }

    setToggleModal(-1);
  }

  const initialValues = (payload: GetReservationByIdQuery | undefined): formValues => {
    let initialData = {};

    if(payload?.getReservationById) {
      const {
        tax,
        subtotal,
        total,
        client,
        reservationRooms,
        reservationStatus,
      } = payload.getReservationById;

      const rooms = reservationRooms.map(x => ({
        startDate: moment(x.checkOutDate),
        endDate: moment(x.checkInDate),
        roomId: +x.reservationRoomId
      }));

      initialData = {
        tax,
        subtotal,
        total,
        rooms,
        clientId: {
          value: client.clientId, label: formatClientData(client)
        } as ReactSelectType,
        reservationStatus: reservationStatus.reservationStatusId
      };
    }

    return {
      clientId: 0,
      rooms: [defaultReactDateArr],
      total: 0,
      subtotal: 0,
      tax: 0,
      reservationStatus: 0,
      // globalDates: defaultGlobalDate,
      ...initialData
    }
  }

  const loadOptions = async (criteria: string, cb: Function) => {

    const { data: getAllClSearch }: {data: GetAllClientsBySearchCriteriaQuery } = await apolloClient
      .query({
        query: GetAllClientsBySearchCriteriaDocument,
        variables: { criteria, hotelId: usegct.chosenHotelId }
      });

    const parsedClientData = getAllClSearch?.getAllClientsBySearchCriteria
      .map((x) => ({
        value: x.clientId,
        label: formatClientData(x)
      } as ReactSelectType));

    cb(parsedClientData);
  }

  const getClientData = (clientId: number) => {
    getClient({ variables: { clientId }})
  }

  const loadRoomOptions = async (criteria: string, cb: Function) => {

    const filtered = allRoomsQuery?.getAllRooms
      .filter(x =>
        `${x.roomNumber} - ${x.roomType.name}`
          .toLowerCase().includes(criteria.toLowerCase())
      )

    const parsedClientData = filtered?.map((x) => ({
      value: x.roomId,
      label: `${x.roomNumber} - ${x.roomType.name}`
    } as ReactSelectType));

    cb(parsedClientData);
  }

  const renderClientData = () => {
    const cData = clientData?.getClientById;
    if(!cData) {
      return;
    }
    return (
      <div>
        <span>Nombre: {cData.name} {cData.firstSurname} {cData.secondSurname}</span><br/>
        <span>Nacionalidad: {cData.nationality}</span><br/>
        <span>Numero de Telefono: {cData.phoneNumber}</span><br/>
        <span>{cData.disability ? 'Es Discapacitado' : ''}</span>
      </div>
    )
  }

  const onNewClientAdded = (clientId: number) => {
    getClient({ variables: { clientId }});
  }
  
  return (
    <>
      { clientModal &&
        <ClientFormModal
          setToggleModal={setClientModal}
          toggleModal={clientModal}
          clientId={0}
          OverlayZIndex={11}
          ModalZIndex={12}
          onNewClientAdded={onNewClientAdded}
        />
      }

      { reservationItemId !== -1 &&
        <ReservationItemFormModal
          setToggleModal={setReservationItemId}
          reservationItemId={reservationItemId}
          reservationId={reservationId}
          OverlayZIndex={13}
          ModalZIndex={14}
        />
      }

      <ModalComponent
        show={reservationId !== -1}
        cancelCallback={() => setToggleModal(-1)}
        modalWidth={665}
      >
        <h4>{reservationId === 0 ? 'Agregar' : 'Actualizar'} Una Reserva</h4>

        <Formik
          initialValues={initialValues(reservationData)}
          enableReinitialize={true}
          validationSchema={() => {
            const reservationStatusId = getReservationStatusId(usegct.reservationStatuses);
            
            if(reservationId > 0) {
              return Yup.object({
                reservationStatus: Yup.string()
                  .oneOf(reservationStatusId, dropdownText).required(required),
              })
            }
            return Yup.object({
              reservationStatus: Yup.string()
                .oneOf(reservationStatusId, dropdownText).required(required),
              clientId: Yup.number().integer()
                .moreThan(0, dropdownText).required(required),
              // rooms: Yup.array().of(Yup.object()),
              rooms: Yup.array().of(
                Yup.object().shape({
                  roomId: Yup.number().required(required),
                  // startDate: Yup.string().required(required),
                  // endDate: Yup.string().required(required)
                })
              ),
              // globalDates: Yup.object(),
            })
          }
          }
          onSubmit={onHandleSubmit}
        >
          {(fProps: FormikProps<any>) => {
            const { isSubmitting, isValid, dirty, values } = fProps;

            return (
              <Form>
                <SectionHeaderComponent size={18} name="Estado del Cuarto" color={primaryColor.p1}/>
                <Dropdown
                  classes={{ wrapperClass: classes.inputGetAllSpace }}
                  labelName="Estado de la Reserva"
                  name="reservationStatus"
                  options={usegct.reservationStatuses}
                  {...fProps}
                />
                
                <SectionHeaderComponent size={18} name="Informacion del Cliente" color={primaryColor.p1}/>
                  <div className={classes.inlineInputs}>
                  
                    <AsyncSelectComponent
                      name="clientId"
                      labelName="Buscar un Cliente"
                      getOneOption={(cId: number) => {
                        fProps.setFieldValue(`clientId`, cId);
                        getClientData(cId);
                      }}
                      getAllOptions={loadOptions.bind(fProps)}
                      classes={{ wrapperClass: classes.inputGetAllSpace }}
                      attr={{ isDisabled: disabled }}
                      {...fProps}
                    />
                    <div className={classes.divSeparator}></div>
                    <Button
                      text="Crear nuevo Cliente"
                      onClick={() => setClientModal(true)}
                      buttonType={buttonTypes.BT3}
                      disabled={disabled}
                    />
                  </div>
                  {renderClientData()}
                <SectionHeaderComponent size={18} name="Cuartos a Reservar" color={primaryColor.p1}/>
                  <div>
                    <FieldArray
                      name="rooms"
                      render={(ah: FieldArrayRenderProps) => {
                        return (
                          <>
                              {values.rooms.map((value: number, i: number) => (
                                <div key={i} className={classes.inlineInputs}>
                                  <AsyncSelectComponent
                                    name={`rooms[${i}]`}
                                    labelName={`Cuarto ${i}`}
                                    getOneOption={(rId: number) => {
                                      fProps.setFieldValue(`rooms[${i}]`, { ...values.rooms[i], roomId: rId })
                                      

                                      // const asdf = values.rooms.reduce((acc: any, cur: any) => {

                                      //     acc[cur.roomId] = cur.startDate.diff(cur.endDate, 'days');
                                      //     return acc;
                                      // }, {});
                                      // debugger;

                                      const allRoomIds = (fProps.values as formValues).rooms
                                        .map((x) => x.roomId);
                                      allRoomIds.push(rId);

                                      const total = allRoomsQuery?.getAllRooms.reduce((a, b) => 
                                        allRoomIds.includes(+b.roomId) ? a + b.price : a
                                      , 0) || 0;

                                      const tax = (total * 0.13);
                                      const subtotal = total - tax;

                                      fProps.setFieldValue('subtotal', subtotal)
                                      fProps.setFieldValue('tax', tax)
                                      fProps.setFieldValue('total', total)
                                    }}
                                    getAllOptions={loadRoomOptions}
                                    classes={{ wrapperClass: classes.inputGetAllSpace }}
                                    attr={{ isDisabled: disabled }}
                                    {...fProps}
                                  />

                                  <DatePickerComponent
                                    arrayName="rooms"
                                    name={`rooms[${i}]`}
                                    startDate={values.rooms[i].startDate}
                                    endDate={values.rooms[i].endDate}
                                    labelName="Fechas"
                                    attr={{ disabled }}
                                    {...fProps} 
                                  />
                                </div>
                              ))}

                              <div style={{textAlign: 'center', alignSelf: 'center'}}>
                                <button
                                  type="button"
                                  className={classes.plusIcon}
                                  onClick={() => ah.push(defaultReactDateArr)}
                                >
                                  <FiPlusCircle size={36}/>
                                </button>
                              </div>

                            {/* </div> */}
                          </>
                      )}}
                    />
                  </div>
                  {/* (reservationId !== -1 && reservationId) !== 0 && */}
                { false &&
                  <>
                    <SectionHeaderComponent size={18} name="Extras de la reservacion" color={primaryColor.p1}/>
                    <Button
                      buttonType={buttonTypes.BT1}
                      text="Crear un nuevo item"
                      onClick={() => openReservationItemModal(0)}
                    />
                      { reservationData?.getReservationById.reservationItems &&
                        <div className={classes.container}>
                          <table className={classes.table}>
                            <thead>
                              <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Accion</th>
                              </tr>
                            </thead>
                            <tbody>
                              {reservationData?.getReservationById.reservationItems.map(x =>
                                <tr key={x.reservationItemId}>
                                  <td>{x.name}</td>
                                  <td>{x.price}</td>
                                  <td>
                                    <Button
                                      text="Editar"
                                      buttonType={buttonTypes.BT2}
                                      onClick={() => openReservationItemModal(+x.reservationItemId)}
                                      className={classes.editButton}
                                    />
                                    <Button
                                      text="Borrar"
                                      buttonType={buttonTypes.BT3}
                                      onClick={() => deleteReservationItemModal(+x.reservationItemId)}
                                      className={classes.deleteButton}
                                    />
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      }
                  </>
                }
                          
                <SectionHeaderComponent size={18} name="Montos" color={primaryColor.p1}/>
                <div className={classes.totals}>
                  <Input name="subtotal" attr={{ disabled: true }} { ...fProps } />
                  <Input labelName="IVA" attr={{ disabled: true }} name="tax" { ...fProps }/>
                  <Input name="total" attr={{ disabled: true }} { ...fProps }/>
                </div>


                <div className={classes.buttonContainer}>
                  <Button
                    buttonType={buttonTypes.BT1}
                    type="submit"
                    text={reservationId === 0 ? 'Guardar' : "Actualizar"}
                    isDisabled={
                      isSubmitting || !(isValid && dirty)
                    }
                    className={classes.saveButton}
                  />
                  <Button
                    buttonType={buttonTypes.BT3}
                    text="Cancelar"
                    onClick={()=> setToggleModal(-1)}
                    className={classes.cancelButton}
                  />
                </div>
                
              </Form>
            )}
          }
        </Formik>
      </ModalComponent>
    </>
  );
};

export default ServiceFormModal;
