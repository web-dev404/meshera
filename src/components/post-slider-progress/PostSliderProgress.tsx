import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import styles from "./PostSliderProgress.module.scss";
import "swiper/scss";

interface IPostSliderProgress extends React.ComponentPropsWithoutRef<"section"> {
  listOfImages: Array<{
    id: number;
    imageUrl: string;
    href: string;
  }>; 
}

export const PostSliderProgress: React.FC<IPostSliderProgress> = ({ className, listOfImages }) => {
  return (
    <section className={clsx(styles.slider, className)}>
      <Swiper 
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView='auto'
        observeParents
        grabCursor
        observer 
        speed={1200}
        pagination={{
          el: "." + styles.slider__pagination,
          type: "progressbar"
        }}
        navigation={{
          prevEl: "." + styles.slider__controll_left,
          nextEl: "." + styles.slider__controll_right,
        }}
      >
        {
          listOfImages.map(tour => (
            <SwiperSlide key={tour.id} className={styles.slider__slide}>
              <Link href={tour.href} className={styles.slider__link}>
                <Image alt='Люди плывут на лодках' src={tour.imageUrl} fill className={styles.slider__image} />
              </Link>
            </SwiperSlide>
          ))
        }
        <div className={styles.slider__pagination}></div>
        <div className={styles.slider__controlls}>
          <button type='button' className={clsx(styles.slider__controll, styles.slider__controll_left, "_icon-angle-top")} />
          <button type='button' className={clsx(styles.slider__controll, styles.slider__controll_right, "_icon-angle-top")} />
        </div>
      </Swiper>
    </section>
  )
}

const defaultProps: IPostSliderProgress = {
  listOfImages: [
    {
      id: 0,
      imageUrl: "/img/slider-progress/01.jpg",
      href: "/"
    },
    {
      id: 1,
      imageUrl: "/img/slider-progress/01.jpg",
      href: "/"
    },
    {
      id: 2,
      imageUrl: "/img/slider-progress/01.jpg",
      href: "/"
    },
    {
      id: 3,
      imageUrl: "/img/slider-progress/01.jpg",
      href: "/"
    },
    {
      id: 4,
      imageUrl: "/img/slider-progress/01.jpg",
      href: "/"
    },
  ],
}; 

export default defaultProps;