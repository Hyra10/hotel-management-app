import React, { FC, ReactElement } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { useApolloClient } from "@apollo/react-hooks";
import AsyncSelect from 'react-select/async';
import {
  GetAllClientsBySearchCriteriaQuery, GetAllClientsBySearchCriteriaDocument,
  useAddServiceReservationMutation, useUpdateServiceReservationMutation,
  ServiceReservationInput, useDeleteServiceReservationMutation
} from '../../../generated/graphql'
import useStyles from './serviceReservation.modal.style';
import ModalComponent from '../../../components/Common/Modal/modal.component';
import Input from '../../../components/Common/Input/input.component';
import SectionHeaderComponent from '../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../components/Common/Button/button.types';
import { ReactSelectType } from '../../../components/Common/AsyncSelect/asyncSelect.types';
import { ServiceReservationFormValues } from './serviceReservation.modal.types';
import { required } from '../../../utils/formErrors';
import { primaryColor } from '../../../utils/styles/colors';
import Dropdown from '../../../components/Common/Dropdown/dropdown.component';
import { Usegct } from '../../Context/useGlobalContext';
import { forceUpdate } from '../../../utils/tempReload';

const textareaAttr = { maxLength:'150', rows: 2 };

interface Props {
  eventInfo: ServiceReservationFormValues;
  setEventInfo: Function;
}

