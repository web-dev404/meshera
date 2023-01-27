import type {NextPage} from 'next'
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Layout from "../src/components/layout/Layout";

const Home: NextPage = () => {
	return (
		<Layout title={'Главная'}>
			<Head>
				<title>Мещера Туры</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			
			<section className={'mt-[51px]'}>
				<p className={'max-w-[866px] text-[52px] mx-auto lt-spacing'}>
					<span className={'opacity-40'}>Самые интересные локации</span> Москвы,
					Подмосковья и не только; <br/>
					Обучение основам <span className={'opacity-40'}>управления сапбордом;</span> <br/>
					Аренду оборудования; <br/>
					Скидки <span className={'opacity-40'}>постоянным клиентам;</span> <br/>
					Сотрудничество с Event- агенствами; <br/>
					<span className={'opacity-40'}>Индивидуальные программы</span> (корпоративы,
					дни рождения и тд); <br/>
					Помощь в выборе и покупке досок;
				</p>
			</section>
			
			<section className={'flex'}>
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
			</section>
			
			<section className={'w-full max-w-screen h-[600px] relative'}>
				<Image className={'object-cover'} fill src={'/img/main-img.jpg'} alt={'main banner'}/>
			</section>
			
			<section>
				<h2>Мы провели десятки туров и корпоративов на различных акваториях.</h2>
				<p>Москва-река, Большой Строгинский зат., Химкинское вдхр.</p>
			</section>
			
			<section className={'grid grid-cols-3'}>
				<div className={'flex flex-col items-center justify-center relative h-[547px]'}>
					<Image className={'object-cover -z-10'} fill src={'/img/main-img.jpg'} alt={'tour'}/>
					<h3 className={'tour-title lt-spacing'}>Тур <br/>
						“Новогодний”</h3>
					<button className={'tour-btn lt-spacing'}>Участвовать</button>
				</div>
				
				<div className={'flex flex-col items-center justify-center relative h-[547px]'}>
					<Image className={'object-cover -z-10'} fill src={'/img/main-img.jpg'} alt={'tour'}/>
					<h3 className={'tour-title lt-spacing'}>Тур <br/>
						“Новогодний”</h3>
					<button className={'tour-btn lt-spacing'}>Участвовать</button>
				</div>
				
				<div className={'flex flex-col items-center justify-center relative h-[547px]'}>
					<Image className={'object-cover -z-10'} fill src={'/img/main-img.jpg'} alt={'tour'}/>
					<h3 className={'tour-title lt-spacing'}>Тур <br/>
						“Зимние выходные”</h3>
					<button className={'tour-btn lt-spacing'}>Участвовать</button>
				</div>
			</section>
			
			<section>
				<h2>Здесь вы можете
					ознакомиться со всеми
					возможными турами</h2>
			</section>
			
			<section className={'grid grid-cols-2'}>
				<div className={'flex flex-col items-center justify-center relative h-[547px]'}>
					<Image className={'object-cover -z-10'} fill src={'/img/houses/1.jpg'} alt={'house'}/>
					<h3 className={'tour-title lt-spacing'}>Дом Лункино <br/>
						(2+6 мест)</h3>
					<button className={'tour-btn lt-spacing'}>Подробнее</button>
				</div>
				
				<div className={'flex flex-col items-center justify-center relative h-[547px]'}>
					<Image className={'object-cover -z-10'} fill src={'/img/houses/1.jpg'} alt={'house'}/>
					<h3 className={'tour-title lt-spacing'}>Дом Лункино <br/>
						4 места</h3>
					<button className={'tour-btn lt-spacing'}>Подробнее</button>
				</div>
			</section>
			
			<section className={'w-full max-w-screen h-[600px] relative'}>
				<Image className={'object-cover'} fill src={'/img/main-img2.jpg'} alt={'main banner'}/>
			</section>
		</Layout>
	)
}

export default Home
