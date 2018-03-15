
const initialState = {
  userDetails: {},
  errorMessage: '',
  isAuthenticated: false
}

export function userRegistration(state = initialState, action) {
  switch (action.type) {
    case 'USER_REG_SUCCESS':
      return { ...state, userDetails: action.userDetails, errorMessage: '', isAuthenticated: true };
    case 'USER_REG_FAILURE':
      return { ...state, errorMessage: action.errorMessage, isAuthenticated: false };
    default:
      return state;
  }
}

export function userLogin(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, userDetails: action.userDetails, errorMessage: '', isAuthenticated: true };
    case 'LOGIN_FAILURE':
      return { ...state, errorMessage: action.errorMessage, isAuthenticated: false };
    default:
      return state;
  }
}
