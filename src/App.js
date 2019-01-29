import React, { Component } from 'react';
import './Sass/appComponent.scss';


class App extends Component {
  render() {
    return (
      <div className="app-page-container">
        <h1>Welcome to play Tic - Tac- Toe</h1>
        <p> You can choose to play with another player and maintain the scores and history to get a championship kinda feeling :D</p>
        <p> Click below button to get Started</p>
        <button className="btn btn-center">Start The Game</button>
      </div>
    );
  }
}

export default App;
