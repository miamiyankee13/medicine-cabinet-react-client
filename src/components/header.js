import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import './header.css';

export class Header extends React.Component {
    render() {
        let navigation;
        if (this.props.loggedIn) {
            navigation = (
                <nav>
                    <Nav />
                </nav>
            );
        } else {
            navigation = ''
        }

        return (
            <header roll="banner" className="flex-top">
                <h1>Medicine Cabinet</h1>
                {navigation}
            </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);