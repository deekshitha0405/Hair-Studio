import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import type { View } from './types';
import GlobalStyle from './ui/GlobalStyle';
import { StoreProvider } from './state/StoreContext';
import Header from './components/layout/Header';
import CustomerPage from './components/CustomerPage';
import OwnerDashboard from './components/owner/OwnerDashboard';
const Main = styled.main`width:100%;padding:36px clamp(16px,4vw,48px) 72px`;
export default function App() {
  const [view, setView] = useState<View>('client');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StoreProvider>
        <Header view={view} onChange={setView} />
        <Main>{view === 'client' ? <CustomerPage /> : <OwnerDashboard />}</Main>
      </StoreProvider>
    </ThemeProvider>
  );
}
