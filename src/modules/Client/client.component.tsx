import React, { FC, useState } from 'react';
import { useDeleteClientMutation, useGetAllClientsQuery } from '../../generated/graphql'
import LoadingComponent from '../../components/Loading/loading.component';
import useStyles from './client.style';
import SectionHeaderComponent from '../../components/SectionHeader/sectionHeader.component';
import Button from '../../components/Common/Button/button.component';
import { buttonTypes } from '../../components/Common/Button/button.types';
import ClientFormModal from './ClientModal/client.modal';
import { Usegct } from '../Context/useGlobalContext';

const ClientComponent: FC = () => {
  const { chosenHotelId: hotelId } = Usegct();
  const { data, loading } = useGetAllClientsQuery({ variables: { hotelId }});
  const [ deleteClt ] = useDeleteClientMutation();
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useState(false);
  const [clientId, setClientId] = useState(0);

  if (loading || !data) {
    return <LoadingComponent />
  }

  const openModal = (cId: number) => {
    setToggleModal(true);
    setClientId(cId);
  }

  const deleteClient = async (cId: number) => {
    await deleteClt({variables: { clientId: cId }});
  }

  return (
    <>
      { toggleModal &&
        <ClientFormModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          clientId={clientId}
        />
      }

      <SectionHeaderComponent name="Clientes"/>

      <div className={classes.buttonContainer}>
        <Button
          text="Crear Nuevo Cliente"
          buttonType={buttonTypes.BT1}
          onClick={() => openModal(0)}
        />
      </div>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Cedula</th>
              <th>Nombre</th>
              <th>Primer Apellido</th>
              <th>Segundo Apellido</th>
              <th>Numero de Telefono</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllClients.map(x =>
              <tr key={x.cedula}>
                <td>{x.cedula}</td>
                <td>{x.name}</td>
                <td>{x.firstSurname}</td>
                <td>{x.secondSurname}</td>
                <td>{x.phoneNumber}</td>
                <td>
                  <Button
                    text="Editar"
                    buttonType={buttonTypes.BT2}
                    onClick={() => openModal(+x.clientId)}
                    className={classes.editButton}
                  />
                  <Button
                    text="Borrar"
                    buttonType={buttonTypes.BT3}
                    onClick={() => deleteClient(+x.clientId)}
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

export default ClientComponent;
