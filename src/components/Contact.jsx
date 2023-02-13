import React, { useContext } from 'react';
import contactContext from '../Context/contactsContext';
import classes from './Contact.module.css';

const Contact = (props) => {
  
    const { setShowDetails, detailBoxHandler } = useContext(contactContext);

    const showContactDetails = () => {
        detailBoxHandler(props.id);
        setShowDetails(true);
    }

  return (
    <li onClick={showContactDetails} className={classes.list}>
        <p>{props.name}</p>
        <p>+91 {props.phone}</p>
    </li>
  )
}

export default Contact