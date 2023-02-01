import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { getDigFormat } from "@utils/getFigFormat";
import { useWindow } from "@hooks/useWindow";

import styles from "./ListToursItem.module.scss";

export interface IListItem {
  id: number;
  title: string;
  stars: [boolean, boolean, boolean];
  description: string;
  price: number;
  mapImageUrl: string;
  href: string;
};

export const ListTourItem: React.FC<IListItem> = ({ title, stars, price, mapImageUrl, href, description }) => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const { width } = useWindow();

  const isTablet = width ? width <= 767.98 : null;

  const handleClickToShow = () => {
    isTablet ? setIsShow(prev => !prev) : null;
  };
  
  return (
    <article className={clsx(styles.tours__tour, styles.tour, {[styles.tour_show]: isShow})}>
      <button onClick={handleClickToShow} type="button" className={clsx(styles.tour__button, "_icon-angle-top")}>{title}</button>
      <div className={styles.tour__body}>
        <div className={styles.tour__meta}>
          <div className={styles.tour__rate}>
            {
              stars.map((isStar, _id) => (
                <span key={_id} className={clsx(styles.tour__icon, {[styles.tour__icon_rated]: isStar}, "_icon-star-main")}></span>
              ))
            }
          </div>
          {
            isTablet ? (
              <div className={styles.tour__map}>
                <Image src={mapImageUrl} fill alt="Карта тура" />
              </div>
            ) 
            :
            null
          }
        </div>
        <div className={styles.tour__info}>
          <div className={styles.tour__title}>
            <Link href={href}>
              {description}
              {
                !isTablet ? (
                  <div className={styles.tour__map}>
                    <Image src={mapImageUrl} fill alt="Карта тура" />
                  </div>
                ) 
                :
                null
              }
            </Link>
          </div>
          <div className={styles.tour__price}>{getDigFormat(price)} ₽</div>
        </div>
        {
          isTablet ? 
          <Link href={href} className={styles.tour__footer}>Подробнее</Link>
          :
          null
        }
      </div>
    </article>
  )
}