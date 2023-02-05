import React from "react";
import clsx from "clsx";

import styles from "./Adventages.module.scss";

interface IAdventageItem {
  id: number;
  title?: string | number;
  stars?: [boolean, boolean, boolean];
  subtitle: string;
}

interface IAdventages extends React.ComponentPropsWithoutRef<"section"> {
  listAdventageItems: IAdventageItem[];
}

export const Adventages: React.FC<IAdventages> = ({ className, listAdventageItems }) => {
  return (
    <section className={clsx(styles.adventages, className)}>
      <div className={clsx(styles.adventages__container, "container")}>
        <div className={styles.adventages__body}>
          {
            listAdventageItems.map(obj => (
              <div key={obj.id} className={styles.adventages__adventage}>
                {obj.stars?.length ? 
                  <div className={styles.adventages__stars}>
                    {obj.stars.map((isStar, _id) => (
                      <span key={_id} className={clsx(styles.adventages__star, { [styles.adventages__star_active]: isStar }, "_icon-star-main" )} />
                    ))}
                  </div>
                  :
                  <h4 className={styles.adventages__title}>
                    {obj.title}
                  </h4>
                }
                <div className={styles.adventages__subtitle}>{obj.subtitle}</div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
};

export const defaultProps = {
  listAdventageItems: [
    {
      id: 0,
      title: "20+",
      subtitle: "SUP-бордов"
    },
    {
      id: 1,
      title: "7",
      subtitle: "Туров"
    },
    {
      id: 2,
      title: "1200",
      subtitle: "Клиентов"
    },
    {
      id: 3,
      title: "42",
      subtitle: "Отзыва"
    },
  ],
};

Adventages.defaultProps = defaultProps;