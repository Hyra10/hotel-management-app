import React, { FC, ReactElement } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import {
  GetClientByIdQuery, useGetClientByIdQuery, useAddClientMutation,
  useUpdateClientMutation, ClientInput
} from '../../../generated/graphql'
import useStyles from './client.modal.styles';
import ModalComponent from '../../../components/Common/Modal/modal.component';
import Input from '../../../components/Common/Input/input.component';
import SectionHeaderComponent from '../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../components/Common/Button/button.types';
import { formValues } from './client.modal.types';
import { required, max } from '../../../utils/formErrors';
import { primaryColor } from '../../../utils/styles/colors';
import { Usegct } from '../../Context/useGlobalContext';
import { forceUpdate } from '../../../utils/tempReload';

interface Props {
  clientId: number;
  setToggleModal: Function;
  toggleModal: boolean;
  OverlayZIndex?: number;
  ModalZIndex?: number;
  onNewClientAdded?: (data: number) => void;
}

const ClientFormModal: FC<Props> = ({
  clientId,
  setToggleModal,
  toggleModal,
  OverlayZIndex,
  ModalZIndex,
  onNewClientAdded,
}): ReactElement => {
  const classes = useStyles();
  const { chosenHotelId: hotelId } = Usegct();
  const { data } = useGetClientByIdQuery({ variables: { clientId } });
  const [ createClient ] = useAddClientMutation();
  const [ updateClient ] = useUpdateClientMutation();
  const textareaAttr = { maxLength:'150', rows: 2 };
  const closeModal = () => setToggleModal(false);
  const onHandleSubmit = async (values: formValues) => {

    const variables = {
      data: {
        clientId: +values.clientId,
        age: values.age,
        cedula: values.cedula,
        firstSurname: values.firstSurname,
        name: values.name,
        phoneNumber: values.phoneNumber,
        secondSurname: values.secondSurname,
        nationality: values.nationality,
        observation: values.observation,
        isLactoseIntolerant: values.isLactoseIntolerant,
        alergic: values.alergic,
        disability: values.disability,
        cardName: values.cardName,
        creditCardNumber: values.creditCardNumber,
        cvc: values.cvc,
        expiredDate: moment(values.expiredDate).toDate(),
        hotelId
      } as ClientInput
    } 

    if(values.clientId !== 0) {
      await updateClient({ variables, update: forceUpdate })
    } else  {
      const { data: newClientData } = await createClient({ variables, update: forceUpdate });
      const newClientId = newClientData?.addClient.clientId || 0
      onNewClientAdded?.(+newClientId);
    }

    setToggleModal(false);
  }
  

  const initialValues = (payload: GetClientByIdQuery | undefined): formValues => {
    let data = {};

    if(payload?.getClientById) {

      data = {
        ...payload.getClientById,
        clientId: +clientId,
        isAlergic: !!payload.getClientById.alergic,
        hasAnyDisability: !!payload.getClientById.disability,
      };
    }

    return {
      clientId: 0,
      name:  '',
      firstSurname: '',
      secondSurname: '',
      cedula: '',
      age: 0,
      phoneNumber: '',
      nationality: '',
      observation: '',
      hasAnyDisability: false,
      disability: '',
      isAlergic: false,
      alergic: '',
      isLactoseIntolerant: false,
      creditCardNumber: '',
      cvc: '',
      expiredDate: '',
      cardName: '',
      ...data
    }
  }
  
  return (
    <ModalComponent
      show={toggleModal}
      cancelCallback={(closeModal)}
      OverlayZIndex={OverlayZIndex}
      ModalZIndex={ModalZIndex}
    >
      <h4>{clientId === 0 ? 'Agregar' : 'Actualizar'} Cliente</h4>

      <Formik
        initialValues={initialValues(data)}
        enableReinitialize={true}
        validationSchema={Yup.object({
            name: Yup.string()
              .max(20, max(20)).required(required),
            firstSurname: Yup.string()
              .max(20, max(20)).required(required),
            secondSurname: Yup.string()
              .max(20, max(20)).required(required),
            cedula: Yup.string()
              .max(20, max(20)).required(required),
            age: Yup.number()
              .min(0, 'Edad no puede ser menor a 0')
              .max(100, 'Edad no puede ser mayor a 100')
              .required(required).integer(),
            phoneNumber: Yup.string()
              .min(8, 'Minimo 8 caracteres')
              .max(20, max(20)).required(required),
            nationality: Yup.string()
              .max(20, max(20)).required(required),
            disability: Yup.string().when('hasAnyDisability', {
              is: true,
              then: Yup.string().max(150, max(150)).required(required),
              otherwise: Yup.string(),
            }),
            alergic: Yup.string().when('isAlergic', {
              is: true,
              then: Yup.string().max(150, max(150)).required(required),
              otherwise: Yup.string(),
            }),
          })
        }
        onSubmit={onHandleSubmit}
      >
        {(fProps: FormikProps<any>) => {

          const {
            values, isSubmitting, isValid, dirty,
          } = fProps;

          return (
            <Form>
              <SectionHeaderComponent size={18} name="Informacion del Cliente" color={primaryColor.p1}/>
              <div className={classes.inlineInputs}>
                <Input labelName="Nombre" name="name" {...fProps} />
                <Input labelName="Primer Apellido" name="firstSurname" {...fProps} />
                <Input labelName="Segundo Apellido" name="secondSurname" {...fProps} />
              </div>
              <div className={classes.inlineInputs}>
                <Input name="cedula" {...fProps} />
                <Input
                  labelName="Edad"
                  name="age"
                  type="number"
                  classes={{ wrapperClass: classes.clientAgeInput }}
                  {...fProps}
                />
                <Input
                  labelName="telefono"
                  name="phoneNumber"
                  classes={{ wrapperClass: classes.clientPhoneInput }}
                  {...fProps}
                />
              <Input labelName="Nacionalidad" name="nationality" {...fProps} />
              </div>

              <SectionHeaderComponent size={18} name="Informacion extra del cliente" color={primaryColor.p1}/>
              <Input
                labelName="Observaciones"
                name="observation"
                component="textarea"
                classes={{inputClass: classes.textAreaInput }}
                attr={textareaAttr}
                {...fProps}
              />
              <Input
                labelName="Tiene alguna discapacidad?"
                name="hasAnyDisability"
                type="checkbox"
                classes={{wrapperClass: classes.checkbox, labelClass: classes.checkboxLabel}}
                {...fProps}
              />
              {
                values.hasAnyDisability &&
                <Input
                  labelName="Que tipo de discapacidades tiene?"
                  name="disability"
                  component="textarea"
                  classes={{inputClass: classes.textAreaInput }}
                  attr={textareaAttr}
                  {...fProps}
                />
              }
              <Input
                labelName="Tiene algun tipo de alergia?"
                name="isAlergic"
                type="checkbox"
                classes={{wrapperClass: classes.checkbox, labelClass: classes.checkboxLabel}}
                {...fProps}
              />
              {
                values.isAlergic &&
                <Input
                  labelName="Que tipo de alergias tiene?"
                  name="alergic"
                  component="textarea"
                  classes={{inputClass: classes.textAreaInput }}
                  attr={textareaAttr}
                  {...fProps}
                />
              }

              <Input
                labelName="Es Intolerante a la lactosa?"
                name="isLactoseIntolerant"
                type="checkbox"
                classes={{wrapperClass: classes.checkbox, labelClass: classes.checkboxLabel}}
                {...fProps}
              />

              <SectionHeaderComponent size={18} name="Tarjeta de Credito" color={primaryColor.p1}/>

              <div>
                <div className={classes.inlineInputs}>
                  <Input
                    labelName="Numero de Tarjeta"
                    name="creditCardNumber"
                    classes={{ wrapperClass: classes.ccNumberInput }}
                    {...fProps}
                  />
                  <Input
                    labelName="cvc"
                    name="cvc"
                    classes={{ wrapperClass: classes.ccCvcInput }}
                    {...fProps}
                  />
                  <Input
                    labelName="Fecha de Expiracion"
                    name="expiredDate"
                    classes={{ wrapperClass: classes.ccDateInput }}
                    {...fProps}
                  />
                </div>
                <Input labelName="Nombre en la Tarjeta" name="cardName" {...fProps} />
              </div>

              <div className={classes.buttonContainer}>
                <Button
                  buttonType={buttonTypes.BT1}
                  type="submit"
                  text={clientId === 0 ? 'Guardar' : "Actualizar"}
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

export default ClientFormModal;
