import React, { FC } from 'react';
import { FormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import { Link, RouteComponentProps } from 'react-router-dom';
import Input from '../../components/Common/Input/input.component';
import Button from '../../components/Common/Button/button.component';
import useStyles from './forgot.style';
import { buttonTypes } from '../../components/Common/Button/button.types';
import { required } from '../../utils/formErrors';
import { path } from '../../Routes/enum.routes';
import { useForgotPasswordMutation } from '../../generated/graphql';
import { store } from 'react-notifications-component';

interface FormValues {
  email: string;
}

interface MyFormProps {
  initialEmail?: string;
}

const ForgotForm = (props: FormikProps<any>) => {
  const { errors, touched, handleSubmit, isSubmitting } = props;
  const classes = useStyles();

  return (
    <div className={classes.LoginWrapper}>
      <div className={classes.loginComponent}>
        <form onSubmit={handleSubmit}>
          <Input name="email" {...props} />

          <Button
            buttonType={buttonTypes.BT2}
            type="submit"
            text="Entrar"
            isDisabled={
              isSubmitting || !!(errors.email && touched.email)
            }
            className={classes.loginButton}
          />
          <div className={classes.forgotPassword}>
            <Link to={path.LOGIN}>Volver el login</Link>
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

const ForgotComponent: FC<RouteComponentProps> = ({ history }) => {
  const [ forgotPassword ]  = useForgotPasswordMutation();

  const ForgotComponentUser = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
      email: props.initialEmail || '',
    }),
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('El email no es valido').required(required),
    }),
    async handleSubmit({ email }: FormValues) {
      try {
        await forgotPassword({ variables: { email } })
        history.push(path.LOGIN);
      } catch (ex) {
        console.log(ex)
      }
    },
  })(ForgotForm);

  return <ForgotComponentUser />;
};

export default ForgotComponent;
