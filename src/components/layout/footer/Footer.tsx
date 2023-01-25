import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer>
			<div>
				<Image width={246} height={52} src={'/img/logo2.svg'} alt={'footer logo'} />
			</div>
			
			<div className={'flex items-center justify-center'}>
				<Link className={'footer-link'} href={'/'}>Главная</Link>
				<Link className={'footer-link'} href={'/'}>Туры</Link>
				<Link className={'footer-link'} href={'/'}>Блог</Link>
				<Link className={'footer-link'} href={'/'}>Баня</Link>
				<Link className={'footer-link'} href={'/'}>FAQ</Link>
				<Link className={'footer-link'} href={'/'}>Контакты</Link>
			</div>
		</footer>
	)
}
export default Footer