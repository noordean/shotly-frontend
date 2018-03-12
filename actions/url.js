import axios from 'axios';

const shortenUrlSuccess = (shortenedUrl) => {
  return {
    type: 'SHORTEN_URL_SUCCESS',
    shortenedUrl
  }
}

const shortenUrlFailure = (errorMessage) => {
  return {
    type: 'SHORTEN_URL_FAILURE',
    errorMessage
  }
}

export function shortenUrl(originalUrl) {
  return (dispatch) => {
    return axios.post('https://shotly-api.herokuapp.com/urls', {
      original_url: originalUrl
    })
      .then((response) => {
        dispatch(shortenUrlSuccess(response.data));
      })
      .catch((error) => {
        dispatch(shortenUrlFailure(error.response.data.message));
      });
    };
  }
