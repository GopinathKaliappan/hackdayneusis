import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userActions } from '../_actions';
import { initialAction } from '../_actions';
//import './style.scss';

import GetstartedPage from './GetstartedPage/GetstartedPage';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false,
            initial: {
                isStarted: false,
                isPhoneNumberEntered: false                
            }
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleState = this.handleState.bind(this);
        this.props.logout();
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleState(key) {
        this.setState({
            [key]: true
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <GetstartedPage 
                    startState={this.props.startState} 
                    changeState={this.props.changeState}
                />                               
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    const { startState } = state.initial;
    console.log(startState);
    return {
        loggingIn,
        startState
    };
}

function mapDispatchToProps(dispatch) {
    const { changeState } = initialAction;
    console.log(changeState);
    return bindActionCreators({
        changeState,
        login: userActions.login,
        logout: userActions.logout,
    }, dispatch);
}
const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 

//export default connect(mapStateToProps, mapDispatchToProps)()