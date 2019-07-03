import React, { Component } from 'react';

class LandingPage extends Component {
    handleLogin = () => {
        this.props.history.push('/login');
    }

    handleRegistration = () => {
        this.props.history.push('/login');
    }
}

export default LandingPage;