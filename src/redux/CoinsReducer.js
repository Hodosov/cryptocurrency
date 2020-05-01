import * as axios from 'axios'
import { GET_COINS_SUCCESS, GET_COINS_ERROR } from './types'
import { getCoinsAC, getCoinsErrorAC } from './actions'

let initialState = {
    coins: [],
    loading: false
}

export const coinsReducer = (state= initialState, action) => {
    switch(action.type){
        case(GET_COINS_SUCCESS):
        return ({
            ...state,
            coins: [...state.coins, ...action.coins],
            loading: true            
        })
        break;
        case(GET_COINS_ERROR):
        return({
            ...state,
            loading: false

        })
        break;
          default: return state
    }
}

export const getCoinsThunk = () => (dispatch) => {
     return axios.get('https://api.coinranking.com/v1/public/coins')
    .then(response => dispatch(getCoinsAC(response.data.data.coins)))
    .catch(error => dispatch(getCoinsErrorAC(error)))
    }
        


