import { UserData } from "./authContext.type"

export const mapUserData =  (userData: any)  => ({
  userId: userData.userId,
  userName: userData.userName,
  email: userData.email,
  userRoleId: +userData.userRole.userRoleId,
} as UserData)