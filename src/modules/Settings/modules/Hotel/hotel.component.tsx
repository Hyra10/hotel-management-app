import React, { FC, useState } from 'react';
import { useDeleteHotelMutation, useGetAllHotelsQuery } from '../../../../generated/graphql'
import LoadingComponent from '../../../../components/Loading/loading.component';
import useStyles from '../table.style';
import SectionHeaderComponent from '../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../components/Common/Button/button.types';
import HotelFormModal from './HotelModal/hotel.modal';
import { UseAuth } from '../../../Context/AuthContext/useAuthContext';
import { forceUpdate } from '../../../../utils/tempReload';

const HotelComponent: FC = () => {
  const { data, loading } = useGetAllHotelsQuery();
  const [ dltHotel ] = useDeleteHotelMutation();
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useState(false);
  const [hotelId, setHotelId] = useState(0);

  if (loading || !data) {
    return <LoadingComponent />
  }

  const openModal = (cId: number) => {
    setToggleModal(true);
    setHotelId(cId);
  }

  const deleteHotel = async (hId: number) => {
    await dltHotel({variables: { hotelId: hId }, update: forceUpdate});
  }

  return (
    <>
      { toggleModal &&
        <HotelFormModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          hotelId={hotelId}
        />
      }

      <SectionHeaderComponent name="Hotel"/>

      <div className={classes.buttonContainer}>
        <Button
          text="Crear Nuevo Hotel"
          buttonType={buttonTypes.BT1}
          onClick={() => openModal(0)}
        />
      </div>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Nombre de Hotel</th>
              <th>Descripción</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllHotels.map(x =>
              <tr key={x.hotelId}>
                <td>{x.name}</td>
                <td>{x.description}</td>
                <td>
                  <Button
                    text="Editar"
                    buttonType={buttonTypes.BT2}
                    onClick={() => openModal(+x.hotelId)}
                    className={classes.editButton}
                  />
                  <Button
                    text="Borrar"
                    buttonType={buttonTypes.BT3}
                    onClick={() => deleteHotel(+x.hotelId)}
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

export default HotelComponent;
