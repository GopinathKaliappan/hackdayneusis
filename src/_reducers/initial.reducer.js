import { initialConstants } from '../_constants';

console.log(initialConstants)

const data = {
  startState: 'GET_STARTED'
}
export function initial(state = data , action) {
  switch (action.type) {
    case initialConstants.START_STATE:
      return {
        type: 'alert-success',
        startState: action.payload
      };
  
      default:
      return state
  }
}