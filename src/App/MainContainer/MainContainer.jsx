import React from 'react';
// import { Router, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { connect } from 'react-redux';

import { history } from '../../_helpers';
import { alertActions } from '../../_actions';
import { PrivateRoute } from '../../_components';
import { HomePage } from '../../HomePage';
import { LoginPage } from '../../LoginPage';
import { RegisterPage } from '../../RegisterPage';



export const MainContainer = props => (
    <div className="container">
                     
                    <div>                      
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                    </div>
    </div>
);

export default MainContainer; 