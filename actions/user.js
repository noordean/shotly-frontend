import axios from 'axios';

const userRegSuccess = (userDetails) => {
  return {
    type: 'USER_REG_SUCCESS',
    userDetails
  }
}

const userRegFailure = (errorMessage) => {
  return {
    type: 'USER_REG_FAILURE',
    errorMessage
  }
}

const loginSuccess = (userDetails) => {
  return {
    type: 'LOGIN_SUCCESS',
    userDetails
  }
}

const loginFailure = (errorMessage) => {
  return {
    type: 'LOGIN_FAILURE',
    errorMessage
  }
}

export function registerUser(userDetails) {
  return (dispatch) => {
    return axios.post('https://shotly-api.herokuapp.com/users', userDetails)
      .then((response) => {
        dispatch(userRegSuccess(response.data));
        localStorage.setItem('token', response.data.token);
      })
      .catch((error) => {
        dispatch(userRegFailure(error.response.data.message));
      });
    };
  }

export function loginUser(userDetails) {
  return (dispatch) => {
    return axios.post('https://shotly-api.herokuapp.com/login', userDetails)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loginFailure(error.response.data.message));
      });
    };
  }
