import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';

export class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);

        this.goBackToLogin = this.goBackToLogin.bind(this);
    }

    goBackToLogin(event) {
        event.preventDefault();
        this.props.history.push(`/login`);
    }
    
    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/cabinet" />;
        }
        return (
            <div className="register">
                <RegistrationForm />
                <button onClick={this.goBackToLogin}>Back to Login</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);