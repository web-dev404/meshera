import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import SlideTourItem, { ISlideTourItem } from "@components/slide-tour-item/SlideTourItem";

import styles from "./PostArticleSlider.module.scss";
import "swiper/scss";
interface IPostArticleSlider extends React.ComponentPropsWithoutRef<"section"> {
  listOfArticles: ISlideTourItem[];
}

export const PostArticleSlider: React.FC<IPostArticleSlider> = ({ className, listOfArticles }) => {
  return (
    <section className={clsx(styles.article, className)}>
      <div className={styles.article__slider}>
        <Swiper
          modules={[Navigation, Autoplay]}
          observer
          observeParents
          grabCursor 
          speed={800}
          navigation={{
            prevEl: "." + styles.article__controll_left,
            nextEl: "." + styles.article__controll_right,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            767.98: {
              slidesPerView: 2,
            },
            991.98: {
              slidesPerView: 3,
              spaceBetween: 15,
            }
          }}
        >
          {
            listOfArticles.map(article => (
              <SwiperSlide key={article.id}>
                <SlideTourItem {...article} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className={styles.article__controlls}>
          <button type='button' className={clsx(styles.article__controll, styles.article__controll_left, "_icon-angle-top")} />
          <button type='button' className={clsx(styles.article__controll, styles.article__controll_right, "_icon-angle-top")} />
        </div>
      </div>
    </section>
  )
}

const defaultProps: IPostArticleSlider = {
  listOfArticles: [
    {
      id: 0,
      date: new Date(),
      href: "/",
      typeTrip: "Блог",
      typeSlide: "Туризм",
      title: "Походная баня – это специальная палатк. Походная баня – это специальная палатк.",
      imageUrl: "/img/articles/01.jpg"
    },
    {
      id: 1,
      date: new Date(),
      href: "/",
      typeTrip: "Блог",
      typeSlide: "Туризм",
      title: "Походная баня – это специальная палатк. Походная баня – это специальная палатк.",
      imageUrl: "/img/articles/02.jpg"
    },
    {
      id: 2,
      date: new Date(),
      href: "/",
      typeTrip: "Блог",
      typeSlide: "Туризм",
      title: "Походная баня – это специальная палатк. Походная баня – это специальная палатк.",
      imageUrl: "/img/articles/03.jpg"
    },
    {
      id: 3,
      date: new Date(),
      href: "/",
      typeTrip: "Блог",
      typeSlide: "Туризм",
      title: "Походная баня – это специальная палатк. Походная баня – это специальная палатк.",
      imageUrl: "/img/articles/01.jpg"
    },
    {
      id: 4,
      date: new Date(),
      href: "/",
      typeTrip: "Блог",
      typeSlide: "Туризм",
      title: "Походная баня – это специальная палатк. Походная баня – это специальная палатк.",
      imageUrl: "/img/articles/02.jpg"
    },
    {
      id: 5,
      date: new Date(),
      href: "/",
      typeTrip: "Блог",
      typeSlide: "Туризм",
      title: "Походная баня – это специальная палатк. Походная баня – это специальная палатк.",
      imageUrl: "/img/articles/03.jpg"
    },
  ],
}

PostArticleSlider.defaultProps = defaultProps;

export default defaultProps;