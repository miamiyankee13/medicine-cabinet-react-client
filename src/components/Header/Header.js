import React from 'react';
import NavItem from '../Navigation/NavItem/NavItem';

const Header = props => (
    <header>
        <div>Logo</div>
        <div onClick={props.toggle}>Toggle Button</div>
        <nav>
            <ul>
                <NavItem link="/cabinet">My Cabinet</NavItem>
                <NavItem link="/add">Add Strain</NavItem>
                <NavItem link="/edit">Edit Strain</NavItem>
                <NavItem link="/">Log Out</NavItem>
            </ul>
        </nav>
    </header>
);
  
export default Header;