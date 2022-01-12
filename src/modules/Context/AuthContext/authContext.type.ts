export enum UserRolesEnum {
  ADMIN = 1,
  PROFESOR = 2,
  STUDENT = 3
}

export type UserData = {
  userId: string
  email: string
  userName: string
  userRoleId: UserRolesEnum
}

export type LogInFn = (username: string, password: string) => Promise<number>;
export type LogOutFn = () => Promise<void>;

export type AllData =  {
  logIn: LogInFn,
  logOut: LogOutFn,
  userData: UserData,
}