import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { useWindow } from "@hooks/useWindow";

import styles from "./Header.module.scss";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {
}

export const Header: React.FC<IHeader> = ({ className }) => {
  const [isBodyLockStatus, setIsBodyLockStatus] = React.useState<boolean>(true);
  const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);
  const { width } = useWindow();

  const isMobile = width ? width <= 767.98 : null;

  const bodyLock = React.useCallback((delay = 500): void => {
    const bodyElement = document.querySelector("body") as HTMLBodyElement;
    const htmlElement = document.documentElement as HTMLHtmlElement;
    const wrapperElement = document.querySelector(".wrapper") as HTMLDivElement;

    if (isBodyLockStatus) {
      bodyElement.style.paddingRight = window.innerWidth - wrapperElement.offsetWidth + "px";
      htmlElement.classList.add("lock");
  
      // bodyLockStatus = false;
      setIsBodyLockStatus(false);
      setTimeout(function () {
        // bodyLockStatus = true;
        setIsBodyLockStatus(true);
      }, delay);
    }
  }, [isBodyLockStatus]);

  const bodyUnlock = React.useCallback((delay = 500): void => {
    const bodyElement = document.querySelector("body") as HTMLBodyElement;
    const htmlElement = document.documentElement as HTMLHtmlElement;

    if (isBodyLockStatus) {
      setTimeout(() => {
        bodyElement.style.paddingRight = "0px";
        htmlElement.classList.remove("lock");
      }, delay);

      // bodyLockStatus = false;
      setIsBodyLockStatus(false);
      setTimeout(function () {
        // bodyLockStatus = true;
        setIsBodyLockStatus(true);
      }, delay);
    }
  }, [isBodyLockStatus]); 

  const bodyLockToggle = React.useCallback((delay = 500) => {
    const htmlElement = document.documentElement as HTMLHtmlElement;

    if (htmlElement.classList.contains("lock")) {
      bodyUnlock(delay);
    } else {
      bodyLock(delay);
    }
  }, [isBodyLockStatus]);

  React.useEffect(() => {
    const htmlElement = document.documentElement as HTMLHtmlElement;
    if (isBodyLockStatus) {
      bodyLockToggle();
      htmlElement.classList.toggle("menu-open", isOpenMenu);
    }
  }, [isOpenMenu]);

  React.useEffect(() => {
    const isSticky = () => {
      const headerElement = document.querySelector("header") as HTMLDivElement;
      const scrollTop = window.scrollY;
      
      scrollTop > 0 ? 
        headerElement.classList.add(styles.header_scroll) 
        :
        headerElement.classList.remove(styles.header_scroll); 
    };

    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [])

  const handleMenuClick = () => setIsOpenMenu((prev) => !prev);

  return (
		<header className={clsx(styles.header, className)}>
      <div className={clsx(styles.header__wrapper)}>
        <div className={clsx(styles.header__container, "container")}>
          <nav className={clsx(styles.header__menu, styles.menu)}>
            <div className={styles.menu__body}>
              {isMobile || (
                <ul className={styles.menu__list}>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Главная</Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Туры</Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Баня</Link>
                  </li>
                </ul>
              )}
              <Link href='/' className={styles.menu__logo}>
                <Image 
                  src={"/img/logo.svg"}
                  alt='Логотип Мещера Тур'
                  fill
                />
              </Link>
              {isMobile || (
                <ul className={clsx(styles.menu__list, styles.menu__list_left)}>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Главная</Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Туры</Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Баня</Link>
                  </li>
                </ul>
              )}
            </div>
            {isMobile && (
              <div className={styles.menu__nav}>
                <ul className={styles.menu__list}>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Главная</Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Туры</Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Баня</Link>
                  </li>
                </ul>
                <ul className={clsx(styles.menu__list, styles.menu__list_left)}>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Главная</Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Туры</Link>
                  </li>
                  <li className={styles.menu__item}>
                    <Link href='/' className={styles.menu__link}>Баня</Link>
                  </li>
                </ul>
              </div>
            )}
            <button onClick={handleMenuClick} type='button' className={clsx(styles.menu__button, styles.iconMenu)}></button>
          </nav>
        </div>
      </div>
		</header>
	)
};