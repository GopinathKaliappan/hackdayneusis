import config from 'config';
import { authHeader } from '../_helpers';





function requestOTP(phone) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
    };
    let user = { phone: phone, lastName: 'Kaliappan',  username: phone, password: '', token: '54asdasdsadsad' };
    // return user;

       return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
       //return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(()=> console.log('success'))
        .then(users => {
            // console.log('JSON.stringify(users)');
            console.log(users);
            user = { ...user, ...users };            
            
            config.otp = '1234';

            // }
                
            return user;
        });

         // return user;
}


export const otpService = {
    requestOTP,
};