import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './features/Login';
import { GameBoard } from './features/GameBoard';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Login />
      <GameBoard />
    </div>
  );
}

export default App;
