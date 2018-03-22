import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { registerUser } from '../../actions/user';
import { loginUser } from '../../actions/user';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('User Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it('Should make a post request to register user', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/users', {
        status: 200,
        response: {
          userDetails: { id: 1, username: 'noordean', token: 'some_jargons' }
        }
      });
      const store = mockStore({});
      const expectedAction = [
      {
        type: 'USER_REG_SUCCESS',
        userRegistration: { userDetails: { id: 1, username: 'noordean', token: 'some_jargons' } },
      }];
      store.dispatch(
        registerUser({username: 'noordean', email: 'noo@gmail.com', password: 'noor123' }))
        .then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
      done();
  });

  it('should dispatch an error type if registration request is not successful', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/users', {
      status: 400,
      response: {
        message: 'An error occurred',
      }
      });
      const store = mockStore({});
      const expectedAction = [
      {
        type: 'USER_REG_FAILURE',
        errorMessage: 'An error occurred',
      }];
      store.dispatch(
      registerUser({}))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
      done();
  });

  it('Should make a post request to login user', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/login', {
        status: 200,
        response: {
          userDetails: { id: 1, username: 'noordean', token: 'some_jargons' }
        }
      });
      const store = mockStore({});
      const expectedAction = [
      {
        type: 'LOGIN_SUCCESS',
        userLogin: { userDetails: { id: 1, username: 'noordean', token: 'some_jargons' } },
      }];
      store.dispatch(
        loginUser({username: 'noordean', password: 'noor123' }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      done();
  });

  it('should dispatch an error type if login request is not successful', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/login', {
      status: 400,
      response: {
        message: 'An error occurred',
      }
      });
      const store = mockStore({});
      const expectedAction = [
      {
        type: 'LOGIN_FAILURE',
        errorMessage: 'An error occurred',
      }];
      store.dispatch(
        loginUser({}))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      done();
  });
});
