import React, { FC, createContext, useEffect, useState, useCallback } from "react";
import { MeDocument, MeQuery, useLoginMutation, useLogoutMutation, useMeQuery } from "../../../generated/graphql";
import { deleteAccessToken, setAccessToken } from "../../../utils/accessToken";
import { mapUserData } from "./authContext.helper";
import { AllData, LogInFn, UserData } from "./authContext.type";

const AuthContext = createContext({});

const AuthProvider: FC = ({ children }) => {
  const [logout, { client }] = useLogoutMutation();
  const [login] = useLoginMutation();
  const [allData, setAllData] = useState<AllData>({} as AllData)
  const { data: meData, loading } = useMeQuery();

  const loginFn: LogInFn = async (email, password) => {
    const response = await login({
      variables: { data: { email, password } },
      update: (store, { data }) => {
        if (!data) {
          return null;
        }

        store.writeQuery<MeQuery>({
          query: MeDocument,
          data: {
            __typename: 'Query',
            me: data.login.user,
          },
        });
      },
    });

    if (response?.data) {
      const { data } = response;
      setAccessToken(data.login.accessToken);

      const userData = mapUserData(data.login.user);

      setAllData((oldValues) => ({ ...oldValues, userData }));
      return userData.userRoleId;
    }

    return 0;
  }

  const logOutFn = async () => {
    await logout();
    deleteAccessToken();
    client?.clearStore();
    client?.cache.reset();
    setAllData((oldValues) => ({ ...oldValues, userData: {} as UserData }))
  };
  
  const logIn = useCallback(loginFn, [login])
  const logOut = useCallback(logOutFn, [logout, client]);

  useEffect(() => {
    let userData = {} as UserData;

    if(meData) {
      userData = mapUserData(meData?.me);
    }
    setAllData({ logOut, logIn, userData })
  }, [logOut, logIn, meData])

  return (
    <AuthContext.Provider value={allData}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider }