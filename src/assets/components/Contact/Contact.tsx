import callImg from './images/call.svg';
import addressImg from './images/address.svg';
import shopImg from './images/main.jpeg';
import instImg from './images/Instagram.svg';
import pinterestImg from './images/Pinterest.svg';
import facebookImg from './images/Facebook.svg';
import twitterImg from './images/Twitter.svg';
import telegramImg from './images/Telegram.svg';

import './contact.scss';


// TODO rewrite this block
export default function Contact() {

    return <div className='contact'>
        <div className="contact__info">
            <div className="contact__form-block">
                <h2 className="contact__title">To Contact Us</h2>
                <form action="#" className="contact__form">
                    <label htmlFor="contact__form-phone" className="contact__form-label">We will call you back</label>
                    <input type="number" className="contact__form-phone" id='contact__form-phone'
                           placeholder='+380 XX XXX XX XX'/>
                    <button className="contact__form-submit">book a call</button>
                </form>
            </div>
            <div className="contact__data">
                <div className="contact__data-item">
                    <div className="contact__data-title">Phone</div>
                    <div className="contact__data-item-data">
                        <div className="contact__data-info">
                            <img src={callImg} alt="call" className="contact__data-info-img"/>
                            <p className="contact__data-info-text">+380980099777</p>
                        </div>
                        <div className="contact__data-info">
                            <img src={callImg} alt="call" className="contact__data-info-img"/>
                            <p className="contact__data-info-text">+380980099111</p>
                        </div>
                    </div>
                </div>
                <div className="contact__data-item">
                    <div className="contact__data-title">Address</div>
                    <div className="contact__data-item-data">
                        <div className="contact__data-info">
                            <p className="contact__data-info-text" style={{marginLeft: '28px'}}>opening hours: 8 to 11
                                p.m.</p>
                        </div>
                        <div className="contact__data-info">
                            <img src={addressImg} alt="address" className="contact__data-info-img"/>
                            <p className="contact__data-info-text">15/4 Khreshchatyk Street, Kyiv</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact__socials">
            <img src={shopImg} alt="shop" className="contact__socials-img"/>
            <div className="contact__socials-links">
                <h5 className="contact__socials-title">Follow us</h5>
                <div className="contact__socials-list">
                    <a href="#" className="contact__socials-item">
                        <img src={instImg} alt="instagram" className="contact__socials-item-img"/>
                    </a>
                    <a href="#" className="contact__socials-item">
                        <img src={pinterestImg} alt="pinterest" className="contact__socials-item-img"/>
                    </a>
                    <a href="#" className="contact__socials-item">
                        <img src={facebookImg} alt="facebook" className="contact__socials-item-img"/>
                    </a>
                    <a href="#" className="contact__socials-item">
                        <img src={twitterImg} alt="twitter" className="contact__socials-item-img"/>
                    </a>
                    <a href="#" className="contact__socials-item">
                        <img src={telegramImg} alt="telegram" className="contact__socials-item-img"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
}