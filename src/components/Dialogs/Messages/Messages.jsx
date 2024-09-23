import React from "react";
import styles from "./Messages.module.css";
import Message from "./Message/Message";

const  Messages = (
    { messagesData,   
      newMessageText,
      onAddMassage,
      onUpdateMessageText }) => {

  console.log('render Messages');

    // КОМПОНЕНТ----->
    return (
        <div className={styles.messages}>
          {messagesData
            .map((msg, i) => 
              <Message 
                key={i} 
                message={msg.message} />)}
          <div className={styles.textarea}>
            <textarea 
              onChange={onUpdateMessageText} 
              value={newMessageText} 
              placeholder="Новое сообщение..."/>
            <button onClick={onAddMassage}>Отправить</button>
          </div>
        </div>
    );
  };

export default Messages;