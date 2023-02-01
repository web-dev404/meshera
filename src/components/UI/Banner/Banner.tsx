import React from "react";
import clsx from "clsx"; 
import Image from "next/image";

import styles from "./Banner.module.scss";

interface IBanner extends React.ComponentPropsWithoutRef<"section"> {
  imageUrl: string;
}

export const Banner: React.FC<IBanner> = ({ imageUrl, className }) => {
  return (
    <section className={clsx(styles.banner, className)}>
      <div className={styles.banner__image}>
        <Image src={imageUrl} fill alt="Lake with forest" />
      </div>
    </section>
  )
}

Banner.defaultProps = {
  imageUrl: "/img/banners/01.jpg",
};