import React, { Fragment } from 'react';
import NavItem from '../NavItem/NavItem';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './MobileNav.module.css';


const MobileNav = props => (
    <Fragment>
        <Backdrop visible={props.open} clicked={props.toggle} />
        <nav 
            className={props.open ? `${styles.mobileNav} ${styles.open}` : `${styles.mobileNav}`}
            onClick={props.clicked}
        >
            <ul className={styles.mobileNavItems}>
                <NavItem link="/cabinet">My Cabinet</NavItem>
                <NavItem link="/add">Add Strain</NavItem>
                <NavItem link="/edit">Edit Strain</NavItem>
                <NavItem link="/">Log Out</NavItem>
            </ul>
        </nav>
    </Fragment>
);

export default MobileNav;