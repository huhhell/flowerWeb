import mainImg from './images/image.jpeg'
import {Link} from "react-router-dom";
import './service.scss'

export default function Service() {
    
    return <div className='service'>
        <img src={mainImg} alt="girl with flowers" className="service__img"/>
        <div className="service__info">
            <div className="service__info-container">
                <p className="service__subtitle">service</p>
                <h5 className="service__title">Flower Subcriptions</h5>
                <p className="service__text">Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                <Link to='subscription' className="service__link">Subscribe now</Link>
            </div>
        </div>
    </div>
}