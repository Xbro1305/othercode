import React, { useState } from "react";
import styles from "./Services.module.scss";
import arrow from "../../images/Arrow.svg";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import p5 from "../../images/p5.jpg";
import p6 from "../../images/p6.jpg";
import p7 from "../../images/p7.jpg";
import p8 from "../../images/p8.jpg";

export const Services = () => {
  const [opened, setopened] = useState(0);
  return (
    <div className={styles.services}>
      <div className={styles.services_top}>
        <h1 className={styles.services_h1}>Услуги</h1>
        <h1 className={styles.services_l1}>
          Мы предлагаем полный комплекс услуг для проектов любого уровня
          сложности и стадии готовности — от начальной, когда есть лишь идея, до
          поддержки готового ресурса
        </h1>
      </div>
      <div className={styles.services_wrapper}>
        <div className={styles.services_wrapper_top}>
          <h2 className={styles.services_h2}>Web-разработка</h2>
          <h2 className={styles.services_l2}>
            Проектируем, разрабатываем, развиваем и поддерживаем веб‑проекты
          </h2>
        </div>

        {services.map((s, index) => (
          <div key={index} className={styles.services_item}>
            <div className={styles.services_item_left}>
              <div className={styles.services_item_left_top}>
                <img src={arrow} alt="" />
                <h3 className={styles.services_h3}>{s.title}</h3>
                <span className={styles.services_item_tag}>{s.tags}</span>
                <p className={styles.services_body}>{s.desc}</p>
              </div>
              <div className={styles.services_item_left_bottom}>
                {JSON.stringify(
                  projects.filter((p) => p.tags.includes(s.tag))
                ) != "[]" &&
                  projects
                    .filter((p) => p.tags.includes(s.tag))
                    .map((i, index) => {
                      return (
                        <div
                          style={{ backgroundImage: `url(${i.bg})` }}
                          key={index}
                          className={styles.projects_item}
                        >
                          <h3 className={styles.services_h3}>{i.title}</h3>
                          <section className={styles.projects_item_tags}>
                            {i.tags.map((t, index) => (
                              <p
                                className={styles.projects_item_tag}
                                key={index}
                              >
                                {t}
                              </p>
                            ))}
                          </section>
                        </div>
                      );
                    })}
              </div>
            </div>
            <div className={styles.services_item_right}>
              <div className={styles.services_item_right_wrapper}>
                {s.stages &&
                  s.stages.map((i, index) => {
                    return (
                      <div
                        onClick={() => setopened(opened == i.id ? 0 : i.id)}
                        className={styles.services_item_stage}
                      >
                        <p className={styles.services_item_stage_id}>
                          0{index + 1}
                        </p>
                        <h4 className={styles.services_h4}>{i.title}</h4>
                        <button
                          style={{ display: i.id ? "flex" : "none" }}
                          onClick={() => setopened(opened == i.id ? 0 : i.id)}
                        >
                          {opened == i.id ? "-" : "+"}
                        </button>
                        <p
                          opened={opened == i.id ? "true" : "false"}
                          className={styles.services_item_right_text}
                        >
                          {i?.desc}
                        </p>
                      </div>
                    );
                  })}
              </div>
              <div className={styles.services_item_right_wrapper}>
                {s.additional &&
                  s?.additional?.map((i, index) => {
                    return (
                      <div
                        onClick={() => setopened(opened == i.id ? 0 : i.id)}
                        className={styles.services_item_stage}
                      >
                        <h4 className={styles.services_h4}>{i.title}</h4>
                        <button
                          onClick={() => setopened(opened == i.id ? 0 : i.id)}
                        >
                          {opened == i.id ? "-" : "+"}
                        </button>
                        <p
                          opened={opened == i.id ? "true" : "false"}
                          className={styles.services_item_right_text}
                        >
                          {i?.desc}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
];

const services = [
  {
    title: "Разработка сайтов и сервисов",
    desc: "Создаём продуманные сайты компаний, отражающие фирменный стиль и привлекающие клиентов. Внимательно собираем понятную структуру услуг и направлений, поддерживаем визуалом. Воспринимаем сайт как инструмент и органично встраиваем в бизнес-процессы.",
    tags: "#site #service",
    tag: "#web",
    stages: [
      {
        title: "Исследование и проектирование",
        desc: "Связываем потребности бизнеса и целевой аудитории. Изучаем данные аналитики, пользовательский опыт текущего сайта и конкурентов, подбираем лучшие практики в отрасли. Собираем структуру проекта, готовим детализированные прототипы, опираясь на SEO-требования.",
        id: 1,
      },
      {
        title: "Дизайн",
        desc: "Итерационно создаём концепцию интерфейса, опираясь на позиционирование и фирменный стиль компании. Если нет брендбука, разрабатываем визуальные идентификаторы и константы для интерфейсов. Все идеи сверяем с разработчиками, учитывая сложность реализации.",
        id: 2,
      },
      {
        title: "Разработка",
        desc: "В зависимости от целей и сложности проекта подбираем стек. Процесс разработки выстраиваем в зависимости от выбранного стека, но всегда делим общий скоуп задач на короткие итерации с понятным результатом и регулярно проводим демо — и внутри команды, и для клиента.",
        id: 3,
      },
      {
        title: "Запуск",
        desc: "Обязательным шагом перед запуском проводим SEO-аудит, подключаем метрики и настраиваем аналитику для отслеживания целевых действий пользователей на сайте. По договорённости можем проводить тестовые запуски, перенося функционал частично. К этапу запуска на stage-среде имеем полностью протестированный проект, готовый к переносу на продакшен и посетителям. Настроим сервер или поможем специалистам со стороны клиента с подбором конфигурации. Если на сайте много контента, который можно менять через админ.панель, подготовим инструкцию или проведём обучение контент-специалиста клиента.  После запуска проекта остаёмся на связи и обсуждаем планы на развитие проекта.",
        id: 4,
      },
      {
        title: "Развитие и SEO",
        desc: "Создание сайта — первый шаг. После запуска начинается самое интересное: отслеживаем отклик пользователей через данные аналитики, проводим ux-тестирования, а/б-тесты. Собираем беклог задач и внедряем фичи итерациями. Переходим к глубокой seo-оптимизации проекта.",
        id: 5,
      },
    ],
  },
  {
    title: "Разработка чат-ботов",
    desc: "Создаём чат-боты, которые упрощают и ускоряют взаимодействие с клиентами и работу внутри компании. Помогаем не только с технической реализацией, продумываем точки контакта и проектируем сценарии работы. Интегрируемся в Telegram, Slack, Whatsapp, FB Messenger и другие популярные мессенджеры.",
    tags: "#bot",
    tag: "#bot",
    stages: [
      {
        title: "Концепция, продумывание логики и базовых сценариев",
      },
      {
        title: "Финализация сценариев и дизайн",
      },
      {
        title: "Разработка и тестирование",
      },
      {
        title: "Запуск",
      },
    ],
    additional: [
      {
        title: "Как устроена разработка",
        desc: "Серверную часть пишем на Python, сам бот выступает платформой для отправки и получения запросов от сервера. Реализуем сценарии через файлы конфигураторы, в которых можно быстро вносить правки по шагам или сообщениям. Для долгосрочных и крупных проектов разрабатываем админку, в которой можно управлять контентом и шагами сценария.",
        id: 6,
      },
      {
        title: "Дополнительно",
        desc: "Настраиваем аналитику для оценки эффективности бота. Вместе определяем отслеживаемые метрики и закладываем трекеры при разработке. Например, сколько людей прошли полный сценарий бота, а сколько не дошли до конца, сколько получили стикерпак или нажали на конкретную кнопку, оформили заказ и т.д. Выводим данные на удобный дашборд или в админку.",
        id: 7,
      },
    ],
  },
  {
    title: "Техническая поддержка и развитие сайтов",
    desc: "Поддерживаем работоспособность веб-проектов и помогаем развивать ваш сайт/сервис. Спроектируем, разработаем и внедрим обновление — сразу или через A/B-тест. Ускорим и оптимизируем ваш сайт.",
    tags: "#support",
    stages: [
      {
        title: "Техподдержка сайта",
        desc: "Обеспечим стабильную работу проекта, исключим неисправности, в заявленный срок устраним аварии. Наладим мониторинг доступности страниц, регулярное резервное копирование и проверку на вирусы. Проведём оптимизацию настроек. Возьмём на себя регулярные платежи и работу с хостинг-провайдером.",
        id: 8,
      },
      {
        title: "Сопровождение",
        desc: "С вами будет работать выделенный аккаунт-менеджер, с которым можно обсудить задачи по развитию вашего проекта и задействовать специалистов необходимых направлений.",
        id: 9,
      },
      {
        title: "Гарантийная и послегарантийная поддержка",
        desc: "Бесперебойная работа бизнеса клиента — наш главный результат. Мы даём 12 месяцев гарантий на выполненные работы. В период послегарантийного обслуживания мы всегда на связи и готовы оказать сопровождение.",
        id: 10,
      },
    ],
  },
];
