import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { LinkSecondary } from '@components/UI/Links'

import styles from './ListHouses.module.scss'

interface IHouse {
  id: number
  title: string
  href: string
  imageUrl: string
}

interface IListHouses
  extends React.ComponentPropsWithoutRef<'section'> {
  listOfHouses: IHouse[]
}

export const ListHouses: React.FC<IListHouses> = ({
  className,
  listOfHouses,
}) => {
  return (
    <section className={clsx(styles.houses, className)}>
      <div className={clsx(styles.houses__container, 'container')}>
        <div className={styles.houses__body}>
          {listOfHouses.map((house, index) => (
            <motion.article
              initial={{ x: `-${100 * index}%`, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              key={house.id}
              className={styles.houses__house}
            >
              <div className={styles.houses__content}>
                <h4 className={styles.houses__title}>
                  {house.title}
                </h4>
                <LinkSecondary
                  className={styles.houses__link}
                  label='Подробнее'
                  href={house.href}
                />
              </div>
              <Link
                href={house.href}
                className={styles.houses__image}
              >
                <Image
                  src={house.imageUrl}
                  fill
                  alt='Дом с мебелью'
                />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

const defaultProps = {
  listOfHouses: [
    {
      id: 0,
      title: 'Дом Лункино (2+6 мест)',
      href: '/',
      imageUrl: '/img/houses/01.jpg',
    },
    {
      id: 1,
      title: 'Дом Лункино (4 места)',
      href: '/',
      imageUrl: '/img/houses/01.jpg',
    },
  ],
}

export default defaultProps

ListHouses.defaultProps = defaultProps
