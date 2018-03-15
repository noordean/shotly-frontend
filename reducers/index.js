import { combineReducers } from 'redux';

import { shortenedUrl } from './url';
import { userRegistration } from './user';

export default combineReducers({
  shortenedUrl,
  userRegistration
});
