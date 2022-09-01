import actionsTypes from "../actions/actionsType"

const INITIAL_STATE = {
  email: '',
}
const userReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsTypes.LOGIN: return {
      ...state,

    }
    default: return state;
  }
}
export default userReducer;