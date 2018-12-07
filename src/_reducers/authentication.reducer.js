import { userConstants } from '../_constants';




export function authentication(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        isLogging: true,
        loggedIn: false,
        otpStatus: 'requested',
        user: action.user
      };
    
    
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
        isLogging: false,
        otpStatus: '',
        user: { }
      };
    default:
      return state
  }
}