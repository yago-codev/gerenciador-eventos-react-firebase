const INITIAL_STATE = {
  userEmail: "",
  userLogged: 0,
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, userLogged: 1, userEmail: action.userEmail };
    case "LOGOUT":
      return { ...state, userLogged: 0, userEmail: "" };
    default:
      return state;
  }
}
