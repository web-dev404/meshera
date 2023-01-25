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
		</Layout>
	)
}

export default Home
