import React, { FC, useState } from 'react';
import { useDeleteUserMutation, GetAllUsersQuery, GetAllUsersDocument,
  useGetAllUsersQuery, useResetPasswordMutation } from '../../../../generated/graphql'
import LoadingComponent from '../../../../components/Loading/loading.component';
import useStyles from '../table.style';
import SectionHeaderComponent from '../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../components/Common/Button/button.types';
import UserFormModal from './UserModal/user.modal';
import { UserRolesEnum } from '../../../Context/AuthContext/authContext.type';
import { UseAuth } from '../../../Context/AuthContext/useAuthContext';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';
import { forceUpdate } from '../../../../utils/tempReload';


const UserComponent: FC = () => {
  const classes = useStyles();
  const { userData } = UseAuth();
  const { data, loading } = useGetAllUsersQuery();
  const [ dltUser ] = useDeleteUserMutation();
  const [ resetPsw ] = useResetPasswordMutation();
  const [toggleModal, setToggleModal] = useState(false);
  const [userId, setUserId] = useState(0);

  if (loading || !data) {
    return <LoadingComponent />
  }

  const openModal = (cId: number) => {
    setToggleModal(true);
    setUserId(cId);
  }

  const deleteUser = async (uId: number) => {
    await dltUser({variables: { userId: uId }, update: forceUpdate});
  }

  const passwordReset = (uId: number) => {
    resetPsw({ variables: { userId: uId }, update: forceUpdate })
  }

  return (
    <>
      { toggleModal &&
        <UserFormModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          userId={userId}
        />
      }

      <SectionHeaderComponent name={
        userData.userRoleId === UserRolesEnum.PROFESOR ?
        'Estudiantes' :
        'Profesores'
      }/>

      <div className={classes.buttonContainer}>
        <Button
          text="Crear Nuevo Usuario"
          buttonType={buttonTypes.BT1}
          onClick={() => openModal(0)}
        />
      </div>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Nombre de Usuario</th>
              <th>Correo</th>
              <th style={{textAlign: 'center'}}>¿Contraseña Nueva?</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllUsers.map(x =>
              <tr key={x.userId}>
                <td>{x.userName}</td>
                <td>{x.email}</td>
                <td style={{textAlign: 'center'}}>
                  { 
                    x.needsNewPassword ?
                    <FiCheckCircle size={20}/> :
                    <FiCircle size={20}/>
                  }
                </td>
                <td>
                  {x.needsNewPassword &&
                    <Button
                      text="Reiniciar contraseña"
                      buttonType={buttonTypes.BT1}
                      onClick={() => passwordReset(+x.userId)}
                      className={classes.passwordReset}
                    />
                  }
                  <Button
                    text="Editar"
                    buttonType={buttonTypes.BT2}
                    onClick={() => openModal(+x.userId)}
                    className={classes.editButton}
                  />
                  <Button
                    text="Borrar"
                    buttonType={buttonTypes.BT3}
                    onClick={() => deleteUser(+x.userId)}
                    className={classes.deleteButton}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  </>
  );
};

export default UserComponent;
