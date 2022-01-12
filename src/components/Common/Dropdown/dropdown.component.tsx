import React, { ReactElement } from 'react';
import { FormikProps, Field, ErrorMessage } from 'formik';
import classnames from 'classnames';
import { camelToTitle } from '../../../utils/string.util';
import useStyles from './dropdown.style';
import { DropdownOptions } from './dropdown.types'

interface FormValues {}

interface classes {
  wrapperClass?:  string;
  labelClass?:  string;
  inputClass?: string;
  errorClass?: string;
}

interface OtherProps {
  name: string;
  labelName?: string;
  classes?: classes;
  attr?: object;
  options: DropdownOptions[];
  arrayName?: string;
}

const DropdownComponent = ({
  name,
  labelName,
  classes,
  attr,
  options,
  arrayName,
  ...props
}: OtherProps & FormikProps<FormValues>): ReactElement => {
  const camelCaseName = camelToTitle(name);
  const styles = useStyles();
  const err = props.errors as any;
  const tch = props.touched as any;
  let hasErrors = false;

  if(arrayName) {
    const regex = /^.*?\[[^\d]*(\d+)[^\d]*\].*$/;
    const index = regex.exec(name)?.[1];
    if(index){
      hasErrors = err[arrayName]?.[index] && tch[arrayName]?.[index];
    }
  } else {
    hasErrors = err[name] && tch[name];
  }

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
        component="select"
        id={name}
        name={name}
        {...attr}
      >
        <option value="0">--- Seleccionar ---</option>
        {
          options?.map(x => <option key={x.value} value={x.value}>{x.name}</option>)
        }
      </Field>

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


export default React.memo(DropdownComponent);
