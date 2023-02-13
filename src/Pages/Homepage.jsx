import React, { useState } from 'react';
import Contactlist from '../components/Contactlist';
import Details from '../components/Details';
import classes from './Homepage.module.css';

const Homepage = () => {

  return (
    <div className={classes.homepage}>
        <Contactlist/>
        <Details/>
    </div>
  )
}

export default Homepage