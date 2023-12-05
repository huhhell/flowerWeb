import mainImg from './images/main.jpeg';
import plan1Img from './images/plan1.jpeg';
import plan2Img from './images/plan2.jpeg';
import plan3Img from './images/plan3.jpeg';

import './subSelectPlan.scss';
import {useState} from "react";

export default function SubSelectPlan() {
    const [frequency, setFrequency] = useState([
        {name: 'Monthly', checked: true},
        {name: 'Bi-Weekly', checked: false},
        {name: 'Weekly', checked: false},

    ]);
    const [count, setCount] = useState(0)

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => count === 0 ? setCount(0) : setCount(count - 1);

    return <div className='sub-plan'>
        <div className="sub-plan__info">
            <p className="sub-plan__subtitle">Build Your Subscription</p>
            <h3 className="sub-plan__title">Selecting a Plan</h3>
            <p className="sub-plan__text">Enjoy free shipping on every order and save up to 30%.
                Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause,
                or cancel your subscription, simply log in to your account dashboard. You're in complete control of your
                flower delivery experience.</p>
            <div className="sub-plan__item">
                <img src={plan1Img} alt="flowers" className="sub-plan__item-img"/>
                <div className="sub-plan__item-info">
                    <h6 className="sub-plan__item-name">Classic</h6>
                    <ul className="sub-plan__item-list">
                        <li className="sub-plan__item-list-item">Price $45</li>
                        <li className="sub-plan__item-list-item">Free Delivery</li>
                        <li className="sub-plan__item-list-item">Best for a budget</li>
                        <li className="sub-plan__item-list-item">Glass vase with first delivery</li>
                        <li className="sub-plan__item-list-item">Save up to 25%</li>
                    </ul>
                </div>
                <button className="sub-plan__item-button">select</button>
            </div>
            <div className="sub-plan__item">
                <img src={plan2Img} alt="flowers" className="sub-plan__item-img"/>
                <div className="sub-plan__item-info">
                    <h6 className="sub-plan__item-name">Seasonal</h6>
                    <ul className="sub-plan__item-list">
                        <li className="sub-plan__item-list-item">Price $65</li>
                        <li className="sub-plan__item-list-item">Free Delivery</li>
                        <li className="sub-plan__item-list-item">Best seasonal selections</li>
                        <li className="sub-plan__item-list-item">Glass vase with first delivery</li>
                        <li className="sub-plan__item-list-item">Luxury candle with your first delivery</li>
                        <li className="sub-plan__item-list-item">Save up to 28%</li>
                    </ul>
                </div>
                <button className="sub-plan__item-button">select</button>
            </div>
            <div className="sub-plan__item" style={{marginBottom: '40px'}}>
                <img src={plan3Img} alt="flowers" className="sub-plan__item-img"/>
                <div className="sub-plan__item-info">
                    <h6 className="sub-plan__item-name">Luxe</h6>
                    <ul className="sub-plan__item-list">
                        <li className="sub-plan__item-list-item">Price $95</li>
                        <li className="sub-plan__item-list-item">Free Delivery</li>
                        <li className="sub-plan__item-list-item">Premium arrangement</li>
                        <li className="sub-plan__item-list-item">Premium vase with first delivery</li>
                        <li className="sub-plan__item-list-item">Luxury candle with your first delivery</li>
                    </ul>
                </div>
                <button className="sub-plan__item-button">select</button>
            </div>
            <div className="sub-plan__question">
                <h5 className="sub-plan__question-title">How often do you want flowers delivered ?</h5>
                <p className="sub-plan__question-text">Select the delivery frequency</p>
                <div className="sub-plan__question-options">
                    {/*TODO add onClick handler*/}
                    {frequency.map(i => <button
                        className={i.checked ? 'sub-plan__question-options-item-selected' : 'sub-plan__question-options-item'}>{i.name}</button>)}
                </div>
            </div>
            <div className="sub-plan__question">
                <h5 className="sub-plan__question-title">How many deliveries would you like ?</h5>
                <p className="sub-plan__question-text">Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need </p>
                <div className="sub-plan__question-counter">
                    <button className="sub-plan__question-decrease" onClick={decreaseCount}>–</button>
                    <p className="sub-plan__question-value">{count}</p>
                    <button className="sub-plan__question-increase" onClick={increaseCount}>+</button>
                </div>
            </div>
            <button className="sub-plan__checkout">checkout</button>
        </div>
        <div className="sub-plan__img">
            <img src={mainImg} alt="girl with flowers" className="sub-plan__img-item"/>
        </div>
    </div>
}