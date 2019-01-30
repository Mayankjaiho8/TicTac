const initialState = {
    currentPlayerId : 1,
    defaultCellIdArray : [1,2,3,4,5,6,7,8,9],
    player1CellIdArr:[],
    player2CellIdArr:[],
}

const gameStateReducer = (state = initialState, action) => {

    switch(action.type){
        case 'TIC_TAC_CELL_CLICKED' :
        
            const cellId = action.payload[0];
            let currentPlayerId = action.payload[1];
            
            let player1CellIdArr = [...state.player1CellIdArr];
            let player2CellIdArr = [...state.player2CellIdArr];
            let defaultCellIdArray = [...state.defaultCellIdArray];
             
            if(defaultCellIdArray.includes(cellId)){

                defaultCellIdArray = defaultCellIdArray.filter(id => id !== cellId);
                
                currentPlayerId === 1 ? player1CellIdArr.push(cellId) : player2CellIdArr.push(cellId);
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