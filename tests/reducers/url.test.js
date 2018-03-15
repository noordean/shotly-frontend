import { shortenedUrl } from '../../reducers/url';

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
  it('should return the initial state if unidentified action type is passed', () => {
    const action = {
      type: 'USER_UNRECOGNIZED'
    };
    const expected = {
      shortenedUrl: {},
      errorMessage: ''
    };
    const newState = shortenedUrl(initialState, action);
    expect(newState).toEqual(expected);
  });
});
