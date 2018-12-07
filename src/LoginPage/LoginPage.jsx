import React from 'react';
import { Link } from 'react-router-dom';
import config from 'config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OtpInput from 'react-otp-input';
import { history } from '../_helpers';
import { initialAction, otpActions } from '../_actions';
import './style.css';

import GetstartedPage from './GetstartedPage/GetstartedPage';


class LoginPage extends React.Component {
    constructor(props) {
        
        super(props);
        // localStorage.setItem('otp', {});
        this.state = {
            phone: '',
            password: '',
            submitted: false,
            initial: {
                isStarted: false,
                isPhoneNumberEntered: false                
            }
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.verifyOtp = this.verifyOtp.bind(this);
        this.handleState = this.handleState.bind(this);
        
    }
    
    componentDidMount() {
        if(this.props.otpStatus === '') {
           // this.props.logout();    
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
        const { phone } = this.state;
        const { dispatch } = this.props;
        if (phone) {
            this.props.requestOTP(phone);
        }
    }    
    verifyOtp(otp) {
        if(config.otp === otp) {
            localStorage.setItem('otp', JSON.stringify({ otpStatus: 'verified',  phone: this.state.phone }));
            this.props.changeOTPStatus('verified', { phone: this.state.phone });
            history.push('/dashboard');

        }
    }

    render() {
        const { otpStatus } = this.props;

        const { phone, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                 
                    {
                        otpStatus === 'received' ? 
                        <div>
                                Enter OTP
                                <OtpInput
                                  onChange={otp => { this.verifyOtp(otp) }}
                                  numInputs={4}
                                  separator={<span>-</span>}   
                                />
                                 
                        </div> : null  
                    }        
                    {
                            otpStatus === 'requested' ||  otpStatus === '' || otpStatus === undefined   ?
                            <div>
                                <form type="submit" onSubmit={this.handleSubmit}>
                                    <input type="text" name="phone" onChange={this.handleChange}/>
                                    <button type="submit" className={'btn-primary'} > Send otp </button>                  
                                </form>
                            </div> : 
                            null
                    }             
                        

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { otpStatus } = state.otp;
    console.log("=============================");
    console.log(otpStatus);
      return {
        otpStatus
    };
}

function mapDispatchToProps(dispatch) {
    console.log(otpActions);

     return bindActionCreators({
        requestOTP: otpActions.requestOTP,
        changeOTPStatus: otpActions.changeOTPStatus
    }, dispatch);
}
const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 

//export default connect(mapStateToProps, mapDispatchToProps)()