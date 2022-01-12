import { useContext } from "react";
import { GlobalContext } from './globalContext';
import { AllData } from './globalContext.types';

export const Usegct = (): AllData => useContext(GlobalContext) as AllData;
