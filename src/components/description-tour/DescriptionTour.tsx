import React from "react";
import Image from "next/image";
import clsx from "clsx";

import styles from "./DescriptionTour.module.scss";

interface IDescriptionTour extends React.ComponentPropsWithoutRef<"section"> {
  listOfAdventages: {
    id: number,
    name: string,
  }[];
  title: string;
  text: string;
  backgroundImageUrl: string;
  coord: [number, number]
}

export const DescriptionTour: React.FC<IDescriptionTour> = ({ className, title, listOfAdventages, text, backgroundImageUrl, coord }) => {
  return (
    <section className={clsx(styles.description, className)}>
      <div className={styles.description__container}>
        <div className={styles.description__adventages}>
          {
            listOfAdventages.map(obj => (
              <div key={obj.id} className={clsx(styles.description__adventage, "_icon-star-main")}>
                <h5 className={styles.description__name}>{obj.name}</h5>
              </div>
            ))
          }
        </div>
        <div className={styles.description__info}>
          <h2 className={clsx(styles.description__title, "first-letter-fonts _icon-star-rate")}>{title}</h2>
          <p className={styles.description__text}>{text}</p>
        </div>
        <div className={styles.description__coord}>{coord.join(", ")}</div>
      </div>
      <div className={styles.description__image}>
        <Image fill src={backgroundImageUrl} alt='Фон для туров' />
      </div>
    </section>
  )
}

const defaultProps: IDescriptionTour = {
  listOfAdventages: [
    {
      id: 0,
      name: "Проживание"
    },
    {
      id: 1,
      name: "Услуги инструкторов"
    },
    {
      id: 2,
      name: "Туристические лыжи, палки ботинки"
    },
    {
      id: 3,
      name: "Питание на время тура"
    },
    {
      id: 4,
      name: "Баня"
    },
    {
      id: 5,
      name: "Билет в нацпарк"
    },
    {
      id: 6,
      name: "Страховка"
    },
  ],
  title: "Проведите новогодние выходные активно — прогулки на лыжах, снегоступах и простой сказочно-лесной трекинг",
  text: "Озеро Белое, Озеро Великое, Мещерский национальной парк, деревни Лункино, Корякино, Чесноково.",
  backgroundImageUrl: "/img/adventages/01.jpg",
  coord: [55.194870, 40.166803]
};

export default defaultProps;

DescriptionTour.defaultProps = defaultProps;