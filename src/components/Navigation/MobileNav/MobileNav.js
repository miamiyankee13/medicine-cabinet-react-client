import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../../../actions/auth/auth';
import { clearAuthToken } from '../../../actions/auth/local-storage';
import NavItem from '../NavItem/NavItem';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './MobileNav.module.css';

class MobileNav extends Component {
    handleLogout = () => {
        console.log('log out')
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <Fragment>
                <Backdrop visible={this.props.open} clicked={this.props.toggle} />
                <nav 
                    className={this.props.open ? `${styles.mobileNav} ${styles.open}` : `${styles.mobileNav}`}
                    onClick={this.props.toggle}
                >
                    <ul className={styles.mobileNavItems}>
                        <NavItem link="/cabinet"><i className="fas fa-clinic-medical fa-lg"></i></NavItem>
                        <NavItem link="/add"><i className="fas fa-plus-circle fa-lg"></i></NavItem>
                        <NavItem link="/edit"><i className="fas fa-edit fa-lg"></i></NavItem>
                        <NavItem exact link="/" clicked={this.handleLogout}><i className="fas fa-sign-out-alt fa-lg"></i></NavItem>
                    </ul>
                </nav>
            </Fragment>
        );
    }
} 

    

export default connect()(MobileNav);