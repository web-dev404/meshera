import React from "react";
import clsx from "clsx";
import htmlToReact from "html-react-parser";

import { useWindow } from "@hooks/useWindow";

import styles from "./TourIncluded.module.scss";

interface ITourIncude {
  id: number;
  title: string;
  text: string;
}

interface ITourIncluded extends React.ComponentPropsWithoutRef<"section"> {
  title: string;
  listOfTourInfos: ITourIncude[];
} 

export const TourIncluded: React.FC<ITourIncluded> = ({ className, listOfTourInfos, title }) => {
  const [isShowInfo, setIsShowInfo] = React.useState<boolean>(true);

  const { width } = useWindow();

  const isMobile = width ? width < 767.98 : null

  const handleClickShowInfo = () => setIsShowInfo(show => !show);

  return (
    <section className={clsx(styles.include, className, { [styles.include_show]: isShowInfo })}>
      <div className={clsx(styles.include__header, styles.header)}>
        <div className={clsx(styles.header__container, "container")}>
          <div className={styles.header__body}>
            <h2 className={clsx(styles.header__title, "first-letter-fonts")}>
              {title}
            </h2>
            {
              !isMobile ? (
                <button onClick={handleClickShowInfo} type='button' className={styles.header__show}>
                  <div className={styles.header__label}>РЕКОМЕНДУЕМ ВЗЯТЬ</div>
                  <span className={clsx(styles.header__icon, "_icon-angle-top")} />
                </button>
              )
              : null
            }
          </div>
        </div>
        {
          isMobile ? (
            <button onClick={handleClickShowInfo} type='button' className={styles.header__show}>
              <div className={styles.header__label}>РЕКОМЕНДУЕМ ВЗЯТЬ ЧТО ВКЛЮЧЕНО</div>
              <span className={clsx(styles.header__icon, "_icon-angle-top")} />
            </button>
          )
          : null
        }
      </div>
      <div className={styles.include__body}>
        <div className={clsx(styles.include__container, "container")}>
          <div className={styles.include__content}>
            {
              listOfTourInfos.map(tour => (
                <article key={tour.id} className={styles.include__item}>
                  <h4 className={styles.include__title}>{tour.title}</h4>
                  <div className={styles.include__text}>
                    <p>
                      {htmlToReact(tour.text)}
                    </p>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

const defaultProps: ITourIncluded = {
  title: "Тур “Новогодний” Информация",
  listOfTourInfos: [
    {
      id: 0,
      title: "РЕКОМЕНДУЕМ ВЗЯТЬ",
      text: `
        одежда по погоде (желательно соблюдение принципа слоёв - термобелье, слой флиса, куртки и штаны с ветрозащитой, жилетки) 
        варежки или лыжные перчатки, запасные носки
        баф или балаклава в дополнение к шапке
        пенопопа; кружка, ложка, вилка;
        личная косметичка и аптечка
        пару полотенец (для бани и душа) 
        тёплая домашняя одежда; тапочки
      `,
    },
    {
      id: 0,
      title: "ЧТО ВКЛЮЧЕНО",
      text: `
        Проживание (2 ночи);
        Услуги инструкторов;
        Туристические лыжи, палки ботинки;
        Питание на время тура: <br />
        <span>день 1 - </span> перекус на прогулке, домашний ужин; <br />
        <span>день 2 - </span> завтрак, обед на костре, домашний ужин; <br />
        <span>день 3 - </span> завтрак, домашний обед;<br />
        Баня (в один из дней);
        Билет в нацпарк;
        Страховка. 
      `,
    }
  ]
};

export default defaultProps;

TourIncluded.defaultProps = defaultProps;