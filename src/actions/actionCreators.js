export const authSuccess = () => ({ type: "authSuccess" })
export const authFailure = () => ({ type: "authFailure" })

export const createAction = (type, payload) => {
  if (payload) {
    return {type,payload}
  }

  return {type}
}

export const actions = {
  authSuccess: "authSuccess",
  authFailure: "authFailure"
}