import React from "react";
import styles from "./ProfileInfo.module.css" 

const ProfileInfo = () => {

  console.log('render profileInfo');

  return (
    <div className={styles.wrapper}>
      <div>Аватар</div>
      <div>Описание</div>
    </div>
  );
};

export default ProfileInfo;