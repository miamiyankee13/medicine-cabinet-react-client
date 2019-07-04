import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

const NavItem = props => (
    <li className={styles.navItem}>
        <NavLink 
            to={props.link} 
            exact={props.exact} 
            onClick={props.clicked}
        >
            {props.children}
        </NavLink>
    </li>
);

export default NavItem;