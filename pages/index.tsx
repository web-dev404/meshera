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
			
			<div className={'mt-[51px]'}>
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
			
			<div className={'w-screen h-[600px] relative'}>
				<Image className={'object-cover'} fill src={'/img/main-img.jpg'} alt={'main banner'} />
			</div>
		</Layout>
	)
}

export default Home
