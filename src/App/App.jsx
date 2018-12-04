import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import config from 'config';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import MainComponent from './MainContainer/MainContainer';
import SideBar from '../SideBar/SideBar';

const Header = (props) => (
    <div> 
        <div>  
            <h4>Neusis</h4>
            <p>Digitize your Values</p> 
        </div>
    </div>
);
    
class App extends React.Component {
    constructor(props) {
        console.log(config.apiUrl)
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (        

            <div className="jumbotron text-center">
                 <Router history={history}>
                        
                        <SideBar />

                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 