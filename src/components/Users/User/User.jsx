import React from "react";
import styles from "./User.module.css"
import avatar  from "../../../assets/avatar.jpg";

const User = ({
    user,
    onFollow,
}) => {

console.log('user render');

    return (
        <div className={styles.userContainer}>
            <div className={styles.avatarContainer}>
                <img className={styles.avatar} src={avatar} />
            </div>
            <div className={styles.nameContainer}>
                <h3 className={styles.name}>{user.name}</h3>
                <p className={styles.status}>status</p>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.btn} onClick={()=>onFollow(user.id)}>{user.followed ? '-' : '+'}</button>
            </div>
        </div>
    )
};

export default User;