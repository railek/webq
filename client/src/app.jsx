import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import RouterPage from './pages/router';
import GlobalStyle from './styles';

import '@fontsource/poppins';

export default function App() {
  return (
    <HelmetProvider>
      <GlobalStyle />
      <RouterPage />
    </HelmetProvider>
  );
}
