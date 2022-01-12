import React, { FC, ReactElement } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import { GetHotelByIdQuery, useAddHotelMutation, useGetHotelByIdQuery, useUpdateHotelMutation } from '../../../../../generated/graphql'
import useStyles from '../../modal.style';
import ModalComponent from '../../../../../components/Common/Modal/modal.component';
import Input from '../../../../../components/Common/Input/input.component';
import SectionHeaderComponent from '../../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../../components/Common/Button/button.types';
import { formValues } from './hotel.modal.type';
import { required } from '../../../../../utils/formErrors';
import { primaryColor } from '../../../../../utils/styles/colors';
import { forceUpdate } from '../../../../../utils/tempReload';

const textareaAttr = { maxLength:'150', rows: 2 };

interface Props {
  hotelId: number;
  setToggleModal: Function;
  toggleModal: boolean;
}

const HotelFormModal: FC<Props> = ({
  hotelId,
  setToggleModal,
  toggleModal
}): ReactElement => {
  const classes = useStyles();
  const { data } = useGetHotelByIdQuery({ variables: { hotelId }});
  const [ createHotel ] = useAddHotelMutation();
  const [ updateHotel ] = useUpdateHotelMutation();

  const closeModal = () => setToggleModal(false);

  const onHandleSubmit = async (values: formValues) => {
    const variables = {
      data: {
        hotelId: +values.hotelId,
        name: values.name,
        description: values.description
      }
    };

    if(values.hotelId === 0) {
      await createHotel({ variables, update: forceUpdate})
    } else  {
      await updateHotel({ variables, update: forceUpdate});
    }

    setToggleModal(false);
  }

  const initialValues = (payload: GetHotelByIdQuery | undefined): formValues => {
    let data = {};

    if(payload?.getHotelById) {
      const {
        hotelId,
        name,
        description
      } = payload.getHotelById;

      data = {
        hotelId,
        name,
        description: description || ''
      };
    }

    return {
      hotelId: 0,
      name: '',
      description: '',
      ...data
    }
  }
  
  return (
    <ModalComponent
      show={toggleModal}
      cancelCallback={(closeModal)}
      modalWidth={665}
    >
      <h4>{hotelId === 0 ? 'Agregar' : 'Actualizar'} Hotel</h4>

      <Formik
        initialValues={initialValues(data)}
        enableReinitialize={true}
        validationSchema={Yup.object({
            name: Yup.string().required(required),
            description: Yup.string(),
          })
        }
        onSubmit={onHandleSubmit}
      >
        {(fProps: FormikProps<any>) => {
          const { isSubmitting, isValid, dirty } = fProps;
          return (
            <Form>
              <SectionHeaderComponent size={18} name="Informacion" color={primaryColor.p1}/>

              <Input labelName="Nombre de Hotel" name="name" {...fProps} />
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
                  text={hotelId === 0 ? 'Guardar' : "Actualizar"}
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

export default HotelFormModal;
