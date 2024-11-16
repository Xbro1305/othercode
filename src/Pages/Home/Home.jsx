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

export const Home = () => {
  const [diirect, setDirect] = useState(7);
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
              aria-opened={diirect == index ? true : false}
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
                  aria-opened={diirect == index ? true : false}
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
