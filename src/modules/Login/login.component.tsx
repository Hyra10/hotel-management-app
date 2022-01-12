import React, { FC } from 'react';
import { FormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import { Link, RouteComponentProps } from 'react-router-dom';
import Input from '../../components/Common/Input/input.component';
import Button from '../../components/Common/Button/button.component';
import useStyles from './login.style';
import { buttonTypes } from '../../components/Common/Button/button.types';
import { required } from '../../utils/formErrors';
import { path } from '../../Routes/enum.routes';
import { UseAuth } from '../Context/AuthContext/useAuthContext';
import { UserRolesEnum } from '../Context/AuthContext/authContext.type';

interface FormValues {
  email: string;
  password: string;
}

interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

const LoginForm = (props: FormikProps<any>) => {
  const { errors, touched, handleSubmit, isSubmitting } = props;
  const classes = useStyles();

  return (
    <div className={classes.LoginWrapper}>
      <div className={classes.loginComponent}>
        <form onSubmit={handleSubmit}>
          <Input name="email" {...props} />
          <Input
            labelName="Contraseña"
            name="password"
            type="password"
            {...props}
          />

          <Button
            buttonType={buttonTypes.BT2}
            type="submit"
            text="Entrar"
            isDisabled={
              isSubmitting ||
              !!(errors.email && touched.email) ||
              !!(errors.password && touched.password)
            }
            className={classes.loginButton}
          />
          <div className={classes.forgotPassword}>
            <Link to={path.FORGOT}>¿Olvido su contraseña?</Link>
          </div>

        </form>
        <div className={classes.createAccount}>
          <span>¿No tiene Cuenta?</span>
          &nbsp;
          <Link to={path.REGISTRATION}>Crear Una</Link>
        </div>
      </div>
    </div>
  );
};

const LoginComponent: FC<RouteComponentProps> = ({ history }) => {
  const useAuth = UseAuth();

  const LoginComponentUser = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
      email: props.initialEmail || 'profe@profe.com',
      password: props.initialPassword || '123',
    }),
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('El email no es valido').required(required),
      password: Yup.string().required(required),
    }),
    async handleSubmit({ email, password }: FormValues) {
      const userRole = await useAuth.logIn(email, password);

      if(userRole === UserRolesEnum.ADMIN) {
        history.replace(path.SETTINGS_ROOMTYPE)
      }

    },
  })(LoginForm);

  return <LoginComponentUser />;
};

export default LoginComponent;
