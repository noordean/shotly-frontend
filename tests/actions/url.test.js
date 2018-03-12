import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { shortenUrl } from '../../actions/url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

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
});
