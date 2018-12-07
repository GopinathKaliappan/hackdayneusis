import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { initial } from './initial.reducer';
import { ui } from './ui.reducer';
import { otp } from './otp.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  initial,
  otp
});

export default rootReducer;