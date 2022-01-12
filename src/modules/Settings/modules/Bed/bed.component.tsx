import React, { FC, useState } from 'react';
import { useDeleteBedMutation, useGetAllBedsQuery} from  '../../../../generated/graphql';
import LoadingComponent from '../../../../components/Loading/loading.component';
import useStyles from '../table.style';
import SectionHeaderComponent from '../../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../../components/Common/Button/button.types';
import BedFormModal from './BedModal/bed.modal';
import { forceUpdate } from '../../../../utils/tempReload';

const BedComponent: FC = () => {
  const { data, loading } = useGetAllBedsQuery();
  const [ dltBed ] = useDeleteBedMutation();
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useState(false);
  const [bedId, setBedId] = useState(0);

  if (loading || !data) {
    return <LoadingComponent />
  }

  const openModal = (cId: number) => {
    setToggleModal(true);
    setBedId(cId);
  }

  const deleteBed = async (bId: number) => {
    await dltBed({variables: { bedId: bId }, update: forceUpdate});
  }

  return (
    <>
      { toggleModal &&
        <BedFormModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          bedId={bedId}
        />
      }

      <SectionHeaderComponent name="Camas"/>

      <div className={classes.buttonContainer}>
        <Button
          text="Crear Nueva Cama"
          buttonType={buttonTypes.BT1}
          onClick={() => openModal(0)}
        />
      </div>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Nombre de Cama</th>
              <th>Abreviatura</th>
              <th>Descripción</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllBeds.map(x =>
              <tr key={x.bedId}>
                <td>{x.name}</td>
                <td>{x.abbr}</td>
                <td>{x.description}</td>
                <td>
                  <Button
                    text="Editar"
                    buttonType={buttonTypes.BT2}
                    onClick={() => openModal(+x.bedId)}
                    className={classes.editButton}
                  />
                  <Button
                    text="Borrar"
                    buttonType={buttonTypes.BT3}
                    onClick={() => deleteBed(+x.bedId)}
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

export default BedComponent;
