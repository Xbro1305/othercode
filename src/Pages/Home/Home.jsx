import React, { useState } from "react";
import styles from "./Home.module.scss";
import first from "../../images/Vector.svg";
import second from "../../images/Vector (Stroke).svg";
import third from "../../images/Vector 2.svg";
import fourth from "../../images/Vector 3.svg";
import fifth from "../../images/Vector 4.svg";
import sixth from "../../images/Vector 5.svg";
import arrow from "../../images/directarrow.svg";
import animation from "../../images/Animation.svg";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import p5 from "../../images/p5.jpg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [diirect, setDirect] = useState(7);
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.home_intro}>
        {/* <img
          className={styles.home_intro_bg}
          src={require("../../images/home_intro.gif")}
        /> */}
        <h1 className={styles.home_h1}>
          Уникальные цифровые продукты для бизнеса и государства
        </h1>
        <p className={styles.home_l1}>
          Помогаем создавать эффективные digital-продукты, основанные на
          глубокой аналитике и здравом смысле
        </p>
      </div>

      <div className={styles.home_directions}>
        <section className={styles.home_directions_top}>
          <h2 className={styles.home_h2}>Направления работы</h2>
          <button className={styles.home_button}>Подробнее</button>
        </section>
        <div className={styles.home_directions_wrapper}>
          {directions.map((i, index) => (
            <div
              key={index}
              opened={diirect == index ? "true" : "false"}
              className={styles.home_directions_item}
            >
              <span className={styles.home_directions_item_topLine}></span>
              <span className={styles.home_directions_item_rightLine}></span>
              <span className={styles.home_directions_item_bottomLine}></span>
              <span className={styles.home_directions_item_leftLine}></span>

              <section className={styles.home_directions_item_top}>
                <img
                  src={i.img}
                  className={styles.home_directions_item_img}
                  alt={i.name}
                />

                <h3 className={styles.home_h3}>{i.name}</h3>

                <img
                  src={arrow}
                  opened={diirect == index ? "true" : "false"}
                  onClick={() => setDirect(diirect == index ? 7 : index)}
                  className={styles.home_directions_item_openButton}
                />
              </section>
              <p className={styles.home_body}>{i.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.home_animation}>
        <div className={styles.home_animation_left}>
          <h2 className={styles.home_h2}>Технологии</h2>
          <p className={styles.home_body}>
            Каждая задача, выполняемая нами уникальна, и требует персонального
            подхода при выборе стека технологий для разработки и может сочетать
            в себе несколько языков программирования и фреймворков.
          </p>
        </div>
        <img src={animation} className={styles.home_animation_right} alt="" />
      </div>

      <div className={styles.home_projects}>
        <div className={styles.home_projects_top}>
          <h2 className={styles.home_h2}>Выполненные проекты</h2>
          <button
            className={styles.home_button}
            onClick={() => navigate("/projects")}
          >
            Все проекты
          </button>
        </div>
        <div className={styles.home_projects_wrapper}>
          {projects.map((i, index) => (
            <div
              style={{ backgroundImage: `url(${i.bg})` }}
              key={index}
              className={styles.home_projects_item}
            >
              <h3 className={styles.home_h3}>{i.title}</h3>
              <section className={styles.home_projects_item_tags}>
                {i.tags.map((t, index) => (
                  <p className={styles.home_projects_item_tag} key={index}>
                    #{t}
                  </p>
                ))}
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const directions = [
  {
    name: "Web-разработка",
    description:
      "Web-приложения, сайты, интернет-магазины, программы лояльности, CRM-системы, порталы, онлайн сервисы.",
    img: first,
  },

  {
    name: "Мобильная разработка",
    description:
      "Pwa-приложения, Android и iOS-приложения, кроссплатформенные приложения любой сложности.",
    img: second,
  },

  {
    name: "Blockchain-решения",
    description:
      "Смарт-контракты, DEX/CEX-платформы, Crypto-кошельки и криптовалютные обменники, крипто-чаты.",
    img: third,
  },

  {
    name: "UI/UX дизайн",
    description:
      "Проектируем интерфейсы с понятной архитектурой, визуализацией и функционалом.",
    img: fourth,
  },

  {
    name: "Машинное обучениe",
    description:
      "Системы машинного зрения, решения для работы с товарным ассортиментом, чат-боты, анализ данных.",
    img: fifth,
  },

  {
    name: "Сопровождение проектов",
    description:
      "В процессе эксплуатации продукта мы берём на себя качественное сопровождение и технический мониторинг проекта для его бесперебойной работы.",
    img: sixth,
  },
];

const projects = [
  {
    title: "Телеграмм-бот для службы такси, включая UX-дизайн Web application",
    tags: ["bot", "UX design"],
    bg: p1,
  },
  {
    title:
      "Инвестиционная платформа для клиентов, которые не могут напрямую взаимодействовать с иностранными биржами",
    tags: ["bloakchaine", "web"],
    bg: p2,
  },
  {
    title:
      "IDO крипто-площадка с возможностью подключения к сетям ETH, Solana и сторонних игровых сервисов",
    tags: ["blockchaine"],
    bg: p3,
  },
  {
    title:
      "Заголовок проекта. Лучше, если он будет состоять из трех, четырех, но не более   пяти строк",
    tags: ["bot", "UX design"],
    bg: p4,
  },
  {
    title:
      "Заголовок проекта. Лучше, если он будет состоять из трех, четырех, но не более   пяти строк",
    tags: ["bloakchaine", "web"],
    bg: p5,
  },
];
