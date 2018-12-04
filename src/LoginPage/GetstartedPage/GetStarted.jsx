import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initialAction } from '../../_actions';

export const GetStarted = props => (
	<div 
		onClick={() => {
			props.changeState('PHONE')}
		}
		className={'col-md-12'}
	> 
		<div className={'col-md-6'}>
			<div className={'blue-half'}>
				Blue
			</div>
		</div>
		<div className={'col-md-6 blue-half'}>
			Get Started 
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		changeState: initialAction.changeState
	}, dispatch)
	
}
export default connect(null, mapDispatchToProps)(GetStarted); 

