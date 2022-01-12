import React, { FC, ReactElement } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import { GetBedByIdQuery, useAddBedMutation, useGetBedByIdQuery, useUpdateBedMutation } from '../../../../../generated/graphql'
import useStyles from '../../modal.style';
import ModalComponent from '../../../../../components/Common/Modal/modal.component';
import Input from '../../../../../components/Common/Input/input.component';
import SectionHeaderComponent from '../../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../../components/Common/Button/button.types';
import { formValues } from './bed.modal.types';
import { required, max } from '../../../../../utils/formErrors';
import { primaryColor } from '../../../../../utils/styles/colors';
import { forceUpdate } from '../../../../../utils/tempReload';

const textareaAttr = { maxLength:'150', rows: 2 };

interface Props {
  bedId: number;
  setToggleModal: Function;
  toggleModal: boolean;
}

const BedFormModal: FC<Props> = ({
  bedId,
  setToggleModal,
  toggleModal
}): ReactElement => {
  const classes = useStyles();
  const { data } = useGetBedByIdQuery({ variables: { bedId }});
  const [ createBed ] = useAddBedMutation();
  const [ updateBed ] = useUpdateBedMutation();

  const closeModal = () => setToggleModal(false);

  const onHandleSubmit = async (values: formValues) => {
    const variables = {
      data: {
        bedId: +values.bedId,
        name: values.name.trim(),
        abbr: values.abbr.trim(),
        description: values.description.trim(),
      }
    };

    if(values.bedId === 0) {
      await createBed({ variables, update: forceUpdate })
    } else  {
      await updateBed({ variables, update: forceUpdate });
    }

    setToggleModal(false);
  }

  const initialValues = (payload: GetBedByIdQuery | undefined): formValues => {
    let bedInintialData = {};

    if(payload?.getBedById) {
      const {
        name,
        abbr,
        description
      } = payload.getBedById;

      bedInintialData = {
        bedId,
        name,
        abbr,
        description: description || ''
      };
    }

    return {
      bedId: 0,
      name: '',
      abbr: '',
      description: '',
      ...bedInintialData
    }
  }
  
  return (
    <ModalComponent
      show={toggleModal}
      cancelCallback={(closeModal)}
      modalWidth={665}
    >
      <h4>{bedId === 0 ? 'Agregar' : 'Actualizar'} Cama</h4>

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

              <Input labelName="Nombre de la cama" name="name" {...fProps} />
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
                  text={bedId === 0 ? 'Guardar' : "Actualizar"}
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

export default BedFormModal;
