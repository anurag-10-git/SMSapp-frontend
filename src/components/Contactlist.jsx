import React, { useContext } from 'react';
import Contact from './Contact';
import classes from './Contactlist.module.css';
import contactContext from '../Context/contactsContext';

const Contactlist = () => {

    const {fullContact} = useContext(contactContext);

  return (
    <div className={classes.contactlist}>
        <h3>My contacts</h3>
        <ul>
           {fullContact.map(contact => (<Contact key={contact.id} id={contact.id} name={contact.name} phone={contact.number}/>))}       
       </ul>
        </div>
  )
}

export default Contactlist