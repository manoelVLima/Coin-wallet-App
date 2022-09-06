import actionsTypes from "../actions/actionsType"

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false, 
  idToEdit: 0,
};
const walletReducer = (state=INITIAL_STATE, action) => {
  console.log(action);
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
    case actionsTypes.ENABLE_EDIT: return {
      ...state,
      idToEdit: action.id,
    }
    case actionsTypes.EDIT_EXPENSE: return {
      ...state,
      expenses:
      [...state.expenses.map((expense) => expense.id === state.idToEdit ? action.expense : expense )]
    }
    default: return state;
  }
}
export default walletReducer;