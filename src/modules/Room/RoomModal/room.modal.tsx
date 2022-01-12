import React, { FC, ReactElement } from 'react';
import { Formik, FormikProps, Form, FieldArray, FieldArrayRenderProps } from 'formik';
import * as Yup from 'yup';
import { FiPlusCircle } from 'react-icons/fi';
import { GetRoomByIdQuery, useAddRoomMutation,
  useGetRoomByIdQuery, useUpdateRoomMutation } from '../../../generated/graphql'
import useStyles from './room.modal.style';
import ModalComponent from '../../../components/Common/Modal/modal.component';
import Input from '../../../components/Common/Input/input.component';
import Dropdown from '../../../components/Common/Dropdown/dropdown.component';
import SectionHeaderComponent from '../../../components/SectionHeader/sectionHeader.component';
import Button from '../../../components/Common/Button/button.component';
import { buttonTypes } from '../../../components/Common/Button/button.types';
import { formValues } from './room.modal.types';
import { positive, required, dropdownText } from '../../../utils/formErrors';
import { primaryColor } from '../../../utils/styles/colors';
import { Usegct } from '../../Context/useGlobalContext';
import { getRoomTypesIds, getRoomViewsIds,
  getBedsIds, getRoomStatusIds } from './room.modal.helper';
import { UseAuth } from '../../Context/AuthContext/useAuthContext';
import { UserRolesEnum } from '../../Context/AuthContext/authContext.type';
import { forceUpdate } from '../../../utils/tempReload';

interface Props {
  roomId: number;
  setToggleModal: Function;
}

