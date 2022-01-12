import React, { ReactElement } from 'react';
import { FormikProps, ErrorMessage } from 'formik';
import classnames from 'classnames';
import { camelToTitle } from '../../../utils/string.util';
import useStyles, { customAyncSelectStyles } from './asyncSelect.style';
import AsyncSelect from 'react-select/async';

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
  arrayName?: string;

  getOneOption: (id: number) => void;
  getAllOptions: (criteria: string, cb: Function) => void;
}

const AsyncSelectComponent = ({
  name,
  labelName,
  classes,
  attr,
  arrayName,
  getOneOption,
  getAllOptions,
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

      <AsyncSelect
        className={classnames(
          {'input-error': hasErrors},
          { [`${classes?.inputClass}`]: !!(classes?.inputClass) },
        )}
        styles={customAyncSelectStyles}
        name={name}
        // cacheOptions
        noOptionsMessage={() => 'No hay optiones, Escriba para buscar'}
        isClearable
        onChange={(option) => {
          if(!option) {
            getOneOption(0);
            return;
          }

          getOneOption(+option.value);
        }}
        value={(props.values  as any)[name]}
        loadOptions={getAllOptions}
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


export default React.memo(AsyncSelectComponent);
