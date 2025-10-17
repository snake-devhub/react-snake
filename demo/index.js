import React from 'react';
import ReactDOM from 'react-dom';
import SnakeGame from '../src/SnakeGame.jsx'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <h1>react-snake</h1>
    <div className="textWrapper">
      <p id="instructions">Use the arrow keys or W/A/S/D to play</p>
      <p className="subTitle">A simple snake game created with the
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React </a>
      JavaScript library</p>
    </div>
    <SnakeGame />
  </React.StrictMode>,
  document.getElementById('root')
);
