import React, { FC, useState } from 'react';
import { useDeleteServiceStatusMutation, useGetAllServiceStatusesQuery } from '../../../../generated/graphql'
import LoadingComponent from '../../../../components/Loading/loading.component';
import useStyles from '../table.style';
import SectionHeaderComponent from '../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../components/Common/Button/button.types';
import ServiceStatusFormModal from './ServiceStatusModal/serviceStatus.modal';
import { forceUpdate } from '../../../../utils/tempReload';

const ServiceStatusComponent: FC = () => {
  const { data, loading } = useGetAllServiceStatusesQuery();
  const [ dltServiceStatus ] = useDeleteServiceStatusMutation();
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useState(false);
  const [serviceStatusId, setServiceStatusId] = useState(0);

  if (loading || !data) {
    return <LoadingComponent />
  }

  const openModal = (cId: number) => {
    setToggleModal(true);
    setServiceStatusId(cId);
  }

  const deleteServiceStatus = async (sId: number) => {
    await dltServiceStatus({variables: { serviceStatusId: sId }, update: forceUpdate});
  }

  return (
    <>
      { toggleModal &&
        <ServiceStatusFormModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          serviceStatusId={serviceStatusId}
        />
      }

      <SectionHeaderComponent name="Estado de Servicios"/>

      <div className={classes.buttonContainer}>
        <Button
          text="Crear Nuevo Estado de Servicio"
          buttonType={buttonTypes.BT1}
          onClick={() => openModal(0)}
        />
      </div>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Nombre de Estado de Servicios</th>
              <th>Abreviatura</th>
              <th>Descripción</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllServiceStatuses.map(x =>
              <tr key={x.serviceStatusId}>
                <td>{x.name}</td>
                <td>{x.abbr}</td>
                <td>{x.description}</td>
                <td>
                  <Button
                    text="Editar"
                    buttonType={buttonTypes.BT2}
                    onClick={() => openModal(+x.serviceStatusId)}
                    className={classes.editButton}
                  />
                  <Button
                    text="Borrar"
                    buttonType={buttonTypes.BT3}
                    onClick={() => deleteServiceStatus(+x.serviceStatusId)}
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

export default ServiceStatusComponent;
