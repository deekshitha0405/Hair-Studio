import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import type { View } from './types';
import GlobalStyle from './ui/GlobalStyle';
import { StoreProvider } from './state/StoreContext';
import Header from './components/layout/Header';
import CustomerPage from './components/CustomerPage';
import OwnerDashboard from './components/owner/OwnerDashboard';
const Shell = styled.div`max-width:1040px;margin:0 auto;padding:20px 16px 64px`;
export default function App() {
  const [view, setView] = useState<View>('client');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StoreProvider>
        <Shell>
          <Header view={view} onChange={setView} />
          {view === 'client' ? <CustomerPage /> : <OwnerDashboard />}
        </Shell>
      </StoreProvider>
    </ThemeProvider>
  );
}
