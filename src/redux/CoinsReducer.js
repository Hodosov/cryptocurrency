const GETCOINS = 'GETCOLIS'

let initialState = {
    coins: []
}

export const coinsReducer = (state= initialState, action) => {
    switch(action.type){
        case(GETCOINS):
        return ({
            ...state,
            coins: [...state.coins, ...action.coins]            
        })
          default: return state
    }
}

export const getCoinsAC = (coins) => ({type: GETCOINS, coins})