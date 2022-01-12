import { useContext } from "react";
import { AuthContext } from "./authContext";
import { AllData } from './authContext.type';

export const UseAuth = (): AllData => useContext(AuthContext) as AllData;
