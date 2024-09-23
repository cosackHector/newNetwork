import React from "react";
import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => isActive ? `${styles.item_active}` : `${styles.item}`;

const Navbar = () => {
  console.log('render navbar');
    return (
      <nav className = {styles.navbar}>
        <div className={styles.itemContainer}>
          <NavLink className={setActive} to="/profile">Моя страница</NavLink>
        </div>
        <div className={styles.itemContainer}>
          <NavLink className={setActive} to="/dialogs">Сообщения</NavLink>
        </div>
        <div className={styles.itemContainer}>
          <NavLink className={setActive} to="/friends">Пользователи</NavLink>
        </div>
        <div className={styles.itemContainer}>
          <NavLink className={setActive} to="/news">Новости</NavLink>
        </div>
        <div className={styles.itemContainer}>
          <NavLink className={setActive} to="/music">Музыка</NavLink>
        </div>
        <div className={styles.itemContainer}>
          <NavLink className={setActive} to="/settings">Настройки</NavLink>
        </div>
      </nav>
    );
  };

export default Navbar;