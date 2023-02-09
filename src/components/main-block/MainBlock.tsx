import { LinkPrimary } from '@components/UI/Links'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import styles from './MainBlock.module.scss'

export interface IMainBlock {
  title: string
  buttonText: string
  href: string
  video?: string
  isMinSize?: boolean
  mainImageUrl: string
  date?: {
    from: number | string
    to: number | string
  }
}

export const MainBlock: React.FC<IMainBlock> = ({
  title,
  href,
  buttonText,
  video,
  mainImageUrl,
  date,
  isMinSize,
}) => {
  return (
    <section className={styles.main}>
      <div className={clsx(styles.main__container, 'container')}>
        <div
          className={clsx(styles.main__body, {
            [styles.main__body_min]: isMinSize,
          })}
        >
          <div className={styles.main__content}>
            <h1 className={clsx(styles.main__title, 'title')}>
              {title}
            </h1>
            {buttonText ? (
              <LinkPrimary
                href={href}
                label={buttonText}
                className={styles.link}
              />
            ) : null}
          </div>
          {date ? (
            <div className={styles.main__date}>
              <div className={styles.main__value}>{date?.from}</div>
              <div className={styles.main__value}>{date?.to}</div>
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.main__meta}>
        {video ? (
          <video src={video} loop muted autoPlay />
        ) : (
          <Image src={mainImageUrl} fill alt='Поле с одуванчиками' />
        )}
      </div>
    </section>
  )
}

const defaultProps: IMainBlock = {
  title:
    'Мы провели десятки туров и корпоративов на различных акваториях.',
  buttonText: 'Посмотреть туры',
  mainImageUrl: '/img/main-block/01.jpg',
  href: '/',
}

MainBlock.defaultProps = defaultProps

export default defaultProps
