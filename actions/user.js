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
