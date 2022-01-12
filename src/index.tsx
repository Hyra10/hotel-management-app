import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, Observable } from "apollo-link";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode from "jwt-decode";
import App from "./App";
import { getAccessToken, setAccessToken } from "./utils/accessToken";
import { GlobalProvider } from './modules/Context/globalContext'
import { AuthProvider } from "./modules/Context/AuthContext/authContext";
import { NotificationProvider } from "./modules/Context/NotificationContext/notificationContext";
import { mapErrorMessages } from "./utils/notification/notification";

const cache = new InMemoryCache({});

//Getting access Token and passing it in request headers
const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle: any;
      Promise.resolve(operation)
        .then(op => {
          const accessToken = getAccessToken();
          if (accessToken) {
            op.setContext({
              headers: { authorization: `bearer ${accessToken}`}
            });
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) {
          handle.unsubscribe();
        }
      };
    })
);

const client = new ApolloClient({
  link: ApolloLink.from([
    new TokenRefreshLink({
      accessTokenField: "accessToken",
      isTokenValidOrUndefined: () => {
        const token = getAccessToken();

        if (!token) {
          return true;
        }

        try {
          const { exp } = jwtDecode(token);
          if (Date.now() >= exp * 1000) {
            return false;
          } else {
            return true;
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      },
      fetchAccessToken: () => {
        return fetch("http://localhost:4000/refresh_token", {
          method: "POST",
          credentials: "include"
        });
      },
      handleFetch: accessToken => {
        setAccessToken(accessToken);
      },
      handleError: err => {
        console.warn("Your refresh token is invalid. Try to relogin");
        console.error(err);
      }
    }),
    onError(({ graphQLErrors }) => {
      mapErrorMessages(graphQLErrors)
    }),
    requestLink,
    new HttpLink({
      uri: "http://localhost:4000/graphql",
      credentials: "include"
    })
  ]),
  cache,
});

ReactDOM.render(
  <NotificationProvider>
    <ApolloProvider client={client}>
      <AuthProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </AuthProvider>
    </ApolloProvider>
  </NotificationProvider>,
  document.getElementById("root1")
);
