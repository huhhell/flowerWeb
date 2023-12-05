import './subHowWork.scss'

export default function SubHowWork() {

    return <div className='sub-work'>
        <h3 className="sub-work__title">How does it work?</h3>
        <ul className="sub-work__list">
            <li className="sub-work__item">
                <h5 className="sub-work__item-title">Choose a plan</h5>
                <p className="sub-work__item-text">
                    Select the subscription plan that suits you best from our three
                    bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery,
                    and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle
                    to enhance the ambiance.
                </p>
            </li>
            <li className="sub-work__item">
                <h5 className="sub-work__item-title">Frequency and Duration</h5>
                <p className="sub-work__item-text">
                    Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your
                    subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand
                    that every customer has different needs, and we aim to provide flexible subscription options that
                    cater to your specific preferences.
                </p>
            </li>
            <li className="sub-work__item">
                <h5 className="sub-work__item-title">Pay once</h5>
                <p className="sub-work__item-text">
                    After entering your contact and delivery information and paying for
                    your subscription, you can sit back and relax, knowing that you have secured a regular supply of
                    fresh, stunning flowers for yourself or your loved ones
                </p>
            </li>
        </ul>
    </div>

}