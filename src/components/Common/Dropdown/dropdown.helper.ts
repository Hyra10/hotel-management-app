import { DropdownOptions } from "./dropdown.types";

export const getValues = (DdValues: Array<DropdownOptions>) =>
  DdValues.map(x => x.value);

export const mapToDropDown = (name: string, value: string): DropdownOptions => 
  ({ name, value }) as DropdownOptions;