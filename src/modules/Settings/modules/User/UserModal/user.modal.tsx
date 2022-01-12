import React, { FC, ReactElement } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import { GetUserByIdQuery, useAddUserMutation,
  useGetUserByIdQuery, useUpdateUserMutation } from '../../../../../generated/graphql'
import useStyles from '../../modal.style';
import ModalComponent from '../../../../../components/Common/Modal/modal.component';
import Input from '../../../../../components/Common/Input/input.component';
import SectionHeaderComponent from '../../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../../components/Common/Button/button.types';
import { formValues } from './user.modal.type';
import { required, max } from '../../../../../utils/formErrors';
import { primaryColor } from '../../../../../utils/styles/colors';
import { UseAuth } from '../../../../Context/AuthContext/useAuthContext';
import { UserRolesEnum } from '../../../../Context/AuthContext/authContext.type';
import { forceUpdate } from '../../../../../utils/tempReload';


interface Props {
  userId: number;
  setToggleModal: Function;
  toggleModal: boolean;
}

const UserFormModal: FC<Props> = ({
  userId,
  setToggleModal,
  toggleModal
}): ReactElement => {
  const classes = useStyles();
  const useAuth = UseAuth();
  const { data } = useGetUserByIdQuery({ variables: { userId }});
  const [ createUser ] = useAddUserMutation();
  const [ updateUser ] = useUpdateUserMutation();

  const closeModal = () => setToggleModal(false);

  const onHandleSubmit = async (values: formValues) => {
    const userRoleId = useAuth.userData.userRoleId === UserRolesEnum.PROFESOR ?
    UserRolesEnum.STUDENT :
    UserRolesEnum.PROFESOR;

    const variables = {
      data: {
        userId: +values.userId,
        userName: values.userName,
        email: values.email,
        userRoleId,
      }
    };

    if(values.userId === 0) {
      await createUser({ variables, update: forceUpdate })
    } else  {
      await updateUser({ variables, update: forceUpdate });
    }

    setToggleModal(false);
  }

  const initialValues = (payload: GetUserByIdQuery | undefined): formValues => {
    let InitialuserData = {};

    if(payload?.getUserById) {
      const {
        userName,
        email,
      } = payload.getUserById;

      InitialuserData = {
        userId,
        userName,
        email,
      };
    }

    return {
      userId: 0,
      userName: '',
      email: '',
      ...InitialuserData
    }
  }
  
  return (
    <ModalComponent
      show={toggleModal}
      cancelCallback={(closeModal)}
      modalWidth={665}
    >
      <h4>{userId === 0 ? 'Agregar' : 'Actualizar'} Usuario</h4>

      <Formik
        initialValues={initialValues(data)}
        enableReinitialize={true}
        validationSchema={Yup.object({
            userName: Yup.string().required(required).max(15, max(15)),
            email: Yup.string().email('Correo electronico invalido').required(required),
          })
        }
        onSubmit={onHandleSubmit}
      >
        {(fProps: FormikProps<any>) => {
          const { isSubmitting, isValid, dirty } = fProps;
          return (
            <Form>
              <SectionHeaderComponent size={18} name="Información" color={primaryColor.p1}/>

              <Input labelName="Nombre de Usuario" name="userName" {...fProps} />
              <Input labelName="Correo electronico" name="email" {...fProps} />

              <div className={classes.buttonContainer}>
                <Button
                  buttonType={buttonTypes.BT1}
                  type="submit"
                  text={userId === 0 ? 'Guardar' : "Actualizar"}
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

export default UserFormModal;
