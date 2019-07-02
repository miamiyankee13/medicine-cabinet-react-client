import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/Navigation/MobileNav/MobileNav';
import Footer from '../../components/Footer/Footer';
import AddForm from '../Forms/AddForm/AddForm';

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
                <AddForm />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;