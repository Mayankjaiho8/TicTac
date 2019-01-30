import React, { Component } from 'react';
import { connect } from 'react-redux';

import './../Sass/gamePageComponent.scss';

class GamePageComponent extends Component {

    render(){
        return (

            <div className="game-page-container">
                <div className="score-board-container">
                    
                </div>

                <div className="game-board-container">
                    
                </div>

               
            </div>
        )
    }
}

const mapStateToProps = store => {
    return{

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePageComponent);