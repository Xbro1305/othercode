import React from "react";
import styles from "./Footer.module.scss";
import tg from "../../images/Vector (7).svg";
import vk from "../../images/Vector (8).svg";
import linkedIn from "../../images/Vector (9).svg";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_sect}>
        <div className={styles.footer_logo}>
          <img src={logo} alt="" />
          <h1>OTHER CODE</h1>
        </div>
        <p className={styles.footer_secondary}>
          © 2024 Все права защищены. <br /> Политика конфиденциальности
        </p>
      </div>
      <span className={styles.footer_line}></span>

      <div className={styles.footer_sect}>
        <p className={styles.footer_secondary}>
          <b>
            ООО «ДругойКод» <br />
          </b>
          Ставрополь, ул. Мира, 319 <br />
          <Link className={styles.footer_link} to="mailto:info@othercode.ru">
            info@othercode.ru
          </Link>
        </p>
        <Link className={styles.footer_link} to="tel:+79196549289">
          <b>+7 919 654-92-89</b>
        </Link>
      </div>
      <span className={styles.footer_line}></span>

      <div className={styles.footer_links_wrapper}>
        <section className={styles.footer_links}>
          <Link className={styles.footer_link} to="/projects">
            Проекты
          </Link>
          <Link className={styles.footer_link} to="/services">
            Услуги
          </Link>
          <Link className={styles.footer_link} to="/about">
            О нас
          </Link>
        </section>

        <section className={styles.footer_links}>
          <Link className={styles.footer_link} to="/vacancies">
            Вакансии
          </Link>
          <Link className={styles.footer_link} to="/blog">
            Блог
          </Link>
          <Link className={styles.footer_link} to="/contact">
            Контакты
          </Link>
        </section>
      </div>
      <span className={styles.footer_line}></span>

      <div className={styles.footer_sect}>
        <p className={styles.footer_secondary}>Мы в социальных сетях</p>
        <div className={styles.footer_social}>
          <Link>
            <img src={tg} alt="" />
          </Link>
          <Link>
            <img src={vk} alt="" />
          </Link>
          <Link>
            <img src={linkedIn} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
