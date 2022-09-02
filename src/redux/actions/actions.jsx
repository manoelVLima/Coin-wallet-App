import actionsTypes from "./actionsType"

export const getLogin = ({email, password}) => ({
  type: actionsTypes.LOGIN,
  email,
})