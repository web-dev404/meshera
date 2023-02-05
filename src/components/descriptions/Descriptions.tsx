import React from "react";
import clsx from "clsx";

import styles from "./Descriptions.module.scss";

interface IDescription {
  id: number;
  title?: string;
  text: string | React.ReactElement;
}

interface IDescriptions extends React.ComponentPropsWithoutRef<"section"> {
  dataListDescriptions: IDescription[],
}

export const Descriptions = ({ className, dataListDescriptions }: any) => {
  return (
    <section className={clsx(styles.descriptions, className)}>
      <div className={clsx(styles.descriptions__container, "container")}>
          {
            dataListDescriptions.map((obj) => {
              return (
                <article key={obj.id} className={clsx(styles.descriptions__item, { [styles.descriptions__item_min]: !obj.title })}>
                  <div className={styles.descriptions__titleBlock}>
                    {
                      obj.title ? 
                      <h4 className={styles.descriptions__title}>{obj.title}</h4>
                      :
                      null
                    }
                  </div>
                  <div className={styles.descriptions__text}>
                    <p className='text'>
                      {obj.text}
                    </p>
                  </div>
                </article>
              )
            })
          }
          
      </div>
    </section>
  )
}

export const defaultProps = {
  dataListDescriptions: [
    {
      id: 0,
      // title: "Descriptions",
      text: <> 
              <span>Самые интересные локации</span>
              Москвы, Подмосковья и не только; 
              Обучение основам <span>управления сапбордом;</span>
              Аренду оборудования; 
              Скидки <span>постоянным клиентам;</span> 
              Сотрудничество с Event- агенствами; 
              <span>Индивидуальные программы</span> (корпоративы, 
              дни рождения и тд); 
              Помощь в выборе и покупке досок;
            </>,
            
    }
  ],
}

Descriptions.defaultProps = defaultProps;