import React, { FC, useState } from 'react';
import { useDeleteRoomTypeMutation, useGetAllRoomTypesQuery} from  '../../../../generated/graphql';
import LoadingComponent from '../../../../components/Loading/loading.component';
import useStyles from '../table.style';
import SectionHeaderComponent from '../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../components/Common/Button/button.types';
import RoomTypeFormModal from './RoomTypeModal/roomType.modal';
import { forceUpdate } from '../../../../utils/tempReload';

const RoomTypeComponent: FC = () => {
  const { data, loading } = useGetAllRoomTypesQuery();
  const [ dltRoomType ] = useDeleteRoomTypeMutation();
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useState(false);
  const [roomTypeId, setRoomTypeId] = useState(0);

  if (loading || !data) {
    return <LoadingComponent />
  }

  const openModal = (cId: number) => {
    setToggleModal(true);
    setRoomTypeId(cId);
  }

  const deleteRoomType = async (rId: number) => {
    await dltRoomType({variables: { roomTypeId: rId }, update: forceUpdate});
  }

  return (
    <>
      { toggleModal &&
        <RoomTypeFormModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          roomTypeId={roomTypeId}
        />
      }

      <SectionHeaderComponent name="Tipo de Cuartos"/>

      <div className={classes.buttonContainer}>
        <Button
          text="Crear Nuevo Tipo de cuartos"
          buttonType={buttonTypes.BT1}
          onClick={() => openModal(0)}
        />
      </div>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Nombre de Tipo de Cuarto</th>
              <th>Abreviatura</th>
              <th>Descripción</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllRoomTypes.map(x =>
              <tr key={x.roomTypeId}>
                <td>{x.name}</td>
                <td>{x.abbr}</td>
                <td>{x.description}</td>
                <td>
                  <Button
                    text="Editar"
                    buttonType={buttonTypes.BT2}
                    onClick={() => openModal(+x.roomTypeId)}
                    className={classes.editButton}
                  />
                  <Button
                    text="Borrar"
                    buttonType={buttonTypes.BT3}
                    onClick={() => deleteRoomType(+x.roomTypeId)}
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

export default RoomTypeComponent;
