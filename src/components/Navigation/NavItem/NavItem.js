import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = props => (
    <li>
        <NavLink 
            to={props.link} 
            exact={props.exact} 
            //activeClassName={styles.active}
        >
            {props.children}
        </NavLink>
    </li>
);

export default NavItem;