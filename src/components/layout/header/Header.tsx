import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className={'h-screen w-full max-w-screen relative'}>
			<video className={'h-screen w-full max-w-screen absolute -z-10 object-cover'} src="/bg-video.mp4" loop={true} autoPlay={true}
			       muted={true}></video>
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
				<h1 className={'h1 lt-spacing'}>Мы провели десятки туров и корпоративов на различных акваториях.</h1>
				
				<div className={'flex justify-center'}>
					<a
						className={'rounded-[35px] bg-white text-[24px] mt-[20px] w-[267px] h-[76px] flex items-center justify-center text-center'}
						href="#">Посмотреть туры</a>
				</div>
			</div>
		</header>
	)
}
export default Header
