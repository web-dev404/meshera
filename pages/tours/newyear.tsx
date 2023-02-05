import Head from "next/head";

import { Footer, Header, Wrapper } from "@components/layout";
import { MainBlock }  from "@components/main-block/MainBlock";
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

import { NextPageWithLayout } from "../page";
import DescriptionTour from "@components/description-tour/DescriptionTour";

const TourNewYear: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Мещера Новогодний Тур</title>
				<link rel='icon' href='/favicon.ico'/>
			</Head>
      <main className='page'>
        <MainBlock 
          title='Тур “Новогодний”'
          date={{
            from: "13.01-15.01",
            to: "27.01-29.01"
          }} 
        />
        <DescriptionTour />
        <Adventages listAdventageItems={[
          {
            id: 0,
            title: "10+",
            subtitle: "Возраст"
          },
          {
            id: 1,
            title: "3 дня",
            subtitle: "Длительность (3 дня, 2 ночевки)"
          },
          {
            id: 2,
            title: "12 км",
            subtitle: "Протяженность маршрута"
          },
          {
            id: 3,
            stars: [true, false, false],
            subtitle: "Начальный (без опыта)"
          },
        ]} 
        />
        <Banner imageUrl='/img/banners/03.jpg' />
        <YandexMap />
        <Banner imageUrl='/img/banners/02.jpg' />
      </main>
		</>
	)
}

export default TourNewYear

TourNewYear.getLayout = (page) => {
  return (
    <Wrapper>
      <Header className='_sheet _blue' />
      {page}
      <Footer />
    </Wrapper>
  );
};