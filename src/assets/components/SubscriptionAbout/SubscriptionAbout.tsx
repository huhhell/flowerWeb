import mainImg from './images/image.jpeg'
import './subscriptionAbout.scss';

export default function SubscriptionAbout() {

    return <div className="sub-about">
        <div className="sub-about__img">
            <img src={mainImg} alt="gorl with postcard holding red flowers" className="sub-about__img-item"/>
        </div>
        <div className="sub-about__info">
            <h1 className="sub-about__title">Flower Subscription</h1>
            <h6 className="sub-about__subtitle">For Yourself</h6>
            <ul className='sub-about__list'>
                <li className='sub-about__list-item'>The perfect way to keep your home fresh and beautiful. Get a regular
                    delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty
                    and fragrance of fresh flowers hassle-free!
                </li>
            </ul>
            <h6 className="sub-about__subtitle">As a Gift</h6>
            <ul className='sub-about__list'>
                <li className='sub-about__list-item'>Simply provide us with their address and let us take care of the rest,
                    delivering beautiful blooms straight to their doorstep at the frequency and duration of your
                    choosing.
                </li>
            </ul>
            <h6 className="sub-about__subtitle">For Business</h6>
            <ul className='sub-about__list'>
                <li className='sub-about__list-item'>Is a great way to create a pleasant atmosphere and leave a good
                    impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image
                    of your business, and our service guarantees timely replacement without extra care or effort on your
                    part.
                </li>
            </ul>

            <a href='#' className='sub-about__explore'>Explore plans</a>
        </div>
    </div>
}