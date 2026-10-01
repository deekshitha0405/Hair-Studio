import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme.js';
import GlobalStyle from './ui/GlobalStyle.jsx';
import { StoreProvider } from './state/StoreContext.jsx';
import Header from './components/layout/Header.jsx';
import CustomerPage from './components/CustomerPage.jsx';
import OwnerDashboard from './components/owner/OwnerDashboard.jsx';
const Shell = styled.div`max-width:1040px;margin:0 auto;padding:20px 16px 64px`;
export default function App() {
  const [view, setView] = useState('client');
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
