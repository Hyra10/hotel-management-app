import { ErrorMessage, FormikProps } from 'formik';
import React, { ReactElement, useState } from 'react';
import { DateRangePicker, FocusedInputShape} from 'react-dates';
import moment from 'moment';
import classnames from 'classnames';
import useStyles from './datePicker.style';
import { camelToTitle } from '../../../utils/string.util';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/es';
import './reactDates.style.css';

interface FormValues {
  clientId: number;
}

interface classes {
  wrapperClass?:  string;
  labelClass?:  string;
  // inputClass?: string;
  errorClass?: string;
}

interface OtherProps {
  name: string;
  labelName?: string;
  classes?: classes;
  arrayName?: string;
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
  attr?: object;
}

type StartDateType = moment.Moment | null
type EndDateType = moment.Moment | null
type onChangeReactDatesType = { startDate: StartDateType; endDate: EndDateType }

const DatePickerComponent = ({
  classes,
  name,
  labelName,
  arrayName,
  startDate,
  endDate,
  attr,
  ...props
}: OtherProps & FormikProps<FormValues>): ReactElement => {
  // const [startDate, setStartDate] = useState<StartDateType>(null);
  // const [endDate, setEndDate] = useState<EndDateType>(null);
  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(null);
  const styles = useStyles();
  const camelCaseName = camelToTitle(name);
  moment.locale('es');

  const err = props.errors as any;
  const tch = props.touched as any;
  let hasErrors = false;
  let index: string | undefined = '0';

  if(arrayName) {
    const regex = /^.*?\[[^\d]*(\d+)[^\d]*\].*$/;
    index = regex.exec(name)?.[1];
    if(index){
      hasErrors = err[arrayName]?.[index] && tch[arrayName]?.[index];
    }
  } else {
    hasErrors = err[name] && tch[name];
  }

  
  const onFocusChange = (fi: FocusedInputShape | null) => {
    setFocusedInput(fi)
  }

  const onDatesChange = (
    dates: onChangeReactDatesType,
  ) => {
    let dateChanged = {}
    if(arrayName && index) {
      dateChanged = (props.values as any)[arrayName]?.[index]
    }

    props.setFieldValue(name, { ...dateChanged, ...dates});
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
      <DateRangePicker
        startDatePlaceholderText="Entrada"
        endDatePlaceholderText="Salida"
        openDirection="up"
        anchorDirection="right"
        startDate={startDate}
        startDateId={`${name}-startdate`}
        endDate={endDate}
        endDateId={`${name}-endDate`}
        onDatesChange={(dates: onChangeReactDatesType) => onDatesChange(dates)}
        focusedInput={focusedInput}
        onFocusChange={onFocusChange}
        hideKeyboardShortcutsPanel
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

export default DatePickerComponent;
