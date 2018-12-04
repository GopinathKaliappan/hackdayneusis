import uiConstants from '../_constants';



const data = {
  isPaneOpened: true
}
export function ui(state = data , action) {
    let newState = { ...state };
  switch (action.type) {
    case uiConstants.TOGGLE_PANE:
        return newState = { ...newState, ...action.payload };
      default:
      return state
  }
}