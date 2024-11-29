import React, { useState } from "react";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import p5 from "../../images/p5.jpg";
import p6 from "../../images/p6.jpg";
import p7 from "../../images/p7.jpg";
import p8 from "../../images/p8.jpg";
import styles from "./Projects.module.scss";

export const Projects = () => {
  const [pr, setPr] = useState(projects);
  const [tag, setTag] = useState("Все проекты");
  const st = (name) => {
    const p = projects.filter((p) => p.tags.includes(name));
    setPr(p);
    if (name == "Все проекты") setPr(projects);
    setTag(name);
  };
  return (
    <div className={styles.projects}>
      <div className={styles.projects_top}>
        <h1 className={styles.projects_h1}>Проекты</h1>
        <p className={styles.projects_l1}>
          Разрабатываем сложные цифровые продукты, которые делают работу проще,
          понятнее и безопаснее.
        </p>
        <div className={styles.projects_item_tags}>
          {tags.map((t) => (
            <p
              onClick={() => st(t)}
              className={
                tag == t
                  ? styles.projects_item_tag_active
                  : styles.projects_item_tag
              }
            >
              {t}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.projects_wrapper}>
        {pr.map((i, index) => (
          <div
            style={{ backgroundImage: `url(${i.bg})` }}
            key={index}
            className={styles.projects_item}
          >
            <h3 className={styles.projects_h3}>{i.title}</h3>
            <section className={styles.projects_item_tags}>
              {i.tags.map((t, index) => (
                <p className={styles.projects_item_tag} key={index}>
                  {t}
                </p>
              ))}
            </section>
          </div>
        ))}
      </div>
      <div className={styles.projects_item}>
        <h3 className={styles.projects_h3}>Обсудим ваш проект?</h3>
        <p className={styles.projects_body}>
          Выберите одно из направлений работы и заполните бриф пожалуйста
        </p>
        <form className={styles.projects_form}>
          <label className={styles.projects_form_label}>
            <input
              type="radio"
              name="a"
              className={styles.projects_form_label_input}
              value={1}
            />
            <p className={styles.projects_form_label_text}>Веб- разработка</p>
          </label>
          <label className={styles.projects_form_label}>
            <input
              type="radio"
              name="a"
              className={styles.projects_form_label_input}
              value={2}
            />
            <p className={styles.projects_form_label_text}>
              Blockchain- решения
            </p>
          </label>
          <label className={styles.projects_form_label}>
            <input
              type="radio"
              name="a"
              className={styles.projects_form_label_input}
              value={3}
            />
            <p className={styles.projects_form_label_text}>
              Сопровождение проектов
            </p>
          </label>
          <label className={styles.projects_form_label}>
            <input
              type="radio"
              name="a"
              className={styles.projects_form_label_input}
              value={4}
            />
            <p className={styles.projects_form_label_text}>
              Мобильная разработка
            </p>
          </label>
          <label className={styles.projects_form_label}>
            <input
              type="radio"
              name="a"
              className={styles.projects_form_label_input}
              value={5}
            />
            <p className={styles.projects_form_label_text}>
              Продвижение и реклама
            </p>
          </label>
          <label className={styles.projects_form_label}>
            <input
              type="radio"
              name="a"
              className={styles.projects_form_label_input}
              value={6}
            />
            <p className={styles.projects_form_label_text}>
              Комплексный проект
            </p>
          </label>
        </form>
        <label className={styles.projects_form_confirmLabel}>
          <input type="checkbox" />
          <p>
            Отправляя форму, вы соглашаетесь с политикой обработки персональных
            данных
          </p>
        </label>
        <button className={styles.projects_button}>Заполнить бриф</button>
      </div>
    </div>
  );
};

const tags = [
  "Все проекты",
  "#blockchaine",
  "#web",
  "#UX design",
  "#mobile",
  "#bot",
  "#SEO",
];

const projects = [
  {
    title: "Телеграмм-бот для службы такси, включая UX-дизайн Web application",
    tags: ["#bot", "#UX design"],
    bg: p1,
  },
  {
    title:
      "Инвестиционная платформа для клиентов, которые не могут напрямую взаимодействовать с иностранными биржами",
    tags: ["#bloakchaine", "#web"],
    bg: p2,
  },
  {
    title:
      "IDO крипто-площадка с возможностью подключения к сетям ETH, Solana и сторонних игровых сервисов",
    tags: ["#blockchaine"],
    bg: p3,
  },
  {
    title: "Телеграмм-бот для службы такси, включая UX-дизайн Web application",
    tags: ["#bot", "#UX design"],
    bg: p6,
  },
  {
    title:
      "Заголовок проекта. Лучше, если он будет состоять из трех, четырех, но не более   пяти строк",
    tags: ["#bloakchaine", "#web"],
    bg: p7,
  },
  {
    title:
      "Заголовок проекта. Лучше, если он будет состоять из трех, четырех, но не более   пяти строк",
    tags: ["#blockchaine"],
    bg: p8,
  },
  {
    title:
      "Заголовок проекта. Лучше, если он будет состоять из трех, четырех, но не более   пяти строк",
    tags: ["#bot", "#UX design"],
    bg: p4,
  },
  {
    title:
      "Заголовок проекта. Лучше, если он будет состоять из трех, четырех, но не более   пяти строк",
    tags: ["#bloakchaine", "#web"],
    bg: p5,
  },
  {
    title: "Телеграмм-бот для службы такси, включая UX-дизайн Web application",
    tags: ["#bot", "#UX design"],
    bg: p1,
  },
];
