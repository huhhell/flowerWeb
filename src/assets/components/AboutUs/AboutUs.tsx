import './about.scss';

export default function AboutUs() {

    return <div className='about'>
        <h2 className="about__title">About us</h2>
        <div className="about__content">
            <p className="about__subtitle">our story</p>
            <h5 className="about__name">Kyiv LuxeBouquets</h5>
            <p className="about__text">
                We are a modern local floral studio, which specializes in the design and delivery
                of unique bouquets. We have the best florists who carefully select each look, our studio cooperates
                directly with farms for growing different flowers, so we always have fresh flowers, which are collected
                by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried
                bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere.
                Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers
                online has never been easier.
            </p>
            <a href='#' className="about__learn">Learn more</a>
        </div>
    </div>
}