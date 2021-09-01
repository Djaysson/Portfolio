import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme  from './styles/theme/themeColor';
import Header from './components/header';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
     <Header />
     <Routes />
     <GlobalStyle />
     </ThemeProvider>
   </BrowserRouter>
  );
}

export default App;
