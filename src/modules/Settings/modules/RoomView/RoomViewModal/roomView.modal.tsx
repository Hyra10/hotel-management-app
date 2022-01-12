import React, { FC, ReactElement } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import { GetRoomViewByIdQuery, useAddRoomViewMutation, useGetRoomViewByIdQuery, useUpdateRoomViewMutation } from '../../../../../generated/graphql'
import useStyles from './roomView.modal.style';
import ModalComponent from '../../../../../components/Common/Modal/modal.component';
import Input from '../../../../../components/Common/Input/input.component';
import SectionHeaderComponent from '../../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../../components/Common/Button/button.types';
import { formValues } from './roomView.modal.types';
import { required, max } from '../../../../../utils/formErrors';
import { primaryColor } from '../../../../../utils/styles/colors';
import { forceUpdate } from '../../../../../utils/tempReload';

const textareaAttr = { maxLength:'150', rows: 2 };

interface Props {
  roomViewId: number;
  setToggleModal: Function;
  toggleModal: boolean;
}

const RoomViewFormModal: FC<Props> = ({
  roomViewId,
  setToggleModal,
  toggleModal
}): ReactElement => {
  const classes = useStyles();
  const { data } = useGetRoomViewByIdQuery({ variables: { roomViewId }});
  const [ createRoomView ] = useAddRoomViewMutation();
  const [ updateRoomView ] = useUpdateRoomViewMutation();

  const closeModal = () => setToggleModal(false);

  const onHandleSubmit = async (values: formValues) => {
    const variables = {
      data: {
        roomViewId: +values.roomViewId,
        name: values.name,
        abbr: values.abbr,
        description: values.description
      }
    };

    if(values.roomViewId === 0) {
      await createRoomView({ variables, update: forceUpdate })
    } else  {
      await updateRoomView({ variables, update: forceUpdate });
    }

    setToggleModal(false);
  }

  const initialValues = (payload: GetRoomViewByIdQuery | undefined): formValues => {
    let roomViewInitialData = {};

    if(payload?.getRoomViewById) {
      const {
        name,
        abbr,
        description
      } = payload.getRoomViewById;

      roomViewInitialData = {
        roomViewId,
        name,
        abbr,
        description: description || '',
      };
    }

    return {
      roomViewId: 0,
      name: '',
      abbr: '',
      description: '',
      ...roomViewInitialData
    }
  }
  
  return (
    <ModalComponent
      show={toggleModal}
      cancelCallback={(closeModal)}
      modalWidth={665}
    >
      <h4>{roomViewId === 0 ? 'Agregar' : 'Actualizar'} Vista Cuartos</h4>

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

              <Input labelName="Nombre de Vista de Cuarto" name="name" {...fProps} />
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
                  text={roomViewId === 0 ? 'Guardar' : "Actualizar"}
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

export default RoomViewFormModal;
