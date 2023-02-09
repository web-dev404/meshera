import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import styles from './Banner.module.scss'

interface IBanner extends React.ComponentPropsWithoutRef<'section'> {
  imageUrl: string
  isDeviceSize?: boolean
  noBottomMargin?: boolean
}

export const Banner: React.FC<IBanner> = ({
  imageUrl,
  isDeviceSize,
  noBottomMargin,
  className,
}) => {
  return (
    <section
      className={clsx(
        styles.banner,
        { [styles.banner_deviceSize]: isDeviceSize },
        { [styles.banner_noBottomMargin]: noBottomMargin },
        className
      )}
    >
      <div className={styles.banner__image}>
        <Image src={imageUrl} fill alt='Lake with forest' />
      </div>
    </section>
  )
}

const defaultProps: IBanner = {
  imageUrl: '/img/banners/01.jpg',
}

export default defaultProps

Banner.defaultProps = defaultProps
