import Main from './components/MainComponent';
import ScrollToTop from './components/ScrollToTopComponent';
import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <div className="App">
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
