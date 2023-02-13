import React, { useContext, useState } from 'react';
import contactContext from '../Context/contactsContext';
import ContactDetails from './ContactDetails';
import classes from './Details.module.css';
import Messagemodal from './Messagemodal';

const Details = () => {
 
    const [showModal, setShowModal] = useState(false);
    const {showDetails, fullContact } = useContext(contactContext);



  return (
    <div className={classes.details}>
        {showModal && <Messagemodal showModal={setShowModal}/>}
       {showDetails ? (<ContactDetails setShowModal={setShowModal}/>) : (<h3 className={classes.noDetails}>Click on a contact to see details</h3>)}
    </div>
  )
}

export default Details