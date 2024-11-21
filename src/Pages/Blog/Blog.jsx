import React, { useState } from "react";
import p1 from "../../images/p1.jpg";
import styles from "./Blog.module.scss";

export const Blog = () => {
  const [pr, setPr] = useState(posts);
  const [tag, setTag] = useState("Все публикации");

  const st = (name) => {
    const p = posts.filter((p) => p.tags.includes(name));
    setPr(p);
    if (name == "Все публикации") setPr(posts);
    setTag(name);
  };

  return (
    <div className={styles.blog}>
      <div className={styles.blog_top}>
        <h1 className={styles.blog_h1}>Блог</h1>
        <div className={styles.blog_top_tags}>
          {tags.map((t) => (
            <p
              onClick={() => st(t)}
              className={
                tag == t ? styles.blog_top_tag_active : styles.blog_top_tag
              }
            >
              {t}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.blog_wrapper}>
        {pr.map((i) => (
          <div className={styles.blog_post}>
            <img src={i.img} className={styles.blog_post_img} alt="" />
            <h4 className={styles.blog_h4}>{i.title}</h4>
            <div className={styles.blog_post_tags}>
              {i.tags.map((t) => (
                <p className={styles.blog_post_tag}>{t}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const tags = [
  "Все публикации",
  "#blockchaine",
  "#web",
  "#UX design",
  "#mobile",
  "#bot",
  "#SEO",
];

const posts = [
  {
    img: p1,
    title:
      "Название поста. Несколько строк - две или три. Можно и в одну, но так будет скучнее. Ниже теги",
    tags: ["#blockchaine", "#web"],
  },
  {
    img: p1,
    title:
      "Название поста. Несколько строк - две или три. Можно и в одну, но так будет скучнее. Ниже теги",
    tags: ["#blockchaine", "#web"],
  },
  {
    img: p1,
    title:
      "Название поста. Несколько строк - две или три. Можно и в одну, но так будет скучнее. Ниже теги",
    tags: ["#blockchaine", "#web"],
  },
  {
    img: p1,
    title:
      "Название поста. Несколько строк - две или три. Можно и в одну, но так будет скучнее. Ниже теги",
    tags: ["#blockchaine", "#web"],
  },
  {
    img: p1,
    title:
      "Название поста. Несколько строк - две или три. Можно и в одну, но так будет скучнее. Ниже теги",
    tags: ["#blockchaine", "#web"],
  },
  {
    img: p1,
    title:
      "Название поста. Несколько строк - две или три. Можно и в одну, но так будет скучнее. Ниже теги",
    tags: ["#blockchaine", "#web"],
  },
];
