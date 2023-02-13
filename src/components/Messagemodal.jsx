import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./messageModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal} />;
};

const ModalOverlay = () => {
  const [messageBoxValue, setMessageBoxValue] = useState("");

  const sendMessageHandler = async () => {
    const res = await fetch("https://sms-app-backend.onrender.com/api/user/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: messageBoxValue }),
    });

    const resData = await res.json();

    console.log(resData);

  };

  const textChangeHandler = (e) => {
    setMessageBoxValue(e.target.value);
  };

  return (
    <div className={classes.modal}>
      <div>
        <textarea
          name="messagebox"
          id="messagebox"
          placeholder="write your message..."
          onChange={textChangeHandler}
        ></textarea>
        <button onClick={sendMessageHandler}>Send Message</button>
      </div>
    </div>
  );
};

const Messagemodal = (props) => {
  const closeModal = () => {
    props.showModal(false);
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Messagemodal;
