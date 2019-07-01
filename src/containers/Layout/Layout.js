import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/Navigation/MobileNav/MobileNav';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../Forms/LoginForm/LoginForm';

class Layout extends Component {
    state = {
        showMobileNav: false
    }

    handleMobileNavToggle = () => {
        this.setState(prevState => {
            return { showMobileNav: !prevState.showMobileNav };
        });
    }

    render() {
        return (
            <Fragment>
                <Header toggle={this.handleMobileNavToggle} />
                <MobileNav open={this.state.showMobileNav} toggle={this.handleMobileNavToggle} />
                <LoginForm />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;