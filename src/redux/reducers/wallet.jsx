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
    default: return state;
  }
}
export default walletReducer;