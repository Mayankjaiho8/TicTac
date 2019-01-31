const initialState = {
    currentPageNumber : 1,
    player1Name:'',
    player2Name:'',
    player1Score:0,
    player2Score:0,
    collapseScoreBoardFlag : false,
}

const appStateReducer = (state = initialState, action) => {
    
    switch(action.type){
        
        case 'TOGGLE_SCORE_BOARD':

            return {
                ...state,
                collapseScoreBoardFlag : state.collapseScoreBoardFlag === true ? false : true,
            }
        case 'GAME_FINISHED':
            const  winnerId = action.payload;
            
            return {
                ...state,
                player1Score : winnerId === 1 ? (state.player1Score + 2) : state.player1Score,
                player2Score : winnerId === 2 ? (state.player2Score + 2) : state.player2Score,
            }
        case 'PLAYER_1_NAME_UPDATED':
            const player1Name = action.payload;
            
            return {
                ...state,
                player1Name,
            }
        case 'PLAYER_2_NAME_UPDATED':
            const player2Name = action.payload;
            
            return {
                ...state,
                player2Name,
            }
        case 'NEW_GAME_BTN_CLICKED':
            return {
                ...initialState,
            }
        case 'CURRENT_PAGE_NUMBER_CHANGED':
            
            const currentPageNumber = action.payload;
            
            return {
                ...state,
                currentPageNumber
            }
        default :
            return state;
    }
}

export default appStateReducer;