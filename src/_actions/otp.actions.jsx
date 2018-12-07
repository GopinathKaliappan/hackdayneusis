import { userConstants } from '../_constants';
import { otpService } from '../_services';
import { history } from '../_helpers';
import config from 'config';


function changeOTPStatus(otpStatus, user) { 
        return { 
            type: userConstants.CHANGE_OTP_STATUS, 
            payload: { 
                otpStatus, 
                user
            } 
        };
}

function requestOTP(phone) {

    

    return dispatch => {
        // dispatch(request({ phone }));
        dispatch(changeOTPStatus('requested'));
        
        otpService.requestOTP(phone)
            .then(
                user => {
                    dispatch(changeOTPStatus('received', user));
                    config.otp = '1234';

                },
                error => {

                }
            );
    };


}




export const otpActions = {
    requestOTP,
    changeOTPStatus 
};