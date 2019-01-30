const initialState = {
    currentPageNumber : 1,
    player1Name:'',
    player2Name:''
}

const appStateReducer = (state = initialState, action) => {
    
    switch(action.type){
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