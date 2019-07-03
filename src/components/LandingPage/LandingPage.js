import React, { Component } from 'react';
import Button from '../UI/Button/Button';

class LandingPage extends Component {
    handleLogin = () => {
        this.props.history.push('/login');
    }

    handleRegistration = () => {
        this.props.history.push('/register');
    }

    render() {
        return (
            <section className="home" aria-live="polite">
                <p>
                    Medicine Cabinet offers a simple, unique way to journal about & 
                    keep track of medicinal cannabis strains.
                </p>
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
                <div className="buttons">
                    <Button clicked={this.handleLogin}>Log In</Button>
                    <Button clicked={this.handleRegistration}>Register</Button>
                </div>
            </section>
        );
    }
}

export default LandingPage;