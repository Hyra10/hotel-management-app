import memoizeOne from 'memoize-one';
import { getValues } from '../../../components/Common/Dropdown/dropdown.helper'

export const getRoomTypesIds = memoizeOne(getValues);
export const getRoomViewsIds = memoizeOne(getValues);
export const getBedsIds = memoizeOne(getValues);
export const getRoomStatusIds = memoizeOne(getValues);