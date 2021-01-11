import Main from './components/MainComponent';
import ScrollToTop from './components/ScrollToTopComponent';
import './App.scss';
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <ScrollToTop/>
      <div className="App">
        <Main/>
      </div>
    </HashRouter>
  );
}

export default App;
