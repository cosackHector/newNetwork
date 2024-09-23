import React, { useEffect } from "react";
import styles from "./Message.module.css"

const  Message = (
    {
      message
    }) => {

  console.log('render message');

      // КОМПОНЕНТ---->
    return (
        <div className={styles.message}>
          <div>{message}</div>
        </div>
    );
  };

export default Message;