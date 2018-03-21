import { shortenedUrl, getUrls, updateUrl, deleteUrl } from '../../reducers/url';

const initialState = {
  shortenedUrl: {},
  errorMessage: ''
}

describe('Url Reducer', () => {
  it('should update the state when SHORTEN_URL_SUCCESS is passed', () => {
    const action = {
      type: 'SHORTEN_URL_SUCCESS',
      shortenedUrl: { id: 1, originalUrl: 'something' }
    };
    const expected = {
      shortenedUrl: { id: 1, originalUrl: 'something' },
      errorMessage: ''
    };
    const newState = shortenedUrl(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when SHORTEN_URL_FAILURE is passed', () => {
    const action = {
      type: 'SHORTEN_URL_FAILURE',
      errorMessage: 'An error occurred'
    };
    const expected = {
      shortenedUrl: {},
      errorMessage: 'An error occurred'
    };
    const newState = shortenedUrl(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should return the initial state if unidentified action type is passed for shortenUrl', () => {
    const action = {
      type: 'SHORTEN_UNRECOGNIZED'
    };
    const expected = {
      shortenedUrl: {},
      errorMessage: ''
    };
    const newState = shortenedUrl(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('should update the state when GET_URL_SUCCESS is passed', () => {
    const action = {
      type: 'GET_URL_SUCCESS',
      urls: { id: 1, originalUrl: 'something', user_id: 1 }
    };
    const expected = {
      urls: { id: 1, originalUrl: 'something', user_id: 1 },
      errorMessage: ''
    };
    const newState = getUrls({ errorMessage: '', urls: [] }, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when GET_URL_FAILURE is passed', () => {
    const action = {
      type: 'GET_URL_FAILURE',
      errorMessage: 'Invalid token'
    };
    const expected = {
      urls: [],
      errorMessage: 'Invalid token'
    };
    const newState = getUrls({ errorMessage: '', urls: [] }, action);
    expect(newState).toEqual(expected);
  });
  it('should return the initial state if an unidentified action type is passed getUrls', () => {
    const action = {
      type: 'GET_URL_UNRECOGNIZED'
    };
    const expected = {
      urls: [],
      errorMessage: ''
    };
    const newState = getUrls({ errorMessage: '', urls: [] }, action);
    expect(newState).toEqual(expected);
  });

  it('should update the state when UPDATE_URL_SUCCESS is passed', () => {
    const action = {
      type: 'UPDATE_URL_SUCCESS',
      url: { id: 1, originalUrl: 'something', user_id: 1 }
    };
    const expected = {
      url: { id: 1, originalUrl: 'something', user_id: 1 },
      errorMessage: ''
    };
    const newState = updateUrl({ errorMessage: '', url: {} }, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when UPDATE_URL_FAILURE is passed', () => {
    const action = {
      type: 'UPDATE_URL_FAILURE',
      errorMessage: 'Invalid token'
    };
    const expected = {
      url: {},
      errorMessage: 'Invalid token'
    };
    const newState = updateUrl({ errorMessage: '', url: {} }, action);
    expect(newState).toEqual(expected);
  });
  it('should return the initial state if an unidentified action type is passed to updateUrl', () => {
    const action = {
      type: 'UPDATE_URL_UNRECOGNIZED'
    };
    const expected = {
      url: {},
      errorMessage: ''
    };
    const newState = updateUrl({ errorMessage: '', url: {} }, action);
    expect(newState).toEqual(expected);
  });

  it('should update the state when DELETE_URL_SUCCESS is passed', () => {
    const action = {
      type: 'DELETE_URL_SUCCESS',
      message: { message: 'Link deleted successfully' }
    };
    const expected = {
      message: { message: 'Link deleted successfully' },
      errorMessage: ''
    };
    const newState = deleteUrl({ errorMessage: '', message: {} }, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when DELETE_URL_FAILURE is passed', () => {
    const action = {
      type: 'DELETE_URL_FAILURE',
      errorMessage: 'An error occurred'
    };
    const expected = {
      message: {},
      errorMessage: 'An error occurred'
    };
    const newState = deleteUrl({ errorMessage: '', message: {} }, action);
    expect(newState).toEqual(expected);
  });
  it('should return the initial state if an unidentified action type is passed to deleteUrl', () => {
    const action = {
      type: 'DELETE_URL_UNRECOGNIZED'
    };
    const expected = {
      message: {},
      errorMessage: ''
    };
    const newState = deleteUrl({ errorMessage: '', message: {} }, action);
    expect(newState).toEqual(expected);
  });
});
