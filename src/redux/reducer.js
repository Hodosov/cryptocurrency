import { combineReducers } from "redux";
import { coinsReducer } from './CoinsReducer'

export const Reducer = combineReducers({
    coins: coinsReducer
})