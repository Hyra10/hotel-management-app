import { LocalStorageWorker } from "./localStorageManager";

const { add, get, remove } = LocalStorageWorker();
const token = 'CTPTOKEN'

export const setAccessToken = (tokenValue: string) => add(token, tokenValue);
export const deleteAccessToken = () => remove(token);
export const getAccessToken = () => get(token);
