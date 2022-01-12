import React, { FC, createContext } from "react";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const NotificationContext = createContext({});

const NotificationProvider: FC = ({ children }) => {

  return (
    <NotificationContext.Provider value={{}}>
        <ReactNotification />
        {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider }