import React from 'react';

// Package Imports 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


// Action Imports 
import { initialAction } from '../../_actions';




const Actions = {
	changeState: initialAction.changeState
};


export const PhoneNumberPage = props => (
	<div onClick={() => props.changeState('GET_STARTED')}> 
		Phone 
	</div>
);


const mapDispatchToProps = (dispatch) => {
	const { changeState } = Actions;
	return bindActionCreators({
		changeState
	}, dispatch)
}
export default connect(null, mapDispatchToProps)(PhoneNumberPage);

