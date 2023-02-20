import React from 'react'
import clsx from 'clsx'

import styles from './faq-item.module.scss'
import { Collapse } from 'react-collapse'

export interface IFAQItem
  extends React.ComponentPropsWithoutRef<'section'> {
  idx: number
  name: string
  texts: string[]
  isShow?: boolean
}

export const FAQItem: React.FC<IFAQItem> = ({
  className,
  isShow = false,
  name,
  texts,
}) => {
  const [isShowFAQ, setIsShowFAQ] = React.useState<boolean>(isShow)

  const handleClickShow = () => setIsShowFAQ(prev => !prev)

  const collapseClasses = React.useMemo(() => ({
    collapse: styles.faq__hidden_collapsing,
    content: styles.faq__hidden,
  }), []);

  return (
    <article
      className={clsx(styles.faq, className, {
        [styles.faq_show]: isShowFAQ,
      })}
    >
      <button
        type='button'
        className={clsx(styles.faq__button, '_icon-star-main')}
        onClick={handleClickShow}
      >
        <span>{name}</span>
      </button>
      <Collapse className={styles.faq__hidden} theme={collapseClasses} isOpened={isShowFAQ}>
        {texts.map((text, _id) => (
          <p key={_id}>{text}</p>
        ))}
      </Collapse>
    </article>
  )
}
