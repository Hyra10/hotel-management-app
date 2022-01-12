import React, { FC, useState } from 'react';
import { useDeleteRoomStatusMutation, useGetAllRoomStatusesQuery} from  '../../../../generated/graphql';
import LoadingComponent from '../../../../components/Loading/loading.component';
import useStyles from '../table.style';
import SectionHeaderComponent from '../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../components/Common/Button/button.types';
import RoomStatusFormModal from './RoomStatusModal/roomStatus.modal';
import { forceUpdate } from '../../../../utils/tempReload';

const RoomStatusComponent: FC = () => {
  const { data, loading } = useGetAllRoomStatusesQuery();
  const [ dltRoomStatus ] = useDeleteRoomStatusMutation();
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useState(false);
  const [roomStatusId, setRoomStatusId] = useState(0);

  if (loading || !data) {
    return <LoadingComponent />
  }

  const openModal = (cId: number) => {
    setToggleModal(true);
    setRoomStatusId(cId);
  }

  const deleteRoomStatus = async (rId: number) => {
    await dltRoomStatus({variables: { roomStatusId: rId }, update: forceUpdate});
  }

  return (
    <>
      { toggleModal &&
        <RoomStatusFormModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          roomStatusId={roomStatusId}
        />
      }

      <SectionHeaderComponent name="Estados de Cuartos"/>

      <div className={classes.buttonContainer}>
        <Button
          text="Crear Nuevo Estado de cuartos"
          buttonType={buttonTypes.BT1}
          onClick={() => openModal(0)}
        />
      </div>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Nombre de Estado de Cuarto</th>
              <th>Abreviatura</th>
              <th>Descripción</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllRoomStatuses.map(x =>
              <tr key={x.roomStatusId}>
                <td>{x.name}</td>
                <td>{x.abbr}</td>
                <td>{x.description}</td>
                <td>
                  <Button
                    text="Editar"
                    buttonType={buttonTypes.BT2}
                    onClick={() => openModal(+x.roomStatusId)}
                    className={classes.editButton}
                  />
                  <Button
                    text="Borrar"
                    buttonType={buttonTypes.BT3}
                    onClick={() => deleteRoomStatus(+x.roomStatusId)}
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

export default RoomStatusComponent;
