import React, { FC, useState } from 'react';
import { useDeleteRoomViewMutation, useGetAllRoomViewQuery } from '../../../../generated/graphql'
import LoadingComponent from '../../../../components/Loading/loading.component';
import useStyles from './roomView.style';
import SectionHeaderComponent from '../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../components/Common/Button/button.types';
import RoomViewFormModal from './RoomViewModal/roomView.modal';
import { forceUpdate } from '../../../../utils/tempReload';

const RoomViewComponent: FC = () => {
  const { data, loading } = useGetAllRoomViewQuery();
  const [ dltRoomView ] = useDeleteRoomViewMutation();
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useState(false);
  const [roomViewId, setRoomViewId] = useState(0);

  if (loading || !data) {
    return <LoadingComponent />
  }

  const openModal = (cId: number) => {
    setToggleModal(true);
    setRoomViewId(cId);
  }

  const deleteRoomView = async (rId: number) => {
    await dltRoomView({variables: { roomViewId: rId }, update: forceUpdate});
  }

  return (
    <>
      { toggleModal &&
        <RoomViewFormModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          roomViewId={roomViewId}
        />
      }

      <SectionHeaderComponent name="Vista Cuartos"/>

      <div className={classes.buttonContainer}>
        <Button
          text="Crear Nueva Vista cuartos"
          buttonType={buttonTypes.BT1}
          onClick={() => openModal(0)}
        />
      </div>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Nombre de Vista de Cuarto</th>
              <th>Abreviatura</th>
              <th>Descripción</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllRoomView.map(x =>
              <tr key={x.roomViewId}>
                <td>{x.name}</td>
                <td>{x.abbr}</td>
                <td>{x.description}</td>
                <td>
                  <Button
                    text="Editar"
                    buttonType={buttonTypes.BT2}
                    onClick={() => openModal(+x.roomViewId)}
                    className={classes.editButton}
                  />
                  <Button
                    text="Borrar"
                    buttonType={buttonTypes.BT3}
                    onClick={() => deleteRoomView(+x.roomViewId)}
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

export default RoomViewComponent;
