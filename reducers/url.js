
const initialState = {
  shortenedUrl: {},
  errorMessage: ''
}

export function shortenedUrl(state = initialState, action) {
  switch (action.type) {
    case 'SHORTEN_URL_SUCCESS':
      return { ...state, shortenedUrl: action.shortenedUrl, errorMessage: '' };
    case 'SHORTEN_URL_FAILURE':
      return { ...state, errorMessage: action.errorMessage, shortenedUrl: {} };
    default:
      return state;
  }
}

export function getUrls(state = { urls: [], errorMessage: '' }, action) {
  switch (action.type) {
    case 'GET_URL_SUCCESS':
      return { ...state, urls: action.urls, errorMessage: '' };
    case 'GET_URL_FAILURE':
      return { ...state, errorMessage: action.errorMessage, urls: [] };
    default:
      return state;
  }
}

export function updateUrl(state = { url: {}, errorMessage: '' }, action) {
  switch (action.type) {
    case 'UPDATE_URL_SUCCESS':
      return { ...state, url: action.url, errorMessage: '' };
    case 'UPDATE_URL_FAILURE':
      return { ...state, errorMessage: action.errorMessage, url: {} };
    default:
      return state;
  }
}

export function deleteUrl(state = { message: {}, errorMessage: '' }, action) {
  switch (action.type) {
    case 'DELETE_URL_SUCCESS':
      return { ...state, message: action.message, errorMessage: '' };
    case 'DELETE_URL_FAILURE':
      return { ...state, errorMessage: action.errorMessage, message: {} };
    default:
      return state;
  }
}
