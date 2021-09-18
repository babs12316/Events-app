import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import style from './App.module.css';
import Routes from './routes/Routes';

function App(): JSX.Element {
  return (
    <div className={style.app}>
      <h1>Events app</h1>
      <Router>
        <Routes />
      </Router>
      ;
    </div>
  );
}

export default App;
