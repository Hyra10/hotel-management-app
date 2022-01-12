import React, { FC, useState } from 'react';
import { useDeleteReservationStatusMutation, useGetAllReservationStatusesQuery } from '../../../../generated/graphql'
import LoadingComponent from '../../../../components/Loading/loading.component';
import useStyles from '../table.style';
import SectionHeaderComponent from '../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../components/Common/Button/button.types';
import ReservationStatusFormModal from './ReservationStatusModal/reservationStatus.modal';
import { forceUpdate } from '../../../../utils/tempReload';

const ReservationStatusComponent: FC = () => {
  const { data, loading } = useGetAllReservationStatusesQuery();
  const [ dltReservationStatus ] = useDeleteReservationStatusMutation();
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useState(false);
  const [reservationStatusId, setReservationStatusId] = useState(0);

  if (loading || !data) {
    return <LoadingComponent />
  }

  const openModal = (cId: number) => {
    setToggleModal(true);
    setReservationStatusId(cId);
  }

  const deleteReservationStatus = async (rId: number) => {
    await dltReservationStatus({variables: { reservationStatusId: rId }, update: forceUpdate});
  }

  return (
    <>
      { toggleModal &&
        <ReservationStatusFormModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          reservationStatusId={reservationStatusId}
        />
      }

      <SectionHeaderComponent name="Estado de Reserva"/>

      <div className={classes.buttonContainer}>
        <Button
          text="Crear Nuevo Estado de Reserva"
          buttonType={buttonTypes.BT1}
          onClick={() => openModal(0)}
        />
      </div>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Nombre de Estado de Reservación</th>
              <th>Abreviatura</th>
              <th>Descripción</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllReservationStatuses.map(x =>
              <tr key={x.reservationStatusId}>
                <td>{x.name}</td>
                <td>{x.abbr}</td>
                <td>{x.description}</td>
                <td>
                  <Button
                    text="Editar"
                    buttonType={buttonTypes.BT2}
                    onClick={() => openModal(+x.reservationStatusId)}
                    className={classes.editButton}
                  />
                  <Button
                    text="Borrar"
                    buttonType={buttonTypes.BT3}
                    onClick={() => deleteReservationStatus(+x.reservationStatusId)}
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

export default ReservationStatusComponent;
