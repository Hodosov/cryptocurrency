import { GET_COINS_ERROR, GET_COINS_SUCCESS} from './types'

export const getCoinsAC = (coins) => ({type: GET_COINS_SUCCESS, coins})
export const getCoinsErrorAC = () => ({ type: GET_COINS_ERROR})