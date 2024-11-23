import React, { useState } from "react";
import styles from "./Home.module.scss";
import "swiper/css";
import "swiper/css/pagination";
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
import i1 from "../../images/icon01.svg";
import i2 from "../../images/icon02.svg";
import i3 from "../../images/icon03.svg";
import i4 from "../../images/icon04.svg";
import i5 from "../../images/icon05.svg";
import i6 from "../../images/icon06.svg";
import prtnr1 from "../../images/image 6.svg";
import prtnr2 from "../../images/image.svg";
import prtnt3 from "../../images/image 8.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import vd from "../../images/видео для сайта (главная страница).mp4";
import vdp from "../../images/home.JPG";

export const Home = () => {
  const [diirect, setDirect] = useState(7);
  const [Faq, setFaq] = useState(7);
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.home_intro}>
        <video
          poster={vdp}
          src={vd}
          autoPlay
          muted
          loop
          className={styles.home_intro_bg}
        >
          <source src={vd} type="video/mp4" />
        </video>
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
          <button
            className={styles.home_button}
            onClick={() => navigate("/services")}
            style={{ zIndex: "9" }}
          >
            Подробнее
          </button>
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

              <section
                className={styles.home_directions_item_top}
                onClick={() => setDirect(diirect == index ? 7 : index)}
              >
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
            Каждая задача, выполняемая нами уникальна, и требует персонального
            подхода при выборе стека технологий для разработки и может сочетать
            в себе несколько языков программирования и фреймворков.
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
        <div className={styles.home_projects_carousel}>
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
            {projects.map((i, index) => (
              <SwiperSlide
                style={{ backgroundImage: `url(${i.bg})` }}
                key={index}
                className={styles.home_projects_item}
              >
                <h3 className={styles.home_h3}>{i.title}</h3>
                <section className={styles.home_projects_item_tags}>
                  {i.tags.map((t, index) => (
                    <p className={styles.home_projects_item_tag} key={index}>
                      {t}
                    </p>
                  ))}
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
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
                    {t}
                  </p>
                ))}
              </section>
            </div>
          ))}

          <button
            className={styles.home_button}
            onClick={() => navigate("/projects")}
          >
            Все проекты
          </button>
          <div className={styles.home_projects_item}>
            <h3 className={styles.home_h3}>Обсудим ваш проект?</h3>
            <p className={styles.home_body}>
              Выберите одно из направлений работы и заполните бриф пожалуйста
            </p>
            <form className={styles.home_projects_form}>
              <label className={styles.home_projects_form_label}>
                <input
                  type="radio"
                  name="a"
                  className={styles.home_projects_form_label_input}
                  value={1}
                />
                <p className={styles.home_projects_form_label_text}>
                  Веб-разработка
                </p>
              </label>
              <label className={styles.home_projects_form_label}>
                <input
                  type="radio"
                  name="a"
                  className={styles.home_projects_form_label_input}
                  value={2}
                />
                <p className={styles.home_projects_form_label_text}>
                  Blockchain-решения
                </p>
              </label>
              <label className={styles.home_projects_form_label}>
                <input
                  type="radio"
                  name="a"
                  className={styles.home_projects_form_label_input}
                  value={3}
                />
                <p className={styles.home_projects_form_label_text}>
                  Сопровождение проектов
                </p>
              </label>
              <label className={styles.home_projects_form_label}>
                <input
                  type="radio"
                  name="a"
                  className={styles.home_projects_form_label_input}
                  value={4}
                />
                <p className={styles.home_projects_form_label_text}>
                  Мобильная разработка
                </p>
              </label>
              <label className={styles.home_projects_form_label}>
                <input
                  type="radio"
                  name="a"
                  className={styles.home_projects_form_label_input}
                  value={5}
                />
                <p className={styles.home_projects_form_label_text}>
                  Продвижение и реклама
                </p>
              </label>
              <label className={styles.home_projects_form_label}>
                <input
                  type="radio"
                  name="a"
                  className={styles.home_projects_form_label_input}
                  value={6}
                />
                <p className={styles.home_projects_form_label_text}>
                  Комплексный проект
                </p>
              </label>
            </form>
            <label className={styles.home_projects_form_confirmLabel}>
              <input type="checkbox" />
              <p>
                Отправляя форму, вы соглашаетесь с политикой обработки
                персональных данных
              </p>
            </label>

            <button className={styles.home_button}>Заполнить бриф</button>
          </div>
        </div>
        <div className={styles.home_projects_item}>
          <h3 className={styles.home_h3}>Обсудим ваш проект?</h3>
          <p className={styles.home_body}>
            Выберите одно из направлений работы и заполните бриф пожалуйста
          </p>
          <form className={styles.home_projects_form}>
            <label className={styles.home_projects_form_label}>
              <input
                type="radio"
                name="a"
                className={styles.home_projects_form_label_input}
                value={1}
              />
              <p className={styles.home_projects_form_label_text}>
                Веб- разработка
              </p>
            </label>
            <label className={styles.home_projects_form_label}>
              <input
                type="radio"
                name="a"
                className={styles.home_projects_form_label_input}
                value={2}
              />
              <p className={styles.home_projects_form_label_text}>
                Blockchain- решения
              </p>
            </label>
            <label className={styles.home_projects_form_label}>
              <input
                type="radio"
                name="a"
                className={styles.home_projects_form_label_input}
                value={3}
              />
              <p className={styles.home_projects_form_label_text}>
                Сопровождение проектов
              </p>
            </label>
            <label className={styles.home_projects_form_label}>
              <input
                type="radio"
                name="a"
                className={styles.home_projects_form_label_input}
                value={4}
              />
              <p className={styles.home_projects_form_label_text}>
                Мобильная разработка
              </p>
            </label>
            <label className={styles.home_projects_form_label}>
              <input
                type="radio"
                name="a"
                className={styles.home_projects_form_label_input}
                value={5}
              />
              <p className={styles.home_projects_form_label_text}>
                Продвижение и реклама
              </p>
            </label>
            <label className={styles.home_projects_form_label}>
              <input
                type="radio"
                name="a"
                className={styles.home_projects_form_label_input}
                value={6}
              />
              <p className={styles.home_projects_form_label_text}>
                Комплексный проект
              </p>
            </label>
          </form>
          <label className={styles.home_projects_form_confirmLabel}>
            <input type="checkbox" />
            <p>
              Отправляя форму, вы соглашаетесь с политикой обработки
              персональных данных
            </p>
          </label>

          <button className={styles.home_button}>Заполнить бриф</button>
        </div>
      </div>

      <div className={styles.home_advantages}>
        <div className={styles.home_advantages_top}>
          <h3 className={styles.home_h3}>Экспертные преимущества</h3>
        </div>
        <div className={styles.home_advantages_wrapper}>
          {advantages.map((i) => (
            <Advantage i={i} />
          ))}
        </div>

        <div className={styles.home_advantages_carousel}>
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

      <div className={styles.home_partners}>
        <div className={styles.home_partners_top}>
          <h2 className={styles.home_h2}> Наши клиенты</h2>
        </div>
        <div className={styles.home_partners_wrapper}>
          {partners.map((p) => (
            <div className={styles.home_partners_item}>
              <img src={p} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.home_faq}>
        <div className={styles.home_faq_top}>FAQ</div>
        <div className={styles.home_faq_wrapper}>
          {faq.map((f, index) => (
            <div className={styles.home_faq_item}>
              <label className={styles.home_faq_item_top}>
                <h3
                  opnd={Faq == index ? "true" : "false"}
                  className={styles.home_h3}
                >
                  {f.q}
                </h3>
                <button
                  opnd={Faq == index ? "true" : "false"}
                  onClick={() => {
                    setFaq(Faq == index ? 6 : index);
                  }}
                  className={styles.home_h1}
                >
                  {Faq == index ? "-" : "+"}
                </button>
              </label>
              <p
                opnd={Faq == index ? "true" : "false"}
                className={styles.home_body}
              >
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Advantage = ({ i }) => {
  return (
    <div className={styles.home_advantages_item}>
      <section className={styles.home_advantages_item_top}>
        <img src={i.img} className={styles.home_advantages_item_img} alt="" />
        <h3 className={styles.home_h3}>{i.title}</h3>
      </section>
      <p className={styles.home_body}>{i.desc}</p>
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
      "Pwa-приложения, Android и iOS-приложения, кроссплатформенные приложения любой сложности.",
    img: second,
  },

  {
    name: "Blockchain-решения",
    description:
      "Смарт-контракты, DEX/CEX-платформы, Crypto-кошельки и криптовалютные обменники, крипто-чаты.",
    img: third,
  },

  {
    name: "UI/UX дизайн",
    description:
      "Проектируем интерфейсы с понятной архитектурой, визуализацией и функционалом.",
    img: fourth,
  },

  {
    name: "Машинное обучениe",
    description:
      "Системы машинного зрения, решения для работы с товарным ассортиментом, чат-боты, анализ данных.",
    img: fifth,
  },

  {
    name: "Сопровождение проектов",
    description:
      "В процессе эксплуатации продукта мы берём на себя качественное сопровождение и технический мониторинг проекта для его бесперебойной работы.",
    img: sixth,
  },
];

const projects = [
  {
    title: "Телеграмм-бот для службы такси, включая UX-дизайн Web application",
    tags: ["bot", "UX design"],
    bg: p1,
  },
  {
    title:
      "Инвестиционная платформа для клиентов, которые не могут напрямую взаимодействовать с иностранными биржами",
    tags: ["bloakchaine", "web"],
    bg: p2,
  },
  {
    title:
      "IDO крипто-площадка с возможностью подключения к сетям ETH, Solana и сторонних игровых сервисов",
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

const faq = [
  {
    q: "Берётесь ли вы за доработку чужого проекта?",
    a: "Большая часть наших проектов покрыта NDA и мы не можем рассказать о самых интересных приложениях, над которыми работали. Если вы расскажете нам о своём проекте, мы расскажем о нашем опыте в этой сфере и конечно сможем предложить решение",
  },
  {
    q: "Можно ли заказать определённый этап разработки?",
    a: "Большая часть наших проектов покрыта NDA и мы не можем рассказать о самых интересных приложениях, над которыми работали. Если вы расскажете нам о своём проекте, мы расскажем о нашем опыте в этой сфере и конечно сможем предложить решение",
  },
  {
    q: "Сможете сделать проект, если у вас в портфолио нет аналогов?",
    a: "Большая часть наших проектов покрыта NDA и мы не можем рассказать о самых интересных приложениях, над которыми работали. Если вы расскажете нам о своём проекте, мы расскажем о нашем опыте в этой сфере и конечно сможем предложить решение",
  },
  {
    q: "За какие проекты вы не берётесь и почему?",
    a: "Большая часть наших проектов покрыта NDA и мы не можем рассказать о самых интересных приложениях, над которыми работали. Если вы расскажете нам о своём проекте, мы расскажем о нашем опыте в этой сфере и конечно сможем предложить решение",
  },
  {
    q: "Занимаетесь ли вы поддержкой?",
    a: "Большая часть наших проектов покрыта NDA и мы не можем рассказать о самых интересных приложениях, над которыми работали. Если вы расскажете нам о своём проекте, мы расскажем о нашем опыте в этой сфере и конечно сможем предложить решение",
  },
];
