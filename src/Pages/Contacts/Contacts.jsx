import React from "react";
import styles from "./Contacts.module.scss";
import { Link } from "react-router-dom";
import tg from "../../images/Vector (7).svg";
import vk from "../../images/Vector (8).svg";
import s from "../../images/s.svg";
import linkedIn from "../../images/Vector (9).svg";

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts_left}>
        <h1 className={styles.contacts_h1}>Контакты</h1>
        <h4 className={styles.contacts_h4}>
          Общество с ограниченной <br />
          ответственностью «ДРУГОЙКОД» <br />
          ИНН 2634112452 <br />
          ОГРН 1232600011005
        </h4>
        <p className={styles.contacts_body}>
          355017, Россия, <br />
          г. Ставрополь, ул. Мира 319, <br />
          5 этаж, офис 6 <br /> <br />
          тел: <Link to="tel:+79197539289">+7 919 753-92-89</Link> <br />
          Email: <Link to="mailo:info@othercode.ru">info@othercode.ru</Link>
        </p>
        <div className={styles.contacts_socials}>
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
      <form className={styles.contacts_form}>
        <h4 className={styles.h4}>Расскажите нам о проекте</h4>

        <section>
          <input type="text" name="name" placeholder="Имя" />
          <label>
            <input type="phone" name="phone" />
            <p className={styles.contacts_form_placeholder}>+7</p>
          </label>
        </section>
        <input type="email" name="email" placeholder="E-mail" />
        <textarea name="text" id="" placeholder="Опишите задачу"></textarea>
        <button className={styles.contacts_form_button}>
          <img src={s} alt="" />
          Прикрепить файл
        </button>
        <section>
          <label className={styles.contacts_form_confirm}>
            <input type="checkbox" />
            <p>
              Отправляя форму, вы соглашаетесь с политикой обработки
              персональных данных
            </p>
          </label>
          <button className={styles.contacts_button}>Отправить</button>
        </section>
      </form>
    </div>
  );
};
