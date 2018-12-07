import React from 'react';

import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
    }

    handleDeleteUser(id) {
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>Home</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };