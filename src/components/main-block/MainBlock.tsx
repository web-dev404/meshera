import React from "react";
import { LinkPrimary } from "@components/UI/Links";
import clsx from "clsx";

import styles from "./MainBlock.module.scss";

export interface IMainBlock {
  title: string;
  buttonText: string;
  href: string;
  video: string;
  date?: {
    from: number | string;
    to: number | string;
  };
} 

export const MainBlock: React.FC<IMainBlock> = ({title, href, buttonText, video, date}) => {
  return (
    <section className={styles.main}>
      <div className={clsx(styles.main__container, "container")}>
        <div className={styles.main__body}>
          <div className={styles.main__content}>
            <h1 className={clsx(styles.main__title, "title")}>{title}</h1>
            <LinkPrimary href={href} label={buttonText} className={styles.link} />
          </div>
          {
            date ? (
              <div className={styles.main__date}>
                <div className={styles.main__value}>{date?.from}</div>
                <div className={styles.main__value}>{date?.to}</div>
              </div>
            )
            :
            null
          }
        </div>
      </div>
      <div className={styles.main__video}>
        <video src={video} loop muted autoPlay />
      </div>
    </section>
  )
}

const defaultProps: IMainBlock = {
  title: "Мы провели десятки туров и корпоративов на различных акваториях. ",
  buttonText: "Посмотреть туры",
  href: "/",
  video: "/video/01.mp4",
  date: {
    from: "13.01-15.01",
    to: "27.01-29.01"
  }
}

MainBlock.defaultProps = defaultProps;