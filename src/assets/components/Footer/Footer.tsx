import instImg from './images/Instagram.svg';
import pinterestImg from './images/Pinterest.svg';
import facebookImg from './images/Facebook.svg';
import twitterImg from './images/Twitter.svg';
import telegramImg from './images/Telegram.svg';

import './footer.scss'

// TODO fix footer. Its not 50 / 50 width.

export default function Footer() {

    return <footer className='footer'>
        <div className="footer__reminder">
            <p className="footer__reminder-text">Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
                Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
            <input type="email" className="footer__reminder-email" placeholder='Your Email'/>
            <button className="footer__reminder-submit">remind</button>
        </div>
        <div className="footer__contact">
            <h5 className="footer__title">Contact Us</h5>
            <h6 className="footer__contact-subtitle">Address</h6>
            <p className="footer__contact-text">15/4 Khreshchatyk Street, Kyiv </p>
            <h6 className="footer__contact-subtitle">Phone</h6>
            <p className="footer__contact-text">+380980099777</p>
            <h6 className="footer__contact-subtitle">General Enquiry:</h6>
            <p className="footer__contact-text">Kiev.Florist.Studio@gmail.com</p>
            <h5 className="footer__title">Follow Us</h5>
            <div className="footer__contact-socials">
                <a href="#" className="footer__contact-socials-item">
                    <img src={instImg} alt="instagram" className="footer__contact-socials-item-img"/>
                </a>
                <a href="#" className="footer__contact-socials-item">
                    <img src={pinterestImg} alt="pinterest" className="footer__contact-socials-item-img"/>
                </a>
                <a href="#" className="footer__contact-socials-item">
                    <img src={facebookImg} alt="facebook" className="footer__contact-socials-item-img"/>
                </a>
                <a href="#" className="footer__contact-socials-item">
                    <img src={twitterImg} alt="twitter" className="footer__contact-socials-item-img"/>
                </a>
                <a href="#" className="footer__contact-socials-item">
                    <img src={telegramImg} alt="telegram" className="footer__contact-socials-item-img"/>
                </a>
            </div>
        </div>
        <div className="footer__links">
            <h5 className="footer__title">Shop</h5>
            <a href="#" className="footer__links-item">All Products</a>
            <a href="#" className="footer__links-item">Fresh Flowers</a>
            <a href="#" className="footer__links-item">Dried Flowers</a>
            <a href="#" className="footer__links-item">Live Plants</a>
            <a href="#" className="footer__links-item">Designer Vases</a>
            <a href="#" className="footer__links-item">Aroma Candles</a>
            <a href="#" className="footer__links-item">Freshener Diffuser</a>
            <h5 className="footer__title footer__links-title">Service</h5>
            <a href="#" className="footer__links-item">Flower Subscription</a>
            <a href="#" className="footer__links-item">Wedding & Event Decor</a>
        </div>
        <div className="footer__about">
            <h5 className="footer__title">About Us</h5>
            <div className="footer__about-block">
                <a href="#" className="footer__about-link">Our story</a>
                <a href="#" className="footer__about-link">Blog</a>
            </div>
            <div className="footer__about-block">
                <a href="#" className="footer__about-link">Shipping & returns</a>
                <a href="#" className="footer__about-link">Terms & conditions</a>
                <a href="#" className="footer__about-link">Privacy policy</a>
            </div>
        </div>
    </footer>
}