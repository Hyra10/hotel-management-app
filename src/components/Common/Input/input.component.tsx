import React, { ReactElement } from 'react';
import { FormikProps, Field, ErrorMessage } from 'formik';
import classnames from 'classnames';
import { camelToTitle } from '../../../utils/string.util';
import useStyles from './input.style';

interface FormValues {}

interface classes {
  wrapperClass?:  string;
  labelClass?:  string;
  inputClass?: string;
  errorClass?: string;
}

interface OtherProps {
  type?: string;
  component?: string;
  name: string;
  labelName?: string;
  classes?: classes;
  attr?: object;
}

const Input = ({
  type = 'text',
  name,
  labelName,
  classes,
  component,
  attr,
  ...props
}: OtherProps & FormikProps<FormValues>): ReactElement => {
  const camelCaseName = camelToTitle(name);
  const hasErrors = (props.errors as any)[name] && (props.touched as any)[name];
  const styles = useStyles();

  return (
    <div className={classnames(
        { [`${classes?.wrapperClass}`]: !!(classes?.wrapperClass) },
        styles.inputWrapper,
      )}>
      <label
        htmlFor={name}
        className={classnames(
          {'message-error': hasErrors},
          { [`${classes?.labelClass}`]: !!(classes?.labelClass) }
        )}
      >
        {labelName ? labelName : camelCaseName}
      </label>
      <Field
        className={classnames(
          {'input-error': hasErrors},
          { [`${classes?.inputClass}`]: !!(classes?.inputClass) },
          styles.input
        )}
        name={name}
        component={component}
        type={type}
        {...attr}
      />
      <ErrorMessage
        component="small"
        className={classnames(
          'message-error',
          { [`${classes?.errorClass}`]: !!(classes?.errorClass) }
        )}
        name={name}
      />
    </div>
  );
};

export default React.memo(Input);
