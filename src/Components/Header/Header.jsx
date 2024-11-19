import React, { useState } from "react";
import logo from "../../images/Logo.svg";
import burgerIcon from "../../images/BurgerIcon.svg";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div
          className={menu ? styles.header_menu_bg : styles.header_menuDisabled}
        ></div>
        <Link className={styles.header_logo} to="/">
          <img src={logo} alt="" /> <h1>OTHER CODE</h1>
        </Link>
        <div className={styles.header_links_wrapper}>
          <button
            onClick={() => setMenu(!menu)}
            className={styles.header_menuButton}
          >
            {!menu ? <img src={burgerIcon} alt="" /> : <span>&times;</span>}
            <p>МЕНЮ</p>
          </button>
          <section
            className={menu ? styles.header_menu_active : styles.header_menu}
          >
            <NavLink to="/" className={styles.header_navLink}>
              Главная
            </NavLink>
            <NavLink className={styles.header_navLink} to="/projects">
              Проекты
            </NavLink>
            <NavLink className={styles.header_navLink} to="/services">
              Услуги
            </NavLink>
            <NavLink className={styles.header_navLink} to="/about">
              О нас
            </NavLink>
            <NavLink className={styles.header_navLink} to="/vacancies">
              Вакансии
            </NavLink>
            <NavLink className={styles.header_navLink} to="/blog">
              Блог
            </NavLink>
            <NavLink className={styles.header_navLink} to="/contact">
              Контакты
            </NavLink>
          </section>
          <Link to={"/"} className={styles.header_lastLink}>
            Обсудить задачу
          </Link>
        </div>
      </header>
    </>
  );
};
