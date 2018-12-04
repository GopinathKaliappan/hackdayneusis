import { initialConstants } from '../_constants';



function changeState(currentState) {
    return { 
    	type: initialConstants.START_STATE, 
    	payload: currentState 
    };
}

export const initialAction =  {
	changeState
};

