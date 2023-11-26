import closeImg from './images/close.svg';
import facebookImg from './images/facebook.svg';
import instImg from './images/instagram.svg';
import pinterestImg from './images/pinterest.svg';
import twitterImg from './images/twitter.svg';
import telegramImg from './images/telegram.svg';

import './menu.scss';


interface IMenuLink {
    href: string,
    text: string,
}

interface IMenuSocial {
    href: string,
    img: string,
    alt: string
}

interface IProps {
    isMenuOpen: boolean
}

export default function Menu({isMenuOpen}: IProps) {

    const menuLinks: IMenuLink[] = [
        {href: '#', text: 'Sign in'},
        {href: '#', text: 'Shop'},
        {href: '#', text: 'Service'},
        {href: '#', text: 'Contact'},
        {href: '#', text: 'About us'}]

    const socials: IMenuSocial[] = [
        {href: '#', img: instImg, alt: 'instagram'},
        {href: '#', img: pinterestImg, alt: 'pinterest'},
        {href: '#', img: facebookImg, alt: 'facebook'},
        {href: '#', img: twitterImg, alt: 'twitter'},
        {href: '#', img: telegramImg, alt: 'telegram'},
    ]

    return <div className={isMenuOpen ? 'menu' : 'menu menu-closed'}>
        <div className="menu__close">
            <img src={closeImg} alt="close menu" className="menu__close-img"/>
        </div>
        <div className="menu__links">
            {menuLinks.map((i) => <a href={i.href} className="menu__links-item">{i.text}</a>)}
        </div>
        <div className="menu__terms">
            <a href="#" className="menu__terms-item">Shipping & returns</a>
            <a href="#" className="menu__terms-item">Terms & conditions</a>
            <a href="#" className="menu__terms-item">Privacy policy</a>
        </div>
        <div className="menu__socials">
            {socials.map(i => <a href={i.href} className="menu__socials-item">
                <img src={i.img} alt={i.alt} className='menu__socials-item-img'/>
            </a>)}
        </div>
    {/*    TODO add blur*/}
    </div>
}