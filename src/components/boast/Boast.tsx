import React from "react";
import clsx from "clsx";

import styles from "./Boast.module.scss";

interface IBoast extends React.ComponentPropsWithoutRef<"section"> {
  title: string;
  subtitle: string;
}

export const Boast: React.FC<IBoast> = ({ title, subtitle, className }) => {
  return (
    <section className={clsx(styles.boast, className)}>
      <div className={clsx(styles.boast__container, "container")}>
        <div className={styles.boast__meta}>
          <span className={clsx(styles.boast__icon, styles.boast__icon_top, "_icon-star-rate")}></span>
          <h2 className={clsx(styles.boast__title, "title")}>{title}</h2>
          <span className={clsx(styles.boast__icon, styles.boast__icon_bottom, "_icon-star-rate")}></span>
        </div>
        <div className={styles.boast__subtitle}>
          {subtitle}
        </div>
      </div>
    </section>
  )
};

const defaultProps = {
  title: "Мы провели десятки туров и корпоративов на различных акваториях. ",
  subtitle: "Москва-река, Большой Строгинский зат., Химкинское вдхр.",
};

export default defaultProps;

Boast.defaultProps = defaultProps;