import React from "react";
import styles from "./DialogsPage.module.css"
import Dialog from "./DialogItem/Dialogs";
import MessagesContainer from "./Messages/MessagesContainer";

const  DialogsPage = (
    { dialogsData, 
      messagesData, 
      newMessageText, 
      dispatch }) => {

    console.log('render dialogsPage');

    // КОМПОНЕНТ---->
    return (
      <div className = {styles.dialogs_page}>
        {/* <Dialog 
          dialogsData={dialogsData} /> */}
        <MessagesContainer
          // newMessageText={newMessageText}
          // dispatch={dispatch}
          // messagesData={messagesData}
          />
      </div>
    );
  };

export default DialogsPage;