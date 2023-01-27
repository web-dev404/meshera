import type {NextPage} from 'next'
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Layout from "../src/components/layout/Layout";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

const blog = [
	{
		id: 1,
		title: "How to use Next.js",
		date: "2020-01-01",
		description: "Learn how to use Next.js",
		image: "https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
	},
	{
		id: 2,
		title: "How to use React",
		date: "2020-01-01",
		description: "How to use React",
		image: "https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
	},
	{
		id: 3,
		title: "HowLearn how to use Typescript",
		date: "2020-01-01",
		description: "Learn how to use Typescript",
		image: "https://images.unsplash.com/photo-1584907797015-7554cd315667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
	},
	{
		id: 4,
		title: "How to use tailwind",
		date: "2020-01-01",
		description: "How to use tailwind",
		image: "https://images.unsplash.com/photo-1674364390022-059f9bacb9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=484&q=80"
	},
	{
		id: 5,
		title: "How to use Js",
		date: "2020-01-01",
		description: "How to use Js",
		image: "https://images.unsplash.com/photo-1643180109978-8b88bd13f568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
	},
]

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
			
			<section>
				<Swiper
					spaceBetween={24}
					slidesPerView={3}
				>
					{blog.map(item => (
						<SwiperSlide key={item.id}>
							<div className={'relative h-[368px]'}>
								<Image className={'object-cover'} fill src={item.image} alt={'main banner'}/>
							</div>
							<h3>{item.title}</h3>
							<div className={'flex items-center justify-between'}>
								<p>блог / туризм</p>
								<p>23 октября, 2022</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</Layout>
	)
}

export default Home
