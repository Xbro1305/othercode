import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import prtnr1 from "../../images/image 6.svg";
import prtnr2 from "../../images/image.svg";
import prtnt3 from "../../images/image 8.svg";
import i1 from "../../images/icon01.svg";
import i2 from "../../images/icon02.svg";
import i3 from "../../images/icon03.svg";
import i4 from "../../images/icon04.svg";
import i5 from "../../images/icon05.svg";
import i6 from "../../images/icon06.svg";
import styles from "./About.module.scss";
import animation from "../../images/Animation.svg";
import { Pagination } from "swiper/modules";
import vd from "../../images/видео для сайта (главная страница).mp4";

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_intro}>
        <video src={vd} autoPlay muted loop className={styles.about_intro_bg}>
          <source src={vd} type="video/mp4" />
        </video>
        <h1 className={styles.about_h1}>
          Уникальные цифровые продукты для бизнеса и государства
        </h1>
        <p className={styles.about_l1}>
          Помогаем создавать эффективные digital-продукты, основанные на
          глубокой аналитике и здравом смысле
        </p>
      </div>
      <div className={styles.about_advantages}>
        <div className={styles.about_advantages_top}>
          <h3 className={styles.about_h3}>Экспертные преимущества</h3>
        </div>
        <div className={styles.about_advantages_wrapper}>
          {advantages.map((i) => (
            <Advantage i={i} />
          ))}
        </div>

        <div className={styles.about_advantages_carousel}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              bulletClass: "swprpgntn",
              bulletActiveClass: "swprpgntn_active",
            }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {advantages.map((i) => (
              <SwiperSlide>
                <Advantage i={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.about_animation}>
        <div className={styles.about_animation_left}>
          <h2 className={styles.about_h2}>Технологии</h2>
          <p className={styles.about_body}>
            Каждая задача, выполняемая нами уникальна, и требует персонального
            подхода при выборе стека технологий для разработки и может сочетать
            в себе несколько языков программирования и фреймворков.
          </p>
        </div>
        <img src={animation} className={styles.about_animation_right} alt="" />
      </div>
      <div className={styles.about_partners}>
        <div className={styles.about_partners_top}>
          <h2 className={styles.about_h2}> Наши клиенты</h2>
        </div>
        <div className={styles.about_partners_wrapper}>
          {partners.map((p) => (
            <div className={styles.about_partners_item}>
              <img src={p} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const Advantage = ({ i }) => {
  return (
    <div className={styles.about_advantages_item}>
      <section className={styles.about_advantages_item_top}>
        <img src={i.img} className={styles.about_advantages_item_img} alt="" />
        <h3 className={styles.about_h3}>{i.title}</h3>
      </section>
      <p className={styles.about_body}>{i.desc}</p>
    </div>
  );
};

const partners = [
  prtnr1,
  prtnr2,
  prtnt3,
  prtnr1,
  prtnr1,
  prtnr2,
  prtnt3,
  prtnr1,
];
const advantages = [
  {
    title: "Объединяем технологии, дизайн и коммуникацию",
    img: i1,
    desc: "Независимо от сложности задачи, конечный продукт будет простым и понятным для конечного пользователя, благодаря слаженной и согласованной работе команды.",
  },
  {
    title: "Работаем с крупными проектами",
    img: i2,
    desc: "Наличие всех необходимых экспертиз в аналитике, юзабилити, проектировании, дизайне, разработке, тестировании, информационной безопасности и системном администрировании.",
  },
  {
    title: "Стабильный состав команды поддержки",
    img: i3,
    desc: "От постановки задачи до сдачи проекта клиент всегда взаимодействует с одним и тем же проектным офисом, что обеспечивает максимальную концентрацию на задаче клиента.",
  },
  {
    title: "Круглосуточный мониторинг проектов",
    img: i4,
    desc: "Наши специалисты постоянно отслеживают стабильность инфраструктуры проектов и в кратчайшие сроки исправляют неполадки.",
  },
  {
    title: "Непрерывно развиваемся и учимся",
    img: i5,
    desc: "Применяем инструменты методологий, улучшаем процесс с каждой следующей итерацией. Развиваем базу знаний. Обновляем инструкции на случай инцидентов.",
  },
  {
    title: "Сдавать проекты вовремя — наша суперсила",
    img: i6,
    desc: "Грамотное распределение задач внутри команды, чёткое понимание процессов и ответственный подход к работе гарантирует соблюдение временных сроков.",
  },
];
