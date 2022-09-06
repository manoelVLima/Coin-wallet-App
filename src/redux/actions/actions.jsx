import actionsTypes from "./actionsType"
import fetchAPI from "../../helpers/API"


export const getLogin = ({email, password}) => ({
  type: actionsTypes.LOGIN,
  email,
})

export const getCoins = () => async (dispatch) => {
  const response = await fetchAPI();
  const data = Object.keys(response).filter((coin) => coin !== 'USDT')
  
  dispatch({
    type: actionsTypes.GET_COINS,
    payload: data,
  })
}

export const saveExpense = (expenseData) => async (dispatch) =>{ 
  const data = await fetchAPI();
  dispatch({
    type: actionsTypes.SAVE_EXPENSE,
    expense: {
      ...expenseData,
      exchangeRates: data,
    }
  })
}

export const deleteExpense = (id) => ({
  type: actionsTypes.DELETE_EXPENSE,
  id,
})

export const enableEdit = (id) => ({
  type: actionsTypes.ENABLE_EDIT,
  id,
})

export const editExpense = (newExpenseData) => async (dispatch) =>{ 
  const data = await fetchAPI();
  dispatch({
    type: actionsTypes.EDIT_EXPENSE,
    expense: {
      ...newExpenseData,
      exchangeRates: data,
    }
  })
}