import React, { FC, ReactElement } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import { GetReservationStatusByIdQuery, useAddReservationStatusMutation, useGetReservationStatusByIdQuery, useUpdateReservationStatusMutation } from '../../../../../generated/graphql'
import useStyles from '../../modal.style';
import ModalComponent from '../../../../../components/Common/Modal/modal.component';
import Input from '../../../../../components/Common/Input/input.component';
import SectionHeaderComponent from '../../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../../components/Common/Button/button.types';
import { formValues } from './reservationStatus.modal.type';
import { required, max } from '../../../../../utils/formErrors';
import { primaryColor } from '../../../../../utils/styles/colors';
import { forceUpdate } from '../../../../../utils/tempReload';

const textareaAttr = { maxLength:'150', rows: 2 };

interface Props {
  reservationStatusId: number;
  setToggleModal: Function;
  toggleModal: boolean;
}

const ReservationStatusFormModal: FC<Props> = ({
  reservationStatusId,
  setToggleModal,
  toggleModal
}): ReactElement => {
  const classes = useStyles();
  const { data } = useGetReservationStatusByIdQuery({ variables: { reservationStatusId }});
  const [ createReservationStatus ] = useAddReservationStatusMutation();
  const [ updateReservationStatus ] = useUpdateReservationStatusMutation();

  const closeModal = () => setToggleModal(false);

  const onHandleSubmit = async (values: formValues) => {
    const variables = {
      data: {
        reservationStatusId: +values.reservationStatusId,
        name: values.name,
        abbr: values.abbr,
        description: values.description
      }
    };

    if(values.reservationStatusId === 0) {
      await createReservationStatus({ variables, update: forceUpdate})
    } else  {
      await updateReservationStatus({ variables, update: forceUpdate});
    }

    setToggleModal(false);
  }

  const initialValues = (payload: GetReservationStatusByIdQuery | undefined): formValues => {
    let reservationStatusInitialValues = {};

    if(payload?.getReservationStatusById) {
      const {
        name,
        abbr,
        description
      } = payload.getReservationStatusById;

      reservationStatusInitialValues = {
        reservationStatusId,
        name,
        abbr,
        description: description || ''
      };
    }

    return {
      reservationStatusId: 0,
      name: '',
      abbr: '',
      description: '',
      ...reservationStatusInitialValues
    }
  }
  
  return (
    <ModalComponent
      show={toggleModal}
      cancelCallback={(closeModal)}
      modalWidth={665}
    >
      <h4>{reservationStatusId === 0 ? 'Agregar' : 'Actualizar'} Tipo de Cuartos</h4>

      <Formik
        initialValues={initialValues(data)}
        enableReinitialize={true}
        validationSchema={Yup.object({
            name: Yup.string().max(50, max(50)).required(required),
            abbr: Yup.string().max(10, max(10)).required(required),
            description: Yup.string().max(150, max(150)),
          })
        }
        onSubmit={onHandleSubmit}
      >
        {(fProps: FormikProps<any>) => {
          const { isSubmitting, isValid, dirty } = fProps;
          return (
            <Form>
              <SectionHeaderComponent size={18} name="Informacion" color={primaryColor.p1}/>

              <Input labelName="Nombre de Estado de Servicio" name="name" {...fProps} />
              <Input labelName="Abreviatura" name="abbr" {...fProps}/>
              <Input
                labelName="Descripción"
                name="description"
                component="textarea"
                classes={{inputClass: classes.textAreaInput }}
                attr={textareaAttr}
                {...fProps}
              />

              <div className={classes.buttonContainer}>
                <Button
                  buttonType={buttonTypes.BT1}
                  type="submit"
                  text={reservationStatusId === 0 ? 'Guardar' : "Actualizar"}
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

export default ReservationStatusFormModal;
