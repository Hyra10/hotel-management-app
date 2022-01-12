import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Link, RouteComponentProps } from 'react-router-dom';
import Input from '../../components/Common/Input/input.component';
import Button from '../../components/Common/Button/button.component';
import useStyles from './registration.style';
import { buttonTypes } from '../../components/Common/Button/button.types';
import { dropdownText, required } from '../../utils/formErrors';
import { path } from '../../Routes/enum.routes';
import { max } from '../../utils/formErrors'
import { useRegisterStudentMutation } from '../../generated/graphql';
import Dropdown from '../../components/Common/Dropdown/dropdown.component';
import { useGetAllProfesorsQuery } from '../../generated/graphql';
import { DropdownOptions } from '../../components/Common/Dropdown/dropdown.types';
import { getValues } from '../../components/Common/Dropdown/dropdown.helper'
import { showNotification } from '../../utils/notification/notification';

interface FormValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profesorId: number;
}

const ServiceFormModal: FC<RouteComponentProps> = ({ history }): ReactElement => {

  const classes = useStyles();
  const { data: allProfesor } = useGetAllProfesorsQuery();
  const [profesors, setProfesors] = useState([] as DropdownOptions[])
  const [ Register ] = useRegisterStudentMutation();

  useEffect(()  => {
    if(allProfesor?.getAllProfesors) {
      const profs = allProfesor?.getAllProfesors.map<DropdownOptions>((x) => {
        return {
          name: x.userName,
          value: x.id
        }
      })
      setProfesors(profs);
    }

  }, [allProfesor])

  const onHandleSubmit = async(
    formValues: FormValues, formikHelpers: FormikHelpers<FormValues>
  ) => {
    const data = {
      userName: formValues.userName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      profesorId: +formValues.profesorId
    }
    debugger;
    try {
      await Register({ variables: { data }});
      showNotification({
        message: 'Usuario Registrado Correctamente',
        title: 'Notificación',
        type:'success'
      })
      history.push(path.LOGIN);
    } catch {
      formikHelpers.resetForm();
    }

  }

  return (
    <div className={classes.LoginWrapper}>
      <div className={classes.loginComponent}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          userName: '',
          profesorId: 0,
        }}
        enableReinitialize={true}
        validationSchema={() => {
          const profesorsId = getValues(profesors);
    
          return Yup.object().shape({
            userName: Yup.string().max(15, max(15)),
            email: Yup.string()
              .email('El email no es valido').required(required),
            password: Yup.string().required(required),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Contraseñas Tienen que ser igual'),
            profesorId: Yup.string().oneOf(profesorsId, dropdownText).required(required),
          })
        }}
        onSubmit={onHandleSubmit}
      >
        {(fProps: FormikProps<any>) => {
          const { isSubmitting, isValid, dirty } = fProps;
          return (
            <Form>
              
              <Input labelName="Nombre de Usuario" name="userName" {...fProps} />
              <Input name="email" {...fProps} />
              <Input
                labelName="Contraseña"
                name="password"
                type="password"
                {...fProps}
              />
              <Input
                labelName="Confirma Contraseña"
                name="confirmPassword"
                type="password"
                {...fProps}
              />
              <Dropdown
                name="profesorId"
                options={profesors}
                {...fProps}
              />
              <Button
                buttonType={buttonTypes.BT2}
                type="submit"
                text="Entrar"
                isDisabled={
                  isSubmitting || !(isValid && dirty)
                }
                className={classes.loginButton}
              />
              <div className={classes.forgotPassword}>
                <Link to={path.FORGOT}>¿Olvido su contraseña?</Link>
              </div>
            </Form>
          )}
        }
      </Formik>
        <div className={classes.createAccount}>
          <span>¿Ya tiene Cuenta?</span>
          &nbsp;
          <Link to={path.LOGIN}>Ingresa</Link>
        </div>
      </div>
    </div>
  );
  
};

export default ServiceFormModal;
