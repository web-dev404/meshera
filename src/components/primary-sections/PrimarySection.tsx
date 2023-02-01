import React from "react";
import clsx from "clsx";

import styles from "./PrimarySection.module.scss";

export interface IPrimarySection extends React.ComponentPropsWithoutRef<"section"> {
  title: string;
  description: string;
};

export const PrimarySection: React.FC<IPrimarySection> = ({title, description, className, children}) => {
  return (
    <section className={clsx(styles.section, className)}>
      <div className={clsx(styles.section__container, "container")}>
        <div className={styles.section__header}>
          <h2 className={clsx(styles.section__title, "first-letter-fonts second-title")}>{title}</h2>
          <p className={styles.section__description}>{description}</p>
        </div>
        <div className={styles.section__body}>
          {children}
        </div>
      </div>
    </section>
  )
}