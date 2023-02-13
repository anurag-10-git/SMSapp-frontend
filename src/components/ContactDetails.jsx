import React, { useContext } from 'react';
import classes from './ContactDetails.module.css';
import contactContext from '../Context/contactsContext';

const ContactDetails = (props) => {
    
    const {showDetailsBox} = useContext(contactContext);

    const showMessageModalHandler = ()=> {
        props.setShowModal(true);
    }

  return (
    <div className={classes.ContactDetails}>
        <p className={classes.ImageContainer}>
         <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="empty pic" />
        </p>
        <p className={classes.name}> {showDetailsBox.name}</p>
        <p className={classes.phone}>+91 {showDetailsBox.number}</p>
        <p className={classes.email}>email: {showDetailsBox.email}</p>
        <p className={classes.about}>about: {showDetailsBox.about}</p>
        <div className={classes.buttonsContainer}>
          <a href="#" onClick={showMessageModalHandler}>Send Message</a>
          <a href="">Send email</a>
        </div>
    </div>
  )
}

export default ContactDetails