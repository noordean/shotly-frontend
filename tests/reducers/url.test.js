import { shortenedUrl } from '../../reducers/url';
import { getUrls } from '../../reducers/url';

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
});
