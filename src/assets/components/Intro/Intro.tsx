import quoteImg from './images/quote.jpeg';
import './intro.scss';
import category01Img from './images/category01.jpeg'
import category02Img from './images/category02.jpeg'
import category03Img from './images/category03.jpeg'
import category04Img from './images/category04.jpeg'
import category05Img from './images/category05.jpeg'
import arrowRightImg from './images/arrow-right.svg'
import arrowLeftImg from './images/arrow-left.svg'

export default function Intro() {

    return <div className='intro'>
        <div className="intro__company">
            <h1 className="intro__company-name">Kyiv LuxeBouquets</h1>
            <p className="intro__company-text">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
            <div className="intro__company-quote">
                <img src={quoteImg} alt="black and white img of girl whose face coverd by white flowers" className="intro__company-quote-img"/>
                <p className="intro__company-quote-text">Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
            </div>
        </div>
        <div className="intro__products">
            <div className="intro__products-category">
                <h5 className="intro__products-title">Fresh Flowers</h5>
                {/*TODO add link to shop page*/}
                <a href="#" className="intro__products-link">
                    <p className="intro__products-link-text">Shop now</p>
                    <img src={arrowRightImg} alt="arrow right" className="intro__products-arrow"/>
                </a>
            </div>
            <img src={category01Img} alt="white flowers" className="intro__products-img"/>
            <img src={category02Img} alt="dried flowers" className="intro__products-img"/>
            <div className="intro__products-category">
                <h5 className="intro__products-title">Dried Flowers</h5>
                {/*TODO add link to shop page*/}
                <a href="#" className="intro__products-link">
                    <p className="intro__products-link-text">Shop now</p>
                    <img src={arrowLeftImg} alt="arrow left" className="intro__products-arrow"/>
                </a>
            </div>
            <div className="intro__products-category">
                <h5 className="intro__products-title">Live Plants</h5>
                {/*TODO add link to shop page*/}
                <a href="#" className="intro__products-link">
                    <p className="intro__products-link-text">Shop now</p>
                    <img src={arrowRightImg} alt="arrow right" className="intro__products-arrow"/>
                </a>
            </div>
            <img src={category03Img} alt="Live plant" className="intro__products-img"/>
            <img src={category04Img} alt="aroma candle" className="intro__products-img"/>
            <div className="intro__products-category">
                <h5 className="intro__products-title">Aroma Candels</h5>
                {/*TODO add link to shop page*/}
                <a href="#" className="intro__products-link">
                    <p className="intro__products-link-text">Shop now</p>
                    <img src={arrowLeftImg} alt="arrow left" className="intro__products-arrow"/>
                </a>
            </div>
            <div className="intro__products-category">
                <h5 className="intro__products-title">Fresheners</h5>
                {/*TODO add link to shop page*/}
                <a href="#" className="intro__products-link">
                    <p className="intro__products-link-text">Shop now</p>
                    <img src={arrowRightImg} alt="arrow right" className="intro__products-arrow"/>
                </a>
            </div>
            <img src={category05Img} alt="Fresheners" className="intro__products-img"/>
        </div>
    </div>
}