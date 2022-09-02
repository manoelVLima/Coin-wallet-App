import actionsTypes from "./actionsType"

export const getLogin = (user) => ({
  type: actionsTypes.LOGIN,
  user,
})