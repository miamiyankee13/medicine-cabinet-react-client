import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

export class Nav extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <ul>
                <li><Link to="/" onClick={() => this.logOut()}>Log Out</Link></li>
            </ul>
        )
    }
}

export default connect()(Nav);