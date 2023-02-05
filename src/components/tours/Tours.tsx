import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import styles from "./Tours.module.scss";

interface ITourItem {
  id: number;
  imageUrl: string;
  href: string;
  title: string;
}

interface ITours extends React.ComponentPropsWithoutRef<"section"> {
  listTours: ITourItem[];
}

export const Tours = ({ className, listTours }: any) => {
  return (
    <section className={clsx(styles.tours, className)}>
      <div className={clsx(styles.tours__container, "container")}>
        <div className={styles.tours__body}>
          {
            listTours.map(tour => (
              <article key={tour.id} className={styles.tours__tour}>
                <Link href={tour.href} className={styles.tours__scope}>
                  <div className={styles.tours__content}>
                    <h4 className={styles.tours__title}>{tour.title}</h4>
                    <button type='button' className={styles.tours__link}>Участвовать</button>
                  </div>
                  <div className={styles.tours__image}>
                    <Image src={tour.imageUrl} fill alt='Dandelion in the field' />
                  </div>
                </Link>
              </article>
            ))
          }
        </div>
      </div>      
    </section>
  )
}

export const defaultProps = {
  listTours: [
    {
      id: 0,
      title: "Тур “Новогодний”",
      href: "/",
      imageUrl: "/img/tours/01.jpg"
    },
    {
      id: 1,
      title: "Тур “Зимние выходные”",
      href: "/",
      imageUrl: "/img/tours/02.jpg"
    },
    {
      id: 2,
      title: "Тур “Зимние выходные”",
      href: "/",
      imageUrl: "/img/tours/03.jpg"
    },
  ]
};

Tours.defaultProps = defaultProps;