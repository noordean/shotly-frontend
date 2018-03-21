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

const getUrlsSuccess = (urls) => {
  return {
    type: 'GET_URL_SUCCESS',
    urls
  }
}

const getUrlsFailure = (errorMessage) => {
  return {
    type: 'GET_URL_FAILURE',
    errorMessage
  }
}

const updateUrlSuccess = (url) => {
  return {
    type: 'UPDATE_URL_SUCCESS',
    url
  }
}

const updateUrlFailure = (errorMessage) => {
  return {
    type: 'UPDATE_URL_FAILURE',
    errorMessage
  }
}

const deleteUrlSuccess = (message) => {
  return {
    type: 'DELETE_URL_SUCCESS',
    message
  }
}

const deleteUrlFailure = (errorMessage) => {
  return {
    type: 'DELETE_URL_FAILURE',
    errorMessage
  }
}

const getToken = () => {
  if (localStorage.token) {
    return { token: localStorage.token };
  }

  return '';
}

export function shortenUrl(originalUrl) {
  return (dispatch) => {
    return axios.post('https://shotly-api.herokuapp.com/urls', {
      original_url: originalUrl
    },
    {
      headers: getToken()
    })
      .then((response) => {
        dispatch(shortenUrlSuccess(response.data));
      })
      .catch((error) => {
        dispatch(shortenUrlFailure(error.response.data.message));
      });
    };
  }

export function getUrls(token) {
  return (dispatch) => {
    return axios.get('https://shotly-api.herokuapp.com/user/urls', {
      headers: {
        token
      }
    })
      .then((response) => {
        dispatch(getUrlsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUrlsFailure(error.response.data.message));
      });
    };
  }

export function updateUrl(token, urlId, shortenedCharacters) {
  return (dispatch) => {
    return axios.put(`https://shotly-api.herokuapp.com/urls/${urlId}`, {
      shortened_characters: shortenedCharacters
    },
    {
      headers: {
        token
      }
    })
      .then((response) => {
        dispatch(updateUrlSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateUrlFailure(error.response.data.message));
      });
    };
  }

export function deleteUrl(token, urlId) {
  return (dispatch) => {
    return axios.delete(`https://shotly-api.herokuapp.com/urls/${urlId}`, {
      headers: {
        token
      }
    })
      .then((response) => {
        dispatch(deleteUrlSuccess(response.data));
      })
      .catch((error) => {    
        dispatch(deleteUrlFailure(error.response.data.message));
      });
    };
  }
