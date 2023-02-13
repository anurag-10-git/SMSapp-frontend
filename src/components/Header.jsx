import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
     <nav className={classes.navbar}>
       <ul>
        <li>Home</li>
        <li>Messages </li>
        <li>Add Contact +</li>
       </ul>
     </nav>
  )
}

export default Header;