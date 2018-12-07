import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OtpInput from 'react-otp-input';
import { history } from '../_helpers';
import { initialAction } from '../_actions';
import { optActions } from '../_actions';
import './style.css';

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
        
    }
    
    componentDidMount() {
        if(this.props.otpStatus === '') {
            this.props.logout();    
        }
        
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
    componentWillReceiveProps(nextProps) {
        
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        this.setState({ submitted: true });
        const { username } = this.state;
        const { dispatch } = this.props;
        if (username) {
            this.props.sendOtp(username);
        }
    }

    render() {
        const { loggingIn, otpStatus } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1> Login </h1>
                
                    {
                        otpStatus === 'received' ? 
                        <div>
                            <form type="submit" onSubmit={this.handleSubmit}>  
                                Enter OTP
                                <OtpInput
                                  onChange={otp => console.log(otp)}
                                  numInputs={4}
                                  separator={<span>-</span>}

                                  
                                />
                            </form>
                        </div> :                     
                        <div>
                            <form type="submit" onSubmit={this.handleSubmit}>
                                <input type="text" name="username" onChange={this.handleChange}/>
                                <button type="submit" className={'btn-primary'} > Login </button>                  
                            </form>
                        </div>
                    }


            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggedIn, isLogging, otpStatus } = state.authentication;
    const { startState } = state.initial;
    console.log(isLogging);
    return {
        loggedIn,
        isLogging,
        startState,
        otpStatus
    };
}

function mapDispatchToProps(dispatch) {
    const { changeState } = initialAction;
    console.log(changeState);
    return bindActionCreators({
        changeState,
        login: userActions.login,
        logout: userActions.logout,
        sendOtp: userActions.sendOtp
    }, dispatch);
}
const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 

//export default connect(mapStateToProps, mapDispatchToProps)()