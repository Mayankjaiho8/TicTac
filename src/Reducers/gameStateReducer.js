import { checkForWinner } from './../StateFunctions/helperFunctions';

const initialState = {
    currentPlayerId : 1,
    defaultCellIdArray : [1,2,3,4,5,6,7,8,9],
    player1CellIdArr:[],
    player2CellIdArr:[],
    gameHistory: [],
    isGameFinished : false,
    winnerId : null,
    isGameDrawnFlag : false,
    totalGames : 0,
    numOfMatchesDrawn:0,
    numOfMatchesPlayer1Won : 0,
}

const gameStateReducer = (state = initialState, action) => {
    let { numOfMatchesDrawn, numOfMatchesPlayer1Won, gameHistory, totalGames } = state;

    switch(action.type){
        
        case 'NEW_GAME_BTN_CLICKED' :

            return {
                ...initialState,
            }
        case 'RESET_GAME_BTN_CLICKED':

            return {
                ...initialState,
                gameHistory,
                numOfMatchesDrawn,
                numOfMatchesPlayer1Won,
                totalGames
            }
        case 'TIC_TAC_CELL_CLICKED' :
        
            const cellId = action.payload[0];
            let currentPlayerId = action.payload[1];
            
            let player1CellIdArr = [...state.player1CellIdArr];
            let player2CellIdArr = [...state.player2CellIdArr];
            let defaultCellIdArray = [...state.defaultCellIdArray];
             
            if(defaultCellIdArray.includes(cellId)){

                defaultCellIdArray = defaultCellIdArray.filter(id => id !== cellId);
                
                currentPlayerId === 1 ? player1CellIdArr.push(cellId) : player2CellIdArr.push(cellId);

                if(checkForWinner(cellId, currentPlayerId === 1 ? player1CellIdArr : player2CellIdArr)) {
                    let gameHistory = state.gameHistory;

                    gameHistory.push({
                        isGameDrawn : false,
                        winnerId : currentPlayerId,   
                    })
                    
                    return {
                        ...initialState,
                        gameHistory,
                        isGameFinished : true,
                        winnerId : currentPlayerId,
                        totalGames : totalGames + 1,
                        numOfMatchesPlayer1Won : currentPlayerId === 1 ? numOfMatchesPlayer1Won + 1 : numOfMatchesPlayer1Won,
                        numOfMatchesDrawn,
                    }
                }

                if(defaultCellIdArray.length === 0){
                    gameHistory.push({
                        isGameDrawn : true,
                        winnerId : null,   
                    })

                    return {
                        ...state,
                        isGameFinished : true,
                        isGameDrawnFlag : true,
                        totalGames : totalGames + 1,
                        numOfMatchesDrawn : numOfMatchesDrawn + 1
                    }
                }

                currentPlayerId = currentPlayerId === 1 ? 2 : 1;

                return {
                    ...state,
                    currentPlayerId,
                    defaultCellIdArray,
                    player1CellIdArr,
                    player2CellIdArr,
                }
            }

            return state;
        default :
            return state;
    }
}

export default gameStateReducer;