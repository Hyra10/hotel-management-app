import memoizeOne from 'memoize-one';
import { getValues } from '../../../../components/Common/Dropdown/dropdown.helper'

export const getReservationStatusId = memoizeOne(getValues);

