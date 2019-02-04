import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './landing-page.css';

export class LandingPage extends React.Component {
    // If we are logged in redirect straight to the user's dashboard
    constructor(props) {
        super(props);

        this.goToLogin = this.goToLogin.bind(this);
    }

    goToLogin(event) {
        event.preventDefault();
        this.props.history.push(`/login`);
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard/cabinet" />;
        }

        return (
            <div className="home">
                <p>
                    Medicine Cabinet offers a simple, unique way to journal about & 
                    keep track of medicinal cannabis strains.
                </p>
                <br />
                <p>
                    What makes Medicine Cabinet special is the 
                    community aspect. The more each user shares the various experiences they have had with 
                    specific strains, the more information will be available to medical patients all over 
                    the world!
                </p>
                <img 
                    src="https://i.postimg.cc/mkSXbWqC/landing-page-img-1.jpg" 
                    alt="Green & Pink Cannabis Plant" 
                    height="225" width="300" 
                    className="landing-image" 
                />
                <button onClick={this.goToLogin}>Go to Login</button>
            </div>
    );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);