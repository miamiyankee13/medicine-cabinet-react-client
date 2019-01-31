import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome to the dashboard {this.props.userName}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userName: state.auth.currentUser.userName,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));