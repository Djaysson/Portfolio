import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
