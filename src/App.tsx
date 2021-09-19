import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import style from './App.module.css';
import { Routes } from './routes/Routes';

const App = (): JSX.Element => {
  return (
    <div className={style.app}>
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
