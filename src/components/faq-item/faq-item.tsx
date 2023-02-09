import clsx from 'clsx'
import React from 'react'

import styles from './faq-item.module.scss'

export interface IFAQItem
  extends React.ComponentPropsWithoutRef<'section'> {
  idx: number
  name: string
  texts: string[]
  isShow?: boolean
}

export const FAQItem: React.FC<IFAQItem> = ({
  className,
  isShow = true,
  name,
  texts,
}) => {
  const [isShowFAQ, setIsShowFAQ] = React.useState<boolean>(isShow)

  const handleClickShow = () => setIsShowFAQ(prev => !prev)

  return (
    <article
      className={clsx(styles.faq, className, {
        [styles.faq_show]: !isShowFAQ,
      })}
    >
      <button
        type='button'
        className={clsx(styles.faq__button, '_icon-star-main')}
        onClick={handleClickShow}
      >
        <span>{name}</span>
      </button>
      <div className={styles.faq__hidden} hidden={isShowFAQ}>
        {texts.map((text, _id) => (
          <p key={_id}>{text}</p>
        ))}
      </div>
    </article>
  )
}
