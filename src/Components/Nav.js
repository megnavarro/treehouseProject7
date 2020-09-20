import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className="main-nav">
    <ul>
        <li><NavLink to='/cats' activeClassName="active">Cats</NavLink></li>
        <li><NavLink to='/dogs' activeClassName="active">Dogs</NavLink></li>
        <li><NavLink to='/birds' activeClassName="active">Birds</NavLink></li>
    </ul>
    </nav>
  );
  
export default Nav;