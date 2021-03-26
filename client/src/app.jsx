import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import RouterPage from './pages/router';
import GlobalStyle from './styles';
import { SocketProvider } from './context/socket-context';

import '@fontsource/poppins';

export default function App() {
  return (
    <HelmetProvider>
      <SocketProvider>
        <GlobalStyle />
        <RouterPage />
      </SocketProvider>
    </HelmetProvider>
  );
}
