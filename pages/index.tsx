import Head from "next/head";

import { Footer, Header, Wrapper } from "@components/layout";
import { MainBlock }  from "@components/main-block/MainBlock";
import { Descriptions } from "@components/descriptions/Descriptions";
import { Banner } from "@components/UI/Banner/Banner";
import { Adventages } from "@components/adventages/Adventages";
import { Boast } from "@components/boast/Boast";
import { Tours } from "@components/tours/Tours";
import { ListTours } from "@components/list-tours/ListTours";
import { ListHouses } from "@components/list-houses/ListHouses";
import { GuestAccommodation } from "@components/guest-accommodation/GuestAccommodation";
import { PreviewTour } from "@components/preview-tour/PreviewTour";
import { SliderTours } from "@components/slider-tours/SliderTours";
import { YandexMap } from "@components/yandex-map/YandexMap";

import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Мещера Туры</title>
				<link rel='icon' href='/favicon.ico'/>
			</Head>
      <main className='page'>
        <MainBlock video='/video/01.mp4' title='Мы провели десятки туров и корпоративов на различных акваториях.' />
        <Descriptions />
        <Adventages />
        <Banner imageUrl='/img/banners/01.jpg' />
        <Boast />
        <Tours />
        <ListTours />
        <ListHouses />
        <GuestAccommodation />
        <Banner imageUrl='/img/banners/02.jpg' />
        <PreviewTour />
        <SliderTours />
        <YandexMap />
      </main>
		</>
	)
}

export default Home

Home.getLayout = (page) => {
  return (
    <Wrapper>
      <Header />
      {page}
      <Footer />
    </Wrapper>
  );
};