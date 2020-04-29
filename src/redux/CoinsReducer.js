import * as axios from 'axios'

const GET_COINS = 'GET_COINS'

let initialState = {
    coins: []
}

export const coinsReducer = (state= initialState, action) => {
    switch(action.type){
        case(GET_COINS):
        return ({
            ...state,
            coins: [...state.coins, ...action.coins]            
        })
          default: return state
    }
}

const getCoinsAC = (coins) => ({type: GET_COINS, coins})

export const getCoinsThunk = () => (dispatch) => {
     return axios.get('https://api.coinranking.com/v1/public/coins')
    .then(response => dispatch(getCoinsAC(response.data.data.coins)))
}

