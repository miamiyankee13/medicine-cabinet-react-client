import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearAuth } from '../../actions/auth/auth';
import { clearAuthToken } from '../../actions/auth/local-storage';
import NavItem from '../Navigation/NavItem/NavItem';
import styles from './Header.module.css';

class Header extends Component { 
    handleLogout = () => {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
   
   render() {
       let navigation = null;
       let toggleButton = null;

       if (this.props.loggedIn) {
            navigation = (
                <nav className={styles.nav}>
                    <ul className={styles.navItems}>
                        <NavItem link="/cabinet"><i className="fas fa-clinic-medical fa-lg"></i></NavItem>
                        <NavItem link="/add"><i className="fas fa-plus-circle fa-lg"></i></NavItem>
                        <NavItem link="/edit"><i className="fas fa-edit fa-lg"></i></NavItem>
                        <NavItem exact link="/" clicked={this.handleLogout}><i className="fas fa-sign-out-alt fa-lg"></i></NavItem>
                    </ul>
                </nav>
            );
            toggleButton = (
                <i 
                    className={this.props.open 
                                ? ["fas fa-bars fa-lg", styles.toggleButton, styles.rotated].join(' ') 
                                : ["fas fa-bars fa-lg", styles.toggleButton].join(' ')} onClick={this.props.toggle}
                >
                </i>
            );
       }

       return (
            <header className={styles.header}>
                <div className={styles.headerBrand}>
                    <Link to="/cabinet" onClick={this.props.scrollTop}>
                        <h1 className={styles.headerBrandHeading}>Medicine Cabinet</h1>
                    </Link>
                </div>
                {toggleButton}
                {navigation}
            </header>
       );
   }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});
  
export default connect(mapStateToProps)(Header);