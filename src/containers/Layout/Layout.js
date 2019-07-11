import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/Navigation/MobileNav/MobileNav';
import Footer from '../../components/Footer/Footer';
import styles from './Layout.module.css';

class Layout extends Component {
    state = {
        showMobileNav: false
    }

    //toggle mobile nav visibility
    handleMobileNavToggle = () => {
        this.setState(prevState => {
            return { showMobileNav: !prevState.showMobileNav };
        });
    }

    //scroll to top of window
    handleScrollTop = () => {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <Fragment>
                <Header open={this.state.showMobileNav} toggle={this.handleMobileNavToggle} scrollTop={this.handleScrollTop} />
                <MobileNav open={this.state.showMobileNav} toggle={this.handleMobileNavToggle} scrollTop={this.handleScrollTop} />
                <main className={styles.main}>
                    {this.props.children}
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default connect()(Layout);