import products from "../../data/products.ts";
import bgImg from './images/main.jpeg';
import './products.scss';

export default function Products() {

    return <div className='products'>
        <div className="products__title-container">
            <div className="products__title-items">
                <img src={bgImg} alt="bg img" className="products__title-img"/>
                <h2 className="products__title">Fresh Flowers</h2>
            </div>
        </div>
        <div className="products__list">
            {products.map(i => {
                return <div className='products__item'>
                    <img src={i.img} alt={i.alt} className="products__item-img" style={{top: i.topOffset}}/>
                    <h6 className="products__item-name">{i.title}</h6>
                    <p className="products__item-price">price {i.price}$</p>
                </div>
            })}
        </div>
    </div>
}