import productsList, {IProduct} from "../../data/products.ts";
import bgImg from './images/main.jpeg';
import './products.scss';
import {useState} from "react";
import ProductPopup from "../ProductPopup/ProductPopup.tsx";

interface IProps {
    products: IProduct[];
    addProduct: (id: number, count: number) => void;
    removeProduct: (id: number) => void;
}

export default function Products({products, addProduct, removeProduct}: IProps) {
    const [idOfOpenedProduct, setIdOfOpenedProduct] = useState(-1);


    return <div className='products'>

        <div className="products__title-container">
            <div className="products__title-items">
                <img src={bgImg} alt="bg img" className="products__title-img"/>
                <h2 className="products__title">Fresh Flowers</h2>
            </div>
        </div>
        <div className="products__list">
            {productsList.map((i, id) => {
                return <div className='products__item' key={id} onClick={() => setIdOfOpenedProduct(id)}>
                    <img src={i.img} alt={i.alt} className="products__item-img" style={{top: i.topOffset}}/>
                    <h6 className="products__item-name">{i.title}</h6>
                    <p className="products__item-price">price {i.price}$</p>
                </div>
            })}
        </div>
        <ProductPopup productsList={products} idOfProduct={idOfOpenedProduct}
                      closeProduct={() => setIdOfOpenedProduct(-1)} addProduct={addProduct} removeProduct={removeProduct}/>
    </div>
}