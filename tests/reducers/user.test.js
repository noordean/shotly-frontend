import { userRegistration } from '../../reducers/user';
import { userLogin } from '../../reducers/user';

const initialState = {
  userDetails: {},
  errorMessage: '',
  isAuthenticated: false
};

describe('User Reducer', () => {
  it('should update the state when USER_REG_SUCCESSFUL is passed', () => {
    const action = {
      type: 'USER_REG_SUCCESS',
      userDetails: { id: 1, username: 'noordean', token: 'some_jargons'}
    };
    const expected = {
      userDetails: { id: 1, username: 'noordean', token: 'some_jargons'},
      errorMessage: '',
      isAuthenticated: true
    };
    const newState = userRegistration(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when USER_REG_FAILURE is passed', () => {
    const action = {
      type: 'USER_REG_FAILURE',
      errorMessage: 'An error occurred'
    };
    const expected = {
      userDetails: {},
      errorMessage: 'An error occurred',
      isAuthenticated: false
    };
    const newState = userRegistration(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should return the state if unidentified action type is passed for registration', () => {
    const action = {
      type: 'USER_UNRECOGNIZED'
    };
    const expected = {
      userDetails: {},
      errorMessage: '',
      isAuthenticated: false
    };
    const newState = userRegistration(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('should update the state when LOGIN_SUCCESS is passed', () => {
    const action = {
      type: 'LOGIN_SUCCESS',
      userDetails: { id: 1, username: 'noordean', token: 'some_jargons'}
    };
    const expected = {
      userDetails: { id: 1, username: 'noordean', token: 'some_jargons'},
      errorMessage: '',
      isAuthenticated: true
    };
    const newState = userLogin(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when LOGIN_FAILURE is passed', () => {
    const action = {
      type: 'LOGIN_FAILURE',
      errorMessage: 'An error occurred'
    };
    const expected = {
      userDetails: {},
      errorMessage: 'An error occurred',
      isAuthenticated: false
    };
    const newState = userLogin(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should return the state if unidentified action type is passed for login', () => {
    const action = {
      type: 'LOGIN_UNRECOGNIZED'
    };
    const expected = {
      userDetails: {},
      errorMessage: '',
      isAuthenticated: false
    };
    const newState = userLogin(initialState, action);
    expect(newState).toEqual(expected);
  });
});
