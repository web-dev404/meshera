import type {NextPage} from 'next'
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Мещера Туры</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			
			<header className={'h-screen w-screen relative'}>
        <video className={'h-screen w-screen absolute -z-10 object-cover'} src="/bg-video.mp4" loop={true} autoPlay={true} muted={true}></video>
				<nav className={'flex items-center justify-center gap-[30px] pt-[47px]'}>
					<Link className={'header-link'} href="/">
						Главная
					</Link>
					<Link className={'header-link'} href="/about">
						Туры
					</Link>
					<Link className={'header-link'} href="/contact">
						Баня
					</Link>
					<Link className={'mx-[10px]'} href={'/'}>
						<Image width={'126'} height={'88'} src={'/img/logo.svg'} alt={'Мещера лого'}/>
					</Link>
				  <Link className={'header-link'} href={'blog'}>Блог</Link>
				  <Link className={'header-link'} href={'faq'}>FAQ</Link>
				  <Link className={'header-link'} href={'contact'}>Контакты</Link>
				</nav>
        
        <div className={'header-content'}>
          <h1>Мы провели десятки туров и корпоративов на различных акваториях.</h1>
          <a className={'rounded-[35px] bg-white fz-[24px]'} href="#">Посмотреть туры</a>
        </div>
			</header>
			
			<div>
				<p className={'max-w-[866px] text-[52px]'}>
					Самые интересные локации Москвы, br
					Подмосковья и не только;
					Обучение основам управления сапбордом;
					Аренду оборудования;
					Скидки постоянным клиентам;
					Сотрудничество с Event- агенствами;
					Индивидуальные программы (корпоративы,
					дни рождения и тд);
					Помощь в выборе и покупке досок;
				</p>
			</div>
			
			<div className={'flex'}>
				<div className={'statistics-item'}>
					<p>20+</p>
					<p>SUP-бордов</p>
				</div>
				<div className={'statistics-item'}>
					<p>7</p>
					<p>Туров</p>
				</div>
				<div className={'statistics-item'}>
					<p>1200</p>
					<p>Клиентов</p>
				</div>
				<div className={'statistics-item'}>
					<p>42</p>
					<p>Отзыва</p>
				</div>
			</div>
		</div>
	)
}

export default Home
