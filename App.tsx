import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes } from './src/routes';
import { MaterialGlobal } from './src/shared/themes/global.theme';
import GlobalStyles from './src/styles/GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const httpLink = createHttpLink({
    uri: 'http://127.0.0.1:3000/graphql'
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <MuiThemeProvider theme={MaterialGlobal}>
          <Routes />
        </MuiThemeProvider>
        <ToastContainer />
      </ApolloProvider>
    </>
  );
}
