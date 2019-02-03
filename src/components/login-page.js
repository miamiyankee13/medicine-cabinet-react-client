import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';

export class LoginPage extends React.Component {
    // If we are logged in redirect straight to the user's dashboard
    constructor(props) {
        super(props);

        this.goToRegistration = this.goToRegistration.bind(this);
    }

    goToRegistration(event) {
        event.preventDefault();
        this.props.history.push(`/register`);
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div className="login">
                <LoginForm />
                <button onClick={this.goToRegistration}>Register</button>
            </div>
    );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);