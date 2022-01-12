import React, { FC } from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikProps } from 'formik';
import useStyles from './user.style';
import { useChangePasswordMutation } from '../../generated/graphql';
import SectionHeader from '../../components/SectionHeader/sectionHeader.component'
import Button from '../../components/Common/Button/button.component';
import { buttonTypes } from '../../components/Common/Button/button.types';
import Input from '../../components/Common/Input/input.component';
import { required } from '../../utils/formErrors';
import { UseAuth } from '../Context/AuthContext/useAuthContext';

const UserComponent: FC = () => {
  const classes = useStyles();
  const [ changePsw ] = useChangePasswordMutation();
  const { logOut } = UseAuth();

  return (
    <>
      <SectionHeader name="Perfil de Usuario"/>
      <div className={classes.container}>
        <h3>Cambio de Contraseña</h3>
        <Formik
        initialValues={{
          password: '',
          confirmPassword: '',
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          password: Yup.string().required(required),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Contraseñas Tienen que ser igual'),
        })
        }
        onSubmit={async (values) => {
          await changePsw({ variables: { password: values.password } });
          await logOut();
        }}
      >
        {(fProps: FormikProps<any>) => {
          const { isSubmitting, isValid, dirty } = fProps;
          return (
            <Form>
              <Input
                type="password"
                labelName="Contraseña"
                name="password"
                {...fProps}
              />
              <Input
                type="password"
                labelName="Confirme Contraseña"
                name="confirmPassword"
                {...fProps}
              />

              <Button
                buttonType={buttonTypes.BT1}
                type="submit"
                text="Guardar"
                isDisabled={
                  isSubmitting || !(isValid && dirty)
                }
              />
              
            </Form>
          )}
        }
      </Formik>

      </div>
    </>
  );
};

export default UserComponent;
