import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../Navigation/NavItem/NavItem';
import styles from './Header.module.css';

const Header = props => (
    <header className={styles.header}>
        <div className={styles.headerBrand}>
            <Link to="/cabinet">
                <h1 className={styles.headerBrandHeading}>Medicine Cabinet</h1>
            </Link>
        </div>
        <i 
            className={props.open 
                        ? ["fas fa-bars fa-lg", styles.toggleButton, styles.rotated].join(' ') 
                        : ["fas fa-bars fa-lg", styles.toggleButton].join(' ')} onClick={props.toggle}
        >
        </i>
        <nav className={styles.nav}>
            <ul className={styles.navItems}>
                <NavItem link="/cabinet"><i className="fas fa-clinic-medical fa-lg"></i></NavItem>
                <NavItem link="/add"><i className="fas fa-plus-circle fa-lg"></i></NavItem>
                <NavItem link="/edit"><i className="fas fa-edit fa-lg"></i></NavItem>
                <NavItem exact link="/"><i className="fas fa-sign-out-alt fa-lg"></i></NavItem>
            </ul>
        </nav>
    </header>
);
  
export default Header;