const ServiceReservationFormModal: FC<Props> = ({
  eventInfo,
  setEventInfo,
}): ReactElement => {
  const classes = useStyles();
  const apolloClient = useApolloClient();
  const [ createServiceReservation ] = useAddServiceReservationMutation();
  const [ updateServiceReservation ] = useUpdateServiceReservationMutation();
  const [ deleteServiceReservation ] = useDeleteServiceReservationMutation();
  const gct = Usegct();

  const closeModal = () => setEventInfo({});

  const onHandleSubmit = async (values: ServiceReservationFormValues) => {

    const clientid = values.clients?.map(x => +x.value);

    const variables = {
      data: {
        serviceReservationId: +values.serviceReservationId,
        serviceId: +values.serviceId,
        serviceStatusId: +values.serviceStatusId,
        clientId: clientid,
        endDate: eventInfo.endDate,
        startDate: eventInfo.startDate,
        areThereChildren: values.areThereChildren,
        clientNotes: values.clientNotes,
        serviceSubtype: values.serviceSubtype,
        staffNotes: values.staffNotes
      } as ServiceReservationInput
    };

    if(values.serviceReservationId === 0) {
      await createServiceReservation({ variables, update: forceUpdate })
    } else  {
      await updateServiceReservation({ variables, update: forceUpdate });
    }

    setEventInfo({});
  }

  const onDelete = () => {
    deleteServiceReservation({
      variables: {
        serviceReservationId: eventInfo.serviceReservationId
      }
    })
  }

  const loadOptions = async (criteria: string, cb: Function) => {

    const { data }: {data: GetAllClientsBySearchCriteriaQuery } = await apolloClient
      .query({
        query: GetAllClientsBySearchCriteriaDocument,
        variables: { criteria, hotelId: gct.chosenHotelId }
      });

    const parsedClientData = data?.getAllClientsBySearchCriteria
    .map((x) => ({
      value: x.clientId,
      label: `${x.cedula} - ${x.name} ${x.firstSurname} ${x.secondSurname}`
    } as ReactSelectType));

    cb(parsedClientData)
  }

  const InitialValues = (ei: ServiceReservationFormValues) => {

    return {
      ...eventInfo,
      endDate: moment(eventInfo.endDate).format('hh:mm a'),
      startDate: moment(eventInfo.startDate).format('hh:mm a'),
      reservationDate: moment(eventInfo.startDate).format('DD-MM-yyyy')
    } as ServiceReservationFormValues
  }
  
  return (
    <ModalComponent
      show={!!eventInfo}
      cancelCallback={(closeModal)}
      modalWidth={665}
    >
      <h4>
        {eventInfo.serviceReservationId === 0 ? 'Agregar' : 'Actualizar'} una Reservacion
      </h4>

      <Formik
        initialValues={InitialValues(eventInfo)}
        // enableReinitialize={true}
        validationSchema={Yup.object({
            serviceSubtype: Yup.string(),
            serviceId: Yup.string().required(required),
            serviceStatusId: Yup.string().required(required),
            startDate: Yup.string(),
            endDate: Yup.string(),
            clients: Yup.array().of(Yup.object()),
            clientNotes: Yup.string(),
            staffNotes: Yup.string(),
            areThereChildren: Yup.boolean(),
          })
        }
        onSubmit={onHandleSubmit}
      >
        {(fProps: FormikProps<any>) => {
          const { isSubmitting, isValid, dirty } = fProps;
          return (
            <Form>
              <SectionHeaderComponent size={18} name="Tiempo de la Reservacion" color={primaryColor.p1}/>

              <div className={classes.inlineInputs}>
                <Input labelName="Fecha" name="reservationDate" attr={{ disabled: true }} {...fProps} />
                <Input labelName="Hora de Inicio" name="startDate" attr={{ disabled: true }} {...fProps} />
                <Input labelName="Hora de Salida" name="endDate" attr={{ disabled: true }} {...fProps} />
              </div>

              <SectionHeaderComponent size={18} name="Que tipo de Servicio" color={primaryColor.p1}/>

              <div className={classes.inlineInputs}>
                <Dropdown
                  labelName="Servicios"
                  name="serviceId"
                  options={gct.services}
                  {...fProps}
                />
                <Input labelName="Subtipo del servicio" name="serviceSubtype" {...fProps} />
                <Dropdown
                  labelName="Estado del Servicio"
                  name="serviceStatusId"
                  options={gct.serviceStatuses}
                  {...fProps}
                />
              </div>

              <SectionHeaderComponent size={18} name="Clientes que van a asistir" color={primaryColor.p1}/>

              <AsyncSelect
                name="clients"
                isMulti
                cacheOptions
                onChange={(option) => {
                  fProps.setFieldValue('clients', option)
                }}
                value={fProps.values.clients}
                loadOptions={loadOptions}
              />
              
              <SectionHeaderComponent size={18} name="Notas y Otros" color={primaryColor.p1}/>

              <Input
                labelName="Notas del Cliente"
                name="clientNotes"
                component="textarea"
                classes={{inputClass: classes.textAreaInput }}
                attr={textareaAttr}
                {...fProps}
              />
              <Input
                labelName="Notas del Staff"
                name="staffNotes"
                component="textarea"
                classes={{inputClass: classes.textAreaInput }}
                attr={textareaAttr}
                {...fProps}
              />
              <Input
                labelName="Van a asistir niños"
                name="areThereChildren"
                type="checkbox"
                classes={{wrapperClass: classes.checkbox, labelClass: classes.checkboxLabel}}
                {...fProps}
              />
              
              <div className={classes.buttonContainer}>
                <Button
                  buttonType={buttonTypes.BT1}
                  text="Borrar"
                  onClick={onDelete}
                  className={classes.saveButton}
                />
                <Button
                  buttonType={buttonTypes.BT2}
                  type="submit"
                  text={eventInfo.serviceReservationId === 0 ? 'Guardar' : 'Actualizar'}
                  isDisabled={
                    isSubmitting || !(isValid && dirty)
                  }
                  className={classes.saveButton}
                />
                <Button
                  buttonType={buttonTypes.BT3}
                  text="Cancelar"
                  onClick={closeModal}
                  className={classes.cancelButton}
                />
              </div>
              
            </Form>
          )}
        }
      </Formik>
    </ModalComponent>
  );
};

export default ServiceReservationFormModal;
