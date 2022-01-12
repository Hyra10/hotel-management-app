import React, { FC, ReactElement } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import {
  GetServiceByIdQuery, useAddServiceMutation,
  useGetServiceByIdQuery, useUpdateServiceMutation
} from '../../../generated/graphql'
import useStyles from './service.modal.style';
import ModalComponent from '../../../components/Common/Modal/modal.component';
import Input from '../../../components/Common/Input/input.component';
import SectionHeaderComponent from '../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../components/Common/Button/button.types';
import { formValues } from './service.modal.types';
import { required } from '../../../utils/formErrors';
import { primaryColor } from '../../../utils/styles/colors';
import { Usegct } from '../../Context/useGlobalContext';
import { forceUpdate } from '../../../utils/tempReload';

const textareaAttr = { maxLength:'150', rows: 2 };

interface Props {
  serviceId: number;
  setToggleModal: Function;
  toggleModal: boolean;
}

const ServiceFormModal: FC<Props> = ({
  serviceId,
  setToggleModal,
  toggleModal
}): ReactElement => {
  const classes = useStyles();
  const { chosenHotelId: hotelId } = Usegct();
  const { data } = useGetServiceByIdQuery({ variables: { serviceId }});
  const [ createService ] = useAddServiceMutation();
  const [ updateService ] = useUpdateServiceMutation();

  const closeModal = () => setToggleModal(false);

  const onHandleSubmit = async (values: formValues) => {
    const variables = {
      data: {
        serviceId: +values.serviceId,
        name: values.name,
        observation: values.observation,
        hotelId,
      }
    };

    if(values.serviceId === 0) {
      await createService({ variables, update: forceUpdate })
    } else  {
      await updateService({ variables, update: forceUpdate });
    }

    setToggleModal(false);
  }

  const initialValues = (payload: GetServiceByIdQuery | undefined): formValues => {
    let serviceData = {};

    if(payload?.getServiceById) {
      const {
        name,
        observation
      } = payload.getServiceById;

      serviceData = {
        serviceId,
        name,
        observation,
      };
    }

    return {
      serviceId: 0,
      name: '',
      observation: '',
      ...serviceData
    }
  }
  
  return (
    <ModalComponent
      show={toggleModal}
      cancelCallback={(closeModal)}
      modalWidth={665}
    >
      <h4>{serviceId === 0 ? 'Agregar' : 'Actualizar'} Servicio</h4>

      <Formik
        initialValues={initialValues(data)}
        enableReinitialize={true}
        validationSchema={Yup.object({
            name: Yup.string().required(required),
            observation: Yup.string().required(required),
          })
        }
        onSubmit={onHandleSubmit}
      >
        {(fProps: FormikProps<any>) => {
          const { isSubmitting, isValid, dirty } = fProps;
          return (
            <Form>
              <SectionHeaderComponent size={18} name="Informacion" color={primaryColor.p1}/>

              <Input labelName="Nombre del Servicio" name="name" {...fProps} />
              <Input
                labelName="Observaciones"
                name="observation"
                component="textarea"
                classes={{inputClass: classes.textAreaInput }}
                attr={textareaAttr}
                {...fProps}
              />

              <div className={classes.buttonContainer}>
                <Button
                  buttonType={buttonTypes.BT1}
                  type="submit"
                  text={serviceId === 0 ? 'Guardar' : "Actualizar"}
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

export default ServiceFormModal;
