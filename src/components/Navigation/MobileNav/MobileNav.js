import React, { Fragment } from 'react';
import NavItem from '../NavItem/NavItem';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './MobileNav.module.css';


const MobileNav = props => (
    <Fragment>
        <Backdrop visible={props.open} clicked={props.toggle} />
        <nav 
            className={props.open ? `${styles.mobileNav} ${styles.open}` : `${styles.mobileNav}`}
            onClick={props.toggle}
        >
            <ul className={styles.mobileNavItems}>
                <NavItem link="/cabinet"><i className="fas fa-clinic-medical fa-lg"></i></NavItem>
                <NavItem link="/add"><i className="fas fa-plus-circle fa-lg"></i></NavItem>
                <NavItem link="/edit"><i className="fas fa-edit fa-lg"></i></NavItem>
                <NavItem exact link="/"><i className="fas fa-sign-out-alt fa-lg"></i></NavItem>
            </ul>
        </nav>
    </Fragment>
);

export default MobileNav;