import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Sass/appComponent.scss';

import { currentPageChangedActionDispatcher } from './StateFunctions/actionDispatcherFunctions';


class App extends Component {

    constructor(props){
        super(props);

        this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
    }

    handleStartButtonClick(){
      
      this.props.currentPageChangedActionDispatcher(this.props.currentPageNum);
    }

    render() {
       
      return (
        <div className="app-page-container">
          <h1>Welcome to play Tic - Tac- Toe</h1>
          <p> You can choose to play with another player and maintain the scores and history to get a championship kinda feeling :D</p>
          <p> Click below button to get Started</p>
          <button className="btn btn-center" onClick={ this.handleStartButtonClick }>Let's Play</button>
        </div>
      );
    }
}

const mapStateToProps = store => {
  return {
    currentPageNum : store.appStateReducer.currentPageNumber,
  }
}

const mapDispatcherToProps = dispatch => {
  
  return {
    currentPageChangedActionDispatcher : currentPageNum => dispatch(currentPageChangedActionDispatcher(currentPageNum)) ,
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);
