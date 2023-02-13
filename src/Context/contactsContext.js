import React, { useState } from "react";

const contactContext = React.createContext();

const FULL_CONTACT = [
    {id: Math.random().toString(), name: "Anurag Mohan", number: "6206396234", email:"anuragmohan2022@gmail.com" ,about: "My friend, studying in Bangalore"},
    {id: Math.random().toString(), name: "Anu Singh", number: "9206596234", email:"kisannetwork@gmail.com" ,about: "My neighbour, friend since last 25 years"},
    {id: Math.random().toString(), name: "Golu Mohan", number: "9606396264", email:"anugolu@gmail.com" ,about:"Classmate, met in the year 2011"},
    {id: Math.random().toString(), name: "Anu Mehra", number: "7406391134", email: "ganggreen@gmail.com" ,about:"Relative, brother-in-law"},
    {id: Math.random().toString(), name: "Anurag Golu", number: "8106396221", email:"godaddy123@gmail.com" ,about:"Met during tain journey to Kerela"},
    {id: Math.random().toString(), name: "Ankush Agrarwal", number: "6706396244", email:"ksntwrk@gmail.com" ,about: "Random person, met on road"},
    {id: Math.random().toString(), name: "Somu Sharma", number: "9906396123", email:"givemejob@gmail.com" ,about:"Classmate , met in the year 2000"},
    {id: Math.random().toString(), name: "Saurabh Sagar", number: "5676396231", email: "idonthavejob@gmail.com" ,about:"Classmate, BCA section B"},
    {id: Math.random().toString(), name: "Royal Khan", number: "7706396232", email:"iamtryingforajob@gmail.com",about:"Random guy met in kolkata"},
]

export const ContactContextProvider = (props) => {

    const [showDetailsBox, setShowDetailsBox] = useState("");
    const [fullContact, setFullContact] = useState(FULL_CONTACT);
    const [showDetails, setShowDetails] = useState(false);

     const detailBoxHandler = (id) => {
         const filteredContact = fullContact.find(contact => contact.id.toString() === id.toString());
         setShowDetailsBox(filteredContact);
     }

    const showDetailsHandler = () => {
     setShowDetails(true);
    }

    return (
        <contactContext.Provider value={{fullContact , setFullContact , showDetailsBox ,showDetails, setShowDetails , detailBoxHandler, showDetailsHandler}}>{props.children}</contactContext.Provider>
    )
}

export default contactContext;