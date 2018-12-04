
function togglePane(isPaneOpened) {
    return { 
    	type: 'TOGGLE_PANE', 
    	payload: { 
    		isPaneOpened
    	} 
    };
}


export const uiActions = {
	togglePane
}