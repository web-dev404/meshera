import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import { useWindow } from "@hooks/useWindow";  

import styles from "./GuestAccomodationItem.module.scss";

interface IPlacementList {
  id: number;
  name: string;
  availability: boolean;
}

export interface IGuest {
  id: number;
  title: string;
  href: string;
  mapImageUrl: string;
  className?: string | object;
  placementList: IPlacementList[];
}

export const GuestAccomodationItem: 
    React.FC<IGuest> = 
    ({ title, href, placementList, mapImageUrl, className }) => {

  const [isShow, setIsShow] = React.useState<boolean>(false);
  const { width } = useWindow();

  const isMobile = width ? width <= 767.98 : null;

  const handleClickShowButton = () => {
    isMobile ? setIsShow(prev => !prev) : null;  
  };

  return (
    <article className={clsx(styles.guest, className, { [styles.guest_show]: isShow })}>
      <div className={styles.guest__actions}>
        <button onClick={handleClickShowButton} type='button' className={clsx(styles.guest__button, "_icon-angle-top")}>
          {title}
        </button>
        {
          !isMobile ? (
            <Link href={href} className={styles.guest__image}>
              <Image src={mapImageUrl} fill alt='Карта тура' />
            </Link>
          )
          :
          null
          }
      </div>
      <div className={styles.guest__body}>
        {
          isMobile ? (
            <Link href={href} className={styles.guest__image}>
              <Image src={mapImageUrl} fill alt='Карта тура' />
            </Link>
          )
          :
          null
        }
        <div className={styles.guest__content}>
          {placementList.map(guest => (
            <div key={guest.id} className={styles.guest__item}>
              <span className={clsx(styles.guest__icon, { [styles.guest__icon_available]: guest.availability }, "_icon-star-main")}></span>
              <div className={styles.guest__name}>{guest.name}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}