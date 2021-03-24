import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import RouterPage from './pages/router';

export default function App() {
  return (
    <HelmetProvider>
      <RouterPage />
    </HelmetProvider>
  );
}
