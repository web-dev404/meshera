import Head from 'next/head'

import FAQWrapperProps, { FAQWrapper } from '@components/faq/faq'
import { Footer, Header, Wrapper } from '@components/layout'
import mainBlockProps, {
  MainBlock,
} from '@components/main-block/MainBlock'

import { NextPageWithLayout } from './page'

export const FAQ: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='page'>
        <MainBlock
          {...mainBlockProps}
          title='Мы составили список популярных вопросов, чтобы вам было проще'
          video='/video/02.mp4'
          buttonText={''}
          isMinSize
          date={undefined}
        />
        <FAQWrapper {...FAQWrapperProps} />
      </main>
    </>
  )
}

export default FAQ

FAQ.getLayout = page => {
  return (
    <Wrapper>
      <Header />
      {page}
      <Footer />
    </Wrapper>
  )
}
