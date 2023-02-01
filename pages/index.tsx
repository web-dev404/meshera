import Head from "next/head";

import { Footer, Header, Wrapper } from "@components/layout";
import { MainBlock } from "@components/main-block/MainBlock";
import { Descriptions } from "@components/descriptions/Descriptions";
import { Banner } from "@components/UI/Banner/Banner";
import { Adventages } from "@components/adventages/Adventages";
import { Boast } from "@components/boast/Boast";
import { Tours } from "@components/tours/Tours";
import { ListTours } from "@components/list-tours/ListTours";
import { ListHouses } from "@components/list-houses/ListHouses";
import { GuestAccommodation } from "@components/guest-accommodation/GuestAccommodation";

import { NextPageWithLayout } from "./page";

const toursHouses = [
  {
    id: 0,
    title: "“Новогодний”",
    href: "/",
    imageUrl: "/img/houses/01.jpg"
  },
  {
    id: 1,
    title: "Зимние выходные",
    href: "/",
    imageUrl: "/img/houses/01.jpg"
  },
  {
    id: 2,
    title: "Зимние выходные",
    href: "/",
    imageUrl: "/img/houses/01.jpg"
  },
];

const Home: NextPageWithLayout = () => {

	return (
		<>
			<Head>
				<title>Мещера Туры</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
      <main className="page">
        <MainBlock />
        <Descriptions />
        <Adventages />
        <Banner />
        <Boast />
        <Tours />
        <ListTours />
        <ListHouses />
        <GuestAccommodation />
        <Banner imageUrl="/img/banners/02.jpg" />
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