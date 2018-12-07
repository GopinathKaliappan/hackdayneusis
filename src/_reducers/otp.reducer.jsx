import { userConstants } from '../_constants';

// let user = JSON.parse(localStorage.getItem('user'));
//const initialState = user ? { otpStatus: 'verified', user } : { otpStatus: '' , user: { } };
let otp = JSON.parse(localStorage.getItem('otp'));
const initialState = otp ? otp : {  otpStatus: '', phone: '' };

export function otp(state = initialState, action) {
  console.log(initialState);
  let newState = { ...state };

  switch (action.type) {
    case userConstants.CHANGE_OTP_STATUS:
      return newState = { ...state, ...action.payload };
       
    case userConstants.OTP_VERIFIED:
      return {
        loggedIn: true,
        isLogging: false,
        otpStatus: 'verified',
        user: action.user
    };
    case userConstants.OPT_VERIFY:
      return {
        loggedIn: false,
        isLogging: false,
        otpStatus: 'received',
        user: action.user
      };
    case userConstants.LOGIN_FAILED:
      return {};
    default:
      return state
  }
}