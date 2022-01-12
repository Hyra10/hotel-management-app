import React, { FC, ReactElement } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import { GetRoomStatusByIdQuery, useAddRoomStatusMutation, useGetRoomStatusByIdQuery, useUpdateRoomStatusMutation } from '../../../../../generated/graphql'
import useStyles from '../../modal.style';
import ModalComponent from '../../../../../components/Common/Modal/modal.component';
import Input from '../../../../../components/Common/Input/input.component';
import SectionHeaderComponent from '../../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../../components/Common/Button/button.types';
import { formValues } from './roomStatus.modal.types';
import { required, max } from '../../../../../utils/formErrors';
import { primaryColor } from '../../../../../utils/styles/colors';
import { forceUpdate } from '../../../../../utils/tempReload';

const textareaAttr = { maxLength:'150', rows: 2 };

interface Props {
  roomStatusId: number;
  setToggleModal: Function;
  toggleModal: boolean;
}

const RoomStatusFormModal: FC<Props> = ({
  roomStatusId,
  setToggleModal,
  toggleModal
}): ReactElement => {
  const classes = useStyles();
  const { data } = useGetRoomStatusByIdQuery({ variables: { roomStatusId }});
  const [ createRoomStatus ] = useAddRoomStatusMutation();
  const [ updateRoomStatus ] = useUpdateRoomStatusMutation();

  const closeModal = () => setToggleModal(false);

  const onHandleSubmit = async (values: formValues) => {
    const variables = {
      data: {
        roomStatusId: +values.roomStatusId,
        name: values.name,
        abbr: values.abbr,
        description: values.description,
        color: values.color 
      }
    };

    if(values.roomStatusId === 0) {
      await createRoomStatus({ variables, update: forceUpdate })
    } else  {
      await updateRoomStatus({ variables, update: forceUpdate });
    }

    setToggleModal(false);
  }

  const initialValues = (payload: GetRoomStatusByIdQuery | undefined): formValues => {
    let data = {};

    if(payload?.getRoomStatusById) {
      const {
        roomStatusId,
        name,
        abbr,
        description,
        color,
      } = payload.getRoomStatusById;

      data = {
        roomStatusId,
        name,
        abbr,
        description: description || '',
        color,
      };
    }

    return {
      roomStatusId: 0,
      name: '',
      abbr: '',
      description: '',
      color: '',
      ...data
    }
  }
  
  return (
    <ModalComponent
      show={toggleModal}
      cancelCallback={(closeModal)}
      modalWidth={665}
    >
      <h4>{roomStatusId === 0 ? 'Agregar' : 'Actualizar'} Estado de Cuartos</h4>

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
              <SectionHeaderComponent size={18} name="Información" color={primaryColor.p1}/>

              <Input labelName="Nombre de Estado del Cuarto" name="name" {...fProps} />
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
                  text={roomStatusId === 0 ? 'Guardar' : "Actualizar"}
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

export default RoomStatusFormModal;
