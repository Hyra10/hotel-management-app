import React, { FC, ReactElement } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import {
  GetReservationItemByIdQuery, useAddReservationItemMutation,
  useGetReservationItemByIdQuery, useUpdateReservationItemMutation
} from '../../../../generated/graphql'
import useStyles from './reservationItem.modal.style';
import ModalComponent from '../../../../components/Common/Modal/modal.component';
import Input from '../../../../components/Common/Input/input.component';
import SectionHeaderComponent from '../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../components/Common/Button/button.types';
import { formValues } from './reservationItem.modal.types';
import { required, positive, integer } from '../../../../utils/formErrors';
import { primaryColor } from '../../../../utils/styles/colors';
import { forceUpdate } from '../../../../utils/tempReload';

interface Props {
  reservationItemId: number;
  reservationId: number;
  setToggleModal: (n: number) => void;
  OverlayZIndex?: number;
  ModalZIndex?: number;
}

const ReservationItemFormModal: FC<Props> = ({
  reservationItemId,
  reservationId,
  setToggleModal,
  OverlayZIndex,
  ModalZIndex,
}): ReactElement => {
  const classes = useStyles();
  const { data } = useGetReservationItemByIdQuery({ variables: { reservationItemId }});
  const [ createReservationItem ] = useAddReservationItemMutation();
  const [ updateReservationItem ] = useUpdateReservationItemMutation();

  const onHandleSubmit = async (values: formValues) => {
    const variables = {
      data: {
        reservationItemId,
        reservationId,
        name: values.name,
        price: values.price,
      }
    };

    if(reservationItemId === 0) {
      await createReservationItem({ variables, update: forceUpdate })
    } else  {
      await updateReservationItem({ variables, update: forceUpdate });
    }

    setToggleModal(-1);
  }

  const initialValues = (payload: GetReservationItemByIdQuery | undefined): formValues => {
    let initialData = {};

    if(payload?.getReservationItemById) {
      const {
        name,
        price
      } = payload.getReservationItemById;

      initialData = {
        name,
        price,
      };
    }

    return {
      name: '',
      price: 0,
      ...initialData
    }
  }
  
  return (
    <ModalComponent
      show={reservationItemId !== -1}
      cancelCallback={() => setToggleModal(-1)}
      modalWidth={665}
      OverlayZIndex={OverlayZIndex}
      ModalZIndex={ModalZIndex}
    >
      <h4>{reservationItemId === 0 ? 'Agregar' : 'Actualizar'} Item Extra</h4>

      <Formik
        initialValues={initialValues(data)}
        enableReinitialize={true}
        validationSchema={Yup.object({
            name: Yup.string().required(required),
            price: Yup.number().typeError(integer).positive(positive)
              .integer(integer).required(required),
          })
        }
        onSubmit={onHandleSubmit}
      >
        {(fProps: FormikProps<any>) => {
          const { isSubmitting, isValid, dirty } = fProps;
          return (
            <Form>
              <SectionHeaderComponent size={18} name="Informacion" color={primaryColor.p1}/>

              <Input labelName="Nombre" name="name" {...fProps} />
              <Input labelName="Precio" name="price" type="number" {...fProps} />

              <div className={classes.buttonContainer}>
                <Button
                  buttonType={buttonTypes.BT1}
                  type="submit"
                  text={reservationItemId === 0 ? 'Guardar' : 'Actualizar'}
                  isDisabled={
                    isSubmitting || !(isValid && dirty)
                  }
                  className={classes.saveButton}
                />
                <Button
                  buttonType={buttonTypes.BT3}
                  text="Cancelar"
                  onClick={() => setToggleModal(-1)}
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

export default ReservationItemFormModal;
