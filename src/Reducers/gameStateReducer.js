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
}

const gameStateReducer = (state = initialState, action) => {

    switch(action.type){
        case 'NEW_GAME_BTN_CLICKED':

            return {
                ...initialState,
            }
        case 'RESET_GAME_BTN_CLICKED':
            const gameHistory = state.gameHistory;

            return {
                ...initialState,
                gameHistory,
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
                        winnerId : currentPlayerId,     
                    })

                    return {
                        ...initialState,
                        gameHistory,
                        isGameFinished : true,
                        winnerId : currentPlayerId,
                    }
                }

                if(defaultCellIdArray.length === 0){
                    return {
                        ...state,
                        isGameFinished : true,
                        isGameDrawnFlag : true
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