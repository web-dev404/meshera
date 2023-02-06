import React from "react";
import clsx from "clsx";
import htmlToReact from "html-react-parser"

import styles from "./Descriptions.module.scss";

interface IDescription {
  id: number;
  title?: string;
  text: string;
}

interface IDescriptions extends React.ComponentPropsWithoutRef<"section"> {
  listOfDescriptions: IDescription[],
  noTopMargin?: boolean;
}

export const Descriptions: React.FC<IDescriptions> = ({ className, listOfDescriptions, noTopMargin }) => {
  return (
    <section className={clsx(styles.descriptions, className, { [styles.descriptions_noTopMargin]: noTopMargin })}>
      <div className={clsx(styles.descriptions__container, "container")}>
          {
            listOfDescriptions.map((obj) => {
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
                      {htmlToReact(obj.text)}
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
const defaultProps: IDescriptions = {
  listOfDescriptions: [
    {
      id: 0,
      text: `<span>Самые интересные локации</span> Москвы, Подмосковья и не только; Обучение основам <span>управления сапбордом;</span> Аренду оборудования; Скидки <span>постоянным клиентам;</span> Сотрудничество с Event- агенствами; <span>Индивидуальные программы</span> (корпоративы, дни рождения и тд); Помощь в выборе и покупке досок;`,
    }
  ],
}

export default defaultProps;

Descriptions.defaultProps = defaultProps;