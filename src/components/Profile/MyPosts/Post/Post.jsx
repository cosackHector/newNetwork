import React from "react";
import styles from "./Post.module.css"

const Post = ({message, like}) => {

  console.log('render Post');
  
  return (
    <div className = {styles.post}>
      <div className={styles.item}>
        <img src="https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg"/>
        <div className={styles.text}>
          {message}
        </div>
      </div>
      <div className={styles.likes_item}>
          Нравится 
          <span>{' ' + like}</span>
        </div>
    </div>
  );
};

export default Post;