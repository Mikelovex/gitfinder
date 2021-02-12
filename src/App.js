import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './routes'

import GlobalStyle from './styles/globa'

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
