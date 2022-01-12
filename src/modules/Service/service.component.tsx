import React, { FC, useState } from 'react';
import { useDeleteServiceMutation, useGetAllServicesQuery } from '../../generated/graphql'
import LoadingComponent from '../../components/Loading/loading.component';
import useStyles from './service.style';
import SectionHeaderComponent from '../../components/SectionHeader/sectionHeader.component';
import Button from '../../components/Common/Button/button.component';
import { buttonTypes } from '../../components/Common/Button/button.types';
import ServiceFormModal from './ServiceModal/service.modal';
import { Usegct } from '../Context/useGlobalContext';
import { forceUpdate } from '../../utils/tempReload';

const ServiceComponent: FC = () => {
  const { chosenHotelId: hotelId } = Usegct();
  const { data, loading } = useGetAllServicesQuery({ variables: {hotelId} });
  const [ dltService ] = useDeleteServiceMutation();
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useState(false);
  const [serviceId, setServiceId] = useState(0);

  if (loading || !data) {
    return <LoadingComponent />
  }

  const openModal = (cId: number) => {
    setToggleModal(true);
    setServiceId(cId);
  }

  const deleteService = async (sId: number) => {
    await dltService({variables: { serviceId: sId }, update: forceUpdate});
  }

  return (
    <>
      { toggleModal &&
        <ServiceFormModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          serviceId={serviceId}
        />
      }

      <SectionHeaderComponent name="Servicios"/>

      <div className={classes.buttonContainer}>
        <Button
          text="Crear Nuevo Servicio"
          buttonType={buttonTypes.BT1}
          onClick={() => openModal(0)}
        />
      </div>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Nombre del Servicio</th>
              <th>Observaciones</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllServices.map(x =>
              <tr key={x.serviceId}>
                <td>{x.name}</td>
                <td>{x.observation}</td>
                <td>
                  <Button
                    text="Editar"
                    buttonType={buttonTypes.BT2}
                    onClick={() => openModal(+x.serviceId)}
                    className={classes.editButton}
                  />
                  <Button
                    text="Borrar"
                    buttonType={buttonTypes.BT3}
                    onClick={() => deleteService(+x.serviceId)}
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

export default ServiceComponent;
