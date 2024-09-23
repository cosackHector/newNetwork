import React from "react";
import styles from "./Dialog.module.css"
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => isActive ? `${styles.dialog_item_active}` : `${styles.dialog_item}`;

const  Dialog = ({name, id}) => {
return (
        <div className={styles.wrapper}>
            <NavLink className={setActive} to={'dialog/' + id}>{name}</NavLink>
        </div>
)};

export default Dialog;
