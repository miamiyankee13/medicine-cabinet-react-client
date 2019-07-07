import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import Button from '../UI/Button/Button';
import styles from './LandingPage.module.css';

class LandingPage extends Component {
    handleLogin = () => {
        this.props.history.push('/login');
    }

    handleRegistration = () => {
        this.props.history.push('/register');
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/cabinet" />;
        }

        return (
            <section className={styles.home} aria-live="polite">
                <p className={styles.intro}>
                    Medicine Cabinet offers a simple, unique way to journal about & 
                    keep track of medicinal cannabis strains.
                </p>
                <p className={styles.intro}>
                    What makes Medicine Cabinet special is the 
                    community aspect. The more each user shares the various experiences they have had with 
                    specific strains, the more information will be available to medical patients all over 
                    the world!
                </p>
                <p><strong>FOR USE BY ADULTS ONLY - AGES 21 & OLDER</strong></p>
                <div className={styles.buttons}>
                    <Button clicked={this.handleLogin}>Log In</Button>
                    <Button clicked={this.handleRegistration}>Register</Button>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);