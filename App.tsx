import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/Global/styles/theme';

import { Home } from './src/screens/Home';
import useCachedResources from './src/hooks/useCachedResources';


export default function App() {
  const isLoadingCComplete = useCachedResources();


  if (!isLoadingCComplete) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

