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
    closeMenu: () => void
}

export default function Menu({isMenuOpen, closeMenu}: IProps) {

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
        <button className="menu__close" onClick={closeMenu}>
            <img src={closeImg} alt="close menu" className="menu__close-img"/>
        </button>
        <div className="menu__links">
            {menuLinks.map((i, id) => <a href={i.href} className="menu__links-item" key={id}>{i.text}</a>)}
        </div>
        <div className="menu__terms">
            <a href="#" className="menu__terms-item">Shipping & returns</a>
            <a href="#" className="menu__terms-item">Terms & conditions</a>
            <a href="#" className="menu__terms-item">Privacy policy</a>
        </div>
        <div className="menu__socials">
            {socials.map((i, id) => <a href={i.href} className="menu__socials-item" key={id}>
                <img src={i.img} alt={i.alt} className='menu__socials-item-img'/>
            </a>)}
        </div>
    {/*    TODO add blur*/}
    </div>
}