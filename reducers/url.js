
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