const RoomFormModal: FC<Props> = ({
  roomId,
  setToggleModal,
}): ReactElement => {
  const classes = useStyles();
  const gct = Usegct();
  const useAuth = UseAuth();
  const { data } = useGetRoomByIdQuery({ variables: { roomId }});
  const [ createRoom ] = useAddRoomMutation();
  const [ updateRoom ] = useUpdateRoomMutation();
  const disabled = useAuth.userData.userRoleId === UserRolesEnum.STUDENT

  const onHandleSubmit = async (values: formValues) => {
    const variables = {
      data: {
        roomId,
        roomNumber: values.roomNumber,
        floorNumber: values.floorNumber,
        buildingNumber: values.buildingNumber,
        price: values.price,
        beds: values.beds.map(Number),
        roomType: +values.roomType,
        roomView: +values.roomView,
        roomStatus: +values.roomStatus,
        allowHandicap: values.allowHandicap,
        observation: values.observation,
        hotelId: gct.chosenHotelId,
      }
    };

    try  {
      if(values.roomId === 0) {
        await createRoom({variables, update: forceUpdate})
      } else  {
        await updateRoom({variables, update: forceUpdate});
      }
    } catch {
      console.log('room error')
    }

    setToggleModal(-1);
  }

  const initialValues = (payload: GetRoomByIdQuery | undefined): formValues => {
    let initialRoomValues = {};

    if(payload?.getRoomById) {
      const {
        buildingNumber,
        floorNumber,
        price,
        roomBeds,
        roomNumber,
        roomType,
        roomStatus,
        roomView,
        allowHandicap,
        observation,
      } = payload.getRoomById;

      const beds = roomBeds?.map(x=> x.bed.bedId);

      initialRoomValues = {
        roomId: +roomId,
        roomNumber,
        floorNumber,
        buildingNumber,
        price,
        beds,
        roomType: roomType.roomTypeId,
        roomView: roomView.roomViewId,
        allowHandicap,
        observation,
        roomStatus: roomStatus.roomStatusId
      };
    }

    return {
      roomId: 0,
      roomNumber:  0,
      floorNumber: 0,
      buildingNumber: 0,
      price: 0,
      beds: [0],
      roomType: 0,
      roomView: 0,
      roomStatus: 0,
      allowHandicap: false,
      observation: '',
      ...initialRoomValues
    }
  }
  
  return (
    <ModalComponent
      show={roomId !== -1}
      cancelCallback={() => setToggleModal(-1)}
      modalWidth={665}
    >
      <h4>{roomId === 0 ? 'Agregar' : 'Actualizar'} Cuarto</h4>

      <Formik
        initialValues={initialValues(data)}
        enableReinitialize={true}
        validationSchema={() => {
          const roomTypesIds = getRoomTypesIds(gct.roomTypes);
          const roomViewsIds = getRoomViewsIds(gct.roomViews);
          const roomBedsIds = getBedsIds(gct.beds);
          const roomStatusIds = getRoomStatusIds(gct.roomStatuses);

          return Yup.object({
            roomStatus: Yup.string().oneOf(roomStatusIds, dropdownText).required(required),
            roomNumber: Yup.number().positive(positive).required(required),
            floorNumber: Yup.number().positive(positive).required(required),
            buildingNumber: Yup.number().positive(positive).required(required),
            roomType: Yup.string().oneOf(roomTypesIds, dropdownText).required(required),
            roomView: Yup.string().oneOf(roomViewsIds, dropdownText).required(required),
            allowHandicap: Yup.boolean(),
            beds: Yup.array().of(Yup.string().oneOf(roomBedsIds, dropdownText)),
            price: Yup.number().positive(positive).required(required),
            observation: Yup.string(),
          })
        }}
        onSubmit={onHandleSubmit}
      >
        {(fProps: FormikProps<any>) => {
          const { values, isSubmitting, isValid, dirty } = fProps;

          return (
            <Form>
              <SectionHeaderComponent size={18} name="Estado del Cuarto" color={primaryColor.p1}/>
                <Dropdown
                  classes={{ wrapperClass: classes.inputGetAllSpace }}
                  labelName="Estado del Cuarto"
                  name="roomStatus"
                  options={gct.roomStatuses}
                  {...fProps}
                />

              <SectionHeaderComponent size={18} name="Localizacion del Cuarto" color={primaryColor.p1}/>
              <div className={classes.inlineInputs}>
                <Input
                  attr={{ disabled }}
                  labelName="Numero de Cuarto"
                  name="roomNumber"
                  type="number"
                  {...fProps} />
                <Input
                  attr={{ disabled }}
                  labelName="Numero de Piso"
                  name="floorNumber"
                  type="number"
                  {...fProps} />
                <Input
                  attr={{ disabled }}
                  labelName="Numero de Edificio"
                  name="buildingNumber"
                  type="number"
                  {...fProps} />
              </div>

              <SectionHeaderComponent size={18} name="Tipo de Cuarto" color={primaryColor.p1}/>
              <div className={classes.inlineInputs}>
                <Dropdown
                  classes={{ wrapperClass: classes.inputGetAllSpace }}
                  labelName="Tipo de Cuarto"
                  name="roomType"
                  options={gct.roomTypes}
                  attr={{ disabled }}
                  {...fProps}
                />
                <Dropdown
                  classes={{ wrapperClass: classes.inputGetAllSpace }}
                  labelName="Vista del Cuarto"
                  name="roomView"
                  options={gct.roomViews}
                  attr={{ disabled }}
                  {...fProps}
                />
              </div>
              <Input
                  labelName="Cuarto habilitado para Discapacitados"
                  name="allowHandicap"
                  type="checkbox"
                  classes={{wrapperClass: classes.checkbox, labelClass: classes.checkboxLabel}}
                  attr={{ disabled }}
                  {...fProps}
                />

              <SectionHeaderComponent size={18} name="Camas" color={primaryColor.p1}/>
              <div>
                <FieldArray
                  name="beds"
                  render={(ah: FieldArrayRenderProps) => (
                    <>
                      <div className={classes.beds}>
                        {values.beds.map((_value: number, index: number) => (
                          <Dropdown
                            key={index}
                            arrayName="beds"
                            labelName={`Cama ${index + 1}`}
                            name={`beds[${index}]`}
                            options={gct.beds}
                            attr={{ disabled }}
                            {...fProps}
                          />
                        ))}
                      {
                        values.beds.length < 3 &&
                        <div style={{textAlign: 'center', alignSelf: 'center'}}>
                          <button
                            type="button"
                            className={classes.plusIcon}
                            onClick={() => ah.push(0)}
                            disabled={disabled}
                          >
                            <FiPlusCircle size={36}/>
                          </button>
                        </div>
                      }
                      </div>
                    </>
                  )}
                />
              </div>

              <SectionHeaderComponent size={18} name="Otros" color={primaryColor.p1}/>

              <Input
                labelName="Observaciones"
                name="observation"
                component="textarea"
                classes={{inputClass: classes.textAreaInput }}
                attr={{ maxLength:'150', rows: 2, disabled }}
                {...fProps}
              />
              <div className={classes.inlineInputs}>
                <Input
                  labelName="Precio"
                  name="price"
                  type="number"
                  attr={{ disabled }}
                  {...fProps} />
              </div>

              <div className={classes.buttonContainer}>
                <Button
                  buttonType={buttonTypes.BT1}
                  type="submit"
                  text={roomId === 0 ? 'Guardar' : "Actualizar"}
                  isDisabled={
                    isSubmitting || !(isValid && dirty)
                  }
                  className={classes.saveButton}
                />
                <Button
                  buttonType={buttonTypes.BT3}
                  text="Cancelar"
                  onClick={() => setToggleModal(-1)}
                  className={classes.cancelButton}
                />
              </div>
              
            </Form>
          )}
        }
      </Formik>
    </ModalComponent>
  );
};

export default RoomFormModal;
