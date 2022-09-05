import actionsTypes from "./actionsType"
import fetchAPI from "../../helpers/API"

export const getLogin = ({email, password}) => ({
  type: actionsTypes.LOGIN,
  email,
})

export const getCoins = () => async (dispatch) => {
  const response = await fetchAPI();
  const data = Object.keys(response.data).filter((coin) => coin !== 'USDT')
  
  dispatch({
    type: actionsTypes.GET_COINS,
    payload: data,
  })
}