import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { useWindow } from "@hooks/useWindow";

import styles from "./PreviewTourItem.module.scss";

export interface IOneTourItem {
  id: number;
  title: string;
  stars: [boolean, boolean, boolean];
  description: string;
  mapImageUrl: string;
  href: string;
}

export const OneTourItem: 
  React.FC<IOneTourItem> = 
  ({ title, stars, mapImageUrl, href, description }) => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const { width } = useWindow();

  const isMobile = width ? width <= 767.98 : null;

  const handleClickShow = () => isMobile ? setIsShow(prev => !prev) : null;

  return (
    <article className={clsx(styles.preview, { [styles.preview_show]: isShow })}>
      <div className={styles.preview__title}>
        <button onClick={handleClickShow} className={clsx(styles.preview__link, "_icon-angle-top")}>{title}</button>
      </div>
      <div className={styles.preview__body}>
        <div className={styles.preview__content}>
          <div className={styles.preview__stars}>
            {stars.map((isStar, _id) => (
              <span key={_id} className={clsx(styles.preview__icon, { [styles.preview__icon_active]: !isStar }, '_icon-star-main' )} />
            ))}
          </div>
          <div className={styles.preview__meta}>
            {
              !isMobile ? (
                <>
                  <Link href={href} className={styles.preview__description}>{description}</Link>
                  <Link href={href} className={styles.preview__map}>
                    <Image src={mapImageUrl} fill alt='Карта тура' />
                  </Link>
                </>
              )
              : null
            }
            {
              isMobile ? (
                <Link href={href} className={styles.preview__map}>
                  <Image src={mapImageUrl} fill alt='Карта тура' />
                </Link>
              )
              : null
            }
          </div>
        </div>
        <div className={styles.preview__actions}>
            {
            isMobile ? 
              <Link 
                href={href}
                className={styles.preview__description}
              >
                {description}
              </Link>
              : null
            }
          <div className={clsx(styles.preview__footer)}><span>3.01-5.01 7.01-9.01</span></div>
        </div>
      </div>
    </article>
  )
}