import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import SlideTourItem, { ISlideTourItem } from "@components/slide-tour-item/SlideTourItem";

import "swiper/scss";
import styles from "./SliderTours.module.scss";

interface ISliderTours extends React.ComponentPropsWithoutRef<"section"> {
  listSlideItems: ISlideTourItem[];
}

export const SliderTours = ({ className, listSlideItems }: any) => {
  
  return (
    <section className={clsx(styles.slider, className)}>
      <div className={clsx(styles.slider__container, "container")}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          observeParents
          grabCursor
          observer 
          speed={1200}
          pagination={{
            type: "fraction",
            el: ".pagination-fraction",
            renderFraction(currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>/<span class="' + totalClass +'"></span>';
            },
          }}
          navigation={{ 
            nextEl: ".slider-right",
            prevEl: ".slider-left",
          }}
          spaceBetween={10}
          slidesPerView={1}
          className={styles.slider__slider}
          breakpoints={{
            767.98: {
              spaceBetween: 15,
              slidesPerView: 2
            },
            1280: {
              spaceBetween: 20,
              slidesPerView: "auto"
            },
            1875: {
              spaceBetween: 25,
              slidesPerView: 3
            },
          }}
        >
          {
            listSlideItems.map(tour => (
              <SwiperSlide className={clsx(styles.slider__slide)} key={tour.id}>
                <SlideTourItem {...tour} />
              </SwiperSlide>
            ))
          }
          <div className={styles.slider__controllers}>
            <button type='button' className={clsx(styles.slider__controll, styles.slider__controll_left, "_icon-angle-top slider-left")} />
            <div className={clsx(styles.slider__pagination, "pagination-fraction")}>

            </div>
            <button type='button' className={clsx(styles.slider__controll, styles.slider__controll_right, "_icon-angle-top slider-right")} />
          </div>
        </Swiper>
      </div>
    </section>
  )
}

const defaultProps: ISliderTours = {
  listSlideItems: [
    {
      id: 0,
      date: new Date(),
      title: "Походная баня – это специальная палатк. Походная баня – это специальная палатк",
      imageUrl: "/img/banners/02.jpg",
      href: "/",
      typeSlide: "Блог",
      typeTrip: "Туризм"
    },
    {
      id: 1,
      date: new Date(),
      title: "Походная баня – это специальная палатк. Походная баня – это специальная палатк",
      imageUrl: "/img/banners/02.jpg",
      href: "/",
      typeSlide: "Блог",
      typeTrip: "Туризм"
    },
    {
      id: 2,
      date: new Date(),
      title: "Походная баня – это специальная палатк. Походная баня – это специальная палатк",
      imageUrl: "/img/banners/02.jpg",
      href: "/",
      typeSlide: "Блог",
      typeTrip: "Туризм"
    },
    {
      id: 3,
      date: new Date(),
      title: "Походная баня – это специальная палатк. Походная баня – это специальная палатк",
      imageUrl: "/img/banners/02.jpg",
      href: "/",
      typeSlide: "Блог",
      typeTrip: "Туризм"
    },
  ],
}

export default defaultProps;

SliderTours.defaultProps = defaultProps;