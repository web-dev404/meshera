import clsx from 'clsx'
import React from 'react'

import { FAQItem, IFAQItem } from '@components/faq-item/faq-item'
import styles from './faq.module.scss'

interface IFAQ extends React.ComponentPropsWithoutRef<'section'> {
  listOfFAQ: IFAQItem[]
}

export const FAQWrapper: React.FC<IFAQ> = ({
  className,
  listOfFAQ,
}) => {
  return (
    <section className={clsx(styles.faq, className)}>
      <div className={clsx(styles.faq__container, 'container')}>
        <div className={styles.faq__body}>
          {listOfFAQ.map(faq => (
            <FAQItem key={faq.idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}

const defaultProps: IFAQ = {
  listOfFAQ: [
    {
      idx: 0,
      name: 'Где посмотреть расписание туров и прогулок?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 1,
      name: 'Как добираться?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 2,
      name: 'Что брать с собой из личных вещей?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 3,
      name: 'Что, если погода будет плохая?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 4,
      name: 'Сложно ли управлять сапбордом?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 5,
      name: 'Как забронировать участие?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 6,
      name: 'Я забронировал(а), но планы изменились, возможен возврат денег?\n',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 7,
      name: 'Какие есть скидки?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 8,
      name: 'Из чего состоит SUP-тур?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 9,
      name: 'Можно ли с детьми?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 10,
      name: 'А что в меню?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 11,
      name: 'Баня в SUP-туре? Это как?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 12,
      name: 'Где найти фото со мной? Как я могу поделиться своими?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 13,
      name: 'У меня свой сапборд, можно с вами?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 14,
      name: 'Что такое индивидуальные программы?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 15,
      name: 'Какие условия аренды?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
    {
      idx: 16,
      name: 'Почему здесь нет моего вопроса?',
      texts: [
        'Как правило, для того, чтобы уверенно встать на ноги, потребуется 10-30 минут гребли. В начале движения мы рекомендуем почувствовать баланс в положениях сидя или стоя на коленях, пока адаптируется ваш вестибулярный аппарат. А после того как освоитесь, можно пробовать вставать на ноги. В любом случае, инструктор будет следить за вами и в при необходимости, подсказывать.',
        'Вводный инструктаж ответит на вопросы: как удобно забираться на сапборд, где сидеть или стоять, как правильно грести, что можно и нельзя делать на доске и многое другое. Специальные навыки не требуются. Минимальное требование к участникам – умение плавать. На маршруте все обязательно находятся в спасжилетах.',
        'Главное то, что сапборд позволяет вам выбрать наиболее удобное положение самому и менять его по желанию, а движение по течению предоставит достаточно времени и для отдыха и для наслаждения природой.',
        'Ещё сомневаетесь? Приглашаем вас в ознакомительные прогулки по акваториям Москвы (анонсы будут на стене сообщества и в инстаграм)',
      ],
    },
  ],
}

export default defaultProps
