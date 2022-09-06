import actionsTypes from "../actions/actionsType"

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false, 
  idToEdit: 0,
};
const walletReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsTypes.GET_COINS: return {
      ...state, currencies: action.payload,
    }
    case actionsTypes.SAVE_EXPENSE: return{
      ...state,
      expenses: [
        ...state.expenses,
        action.expense
      ]
    }
    case actionsTypes.DELETE_EXPENSE: return {
      ...state,
      expenses:
        state.expenses.filter((expense) => expense.id !== action.id)
    }
    default: return state;
  }
}
export default walletReducer;