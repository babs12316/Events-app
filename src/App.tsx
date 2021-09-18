import React from 'react';
import style from './App.module.css';
import Login from './components/Login';

function App(): JSX.Element {
  return (
    <div className={style.app}>
      <h1>Events app</h1>
      <Login />
    </div>
  );
}

export default App;
