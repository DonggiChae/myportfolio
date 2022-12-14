import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme"
import GlobalStyle from './styles/GlobalStyles';
import './styles/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from "recoil";


const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
