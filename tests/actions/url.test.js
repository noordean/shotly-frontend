import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { shortenUrl } from '../../actions/url';
import { getUrls } from '../../actions/url';
import { updateUrl } from '../../actions/url';
import { deleteUrl } from '../../actions/url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

global.localStorage = {};

describe('Url Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it('Should make a post request to shorten url', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/urls', {
      status: 200,
      response: {
        shortenedUrl: { id: 1, original_url: 'something' },
        }
      });
      const store = mockStore({});
      const expectedAction = [
      {
          type: 'SHORTEN_URL_SUCCESS',
          shortenedUrl: { shortenedUrl: { id: 1, original_url: 'something' } },
      }];
      store.dispatch(
      shortenUrl('http://google.com/nonsense'))
      .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
      });
      done();
  });

  it('should dispatch an error type if request is not successful', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/urls', {
      status: 400,
      response: {
        message: 'Original url must be a valid url',
      }
      });
      const store = mockStore({});
      const expectedAction = [
      {
          type: 'SHORTEN_URL_FAILURE',
          errorMessage: 'Original url must be a valid url',
      }];
      store.dispatch(
      shortenUrl('http://google.com/nonsense'))
      .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
      });
      done();
  });

  it('Should make a GET request to get url', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/user/urls', {
      status: 200,
      response: {
        urls: { id: 1, original_url: 'something', user_id: 1 },
        }
      });
      const store = mockStore({});
      const expectedAction = [
      {
          type: 'GET_URL_SUCCESS',
          urls: { urls: { id: 1, original_url: 'something', user_id: 1 } },
      }];
      store.dispatch(
      getUrls('some_token'))
      .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
      });
      done();
  });

  it('should dispatch an error type if getUrls request is not successful', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/user/urls', {
      status: 400,
      response: {
        message: 'Invalid token supplied',
      }
      });
      const store = mockStore({});
      const expectedAction = [
      {
        type: 'GET_URL_FAILURE',
        errorMessage: 'Invalid token supplied',
      }];
      store.dispatch(
      getUrls('some_token'))
      .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
      });
      done();
  });

  it('Should make a PUT request to update url', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/urls/1', {
      status: 200,
      response: {
        url: { id: 1, original_url: 'something', user_id: 1 },
        }
      });
      const store = mockStore({});
      const expectedAction = [
      {
        type: 'UPDATE_URL_SUCCESS',
        url: { url: {id: 1, original_url: "something", user_id: 1} },
      }];
      store.dispatch(
      updateUrl('some_token', 1, 'some_chars'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
      done();
  });

  it('should dispatch an error type if updateUrl request is not successful', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/urls/1', {
      status: 400,
      response: {
        message: 'You are not authorized to do this',
      }
      });
      const store = mockStore({});
      const expectedAction = [
      {
          type: 'UPDATE_URL_FAILURE',
          errorMessage: 'You are not authorized to do this',
      }];
      store.dispatch(
      updateUrl('some_token', 1, 'some_chars'))
      .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
      });
      done();
  });

  it('Should make a DELETE request to delete url', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/urls/1', {
      status: 200,
      response: {
        message: 'Link deleted successfully'
        }
      });
      const store = mockStore({});
      const expectedAction = [
      {
        type: 'DELETE_URL_SUCCESS',
        message: { message: 'Link deleted successfully' },
      }];
      store.dispatch(
      deleteUrl('some_token', 1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
      done();
  });

  it('should dispatch an error type if deleteUrl request is not successful', (done) => {
      moxios.stubRequest('https://shotly-api.herokuapp.com/urls/1', {
      status: 400,
      response: {
        message: 'An error occurred',
      }
      });
      const store = mockStore({});
      const expectedAction = [
      {
        type: 'DELETE_URL_FAILURE',
        errorMessage: 'An error occurred',
      }];
      store.dispatch(
      deleteUrl('some_token', 1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
      done();
  });
});
