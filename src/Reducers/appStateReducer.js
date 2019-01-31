const initialState = {
    currentPageNumber : 1,
    player1Name:'',
    player2Name:'',
}

const appStateReducer = (state = initialState, action) => {
    
    switch(action.type){
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