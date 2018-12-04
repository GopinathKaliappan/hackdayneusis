import React, { Component, PropTypes  } from 'react';

// Package Imports 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions Imports  
import { initialAction } from '../../_actions';

// Components Imports 
import PhoneNumber from './PhoneNumber';
import GetStarted from './GetStarted';

const Pages = {
    'GET_STARTED': GetStarted,
    'PHONE': PhoneNumber
}


const Actions = {
	changeState: initialAction.changeState
};

export class GetstartedPage extends Component {

	constructor(props) {
		super(props);
		this.getComponent = this.getComponent.bind(this);
	}

	getComponent() {
		
			switch (this.props.startState) {
				case 'GET_STARTED': 
					return <GetStarted changeState={ this.props.changeState} />
				case 'PHONE': 
					return <PhoneNumber changeState={ this.props.changeState} />
				default: 
					return <div> Nothing </div>;	
			} 
		
	}
	render() {
		return (
			<div>
				{ this.getComponent()	}
			</div>
		)
	}
}
	
const mapStateToProps = ({ initial }) => {
	const { startState } = initial;
	return {
		startState
	}
}

const mapDispatchToProps = (dispartch) => {
	
	const { changeState } = Actions;
	
	return bindActionCreators({
		changeState 
	});
}

export default connect(mapStateToProps, mapDispatchToProps)(GetstartedPage);

