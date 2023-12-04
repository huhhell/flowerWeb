import {IProduct} from "../../data/products.ts";
import {useState} from "react";
import './productPopup.scss';
import {ClickAwayListener} from "@mui/base";
import closeImg from '/src/assets/components/Menu/images/close.svg';

interface IProps {
    productsList: IProduct[],
    idOfProduct: number,
    closeProduct: () => void;
    addProduct: (id: number, count: number) => void;
}

export default function ProductPopup({productsList, idOfProduct, closeProduct, addProduct}: IProps) {

    if (idOfProduct === -1) {
        return <></>
    }

    let item = productsList[idOfProduct];

    const [currentCount, setCurrentCount] = useState(0);
    const [isAlertShowed, setIsAlertShowed] = useState(false);

    function showAddedAlert() {
        setIsAlertShowed(true);
        setTimeout(() => setIsAlertShowed(false), 2000)
    }

    return <div className='product__container'>
        <ClickAwayListener onClickAway={closeProduct}>
            <div className='product'>
                <img src={item.img} alt={item.alt} className="product__img"/>
                <div className="product__info">
                    <button className="product__close" onClick={closeProduct}>
                        <img src={closeImg} alt="" className="product__close-img"/>
                    </button>
                    <p className="product__subtitle">fresh flowers / <span
                        className="product__subtitle-gray">{item.title}</span></p>
                    <h3 className="product__name">{item.title} - ${item.price}</h3>
                    <p className="product__text">
                        Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty
                        and
                        subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these
                        sublime
                        flowers even
                    </p>
                    <div className="product__count">
                        <p className="product__count-text">Quantity</p>
                        <div className="product__count-change">
                            <button className="product__count-decrease"
                                    onClick={() => currentCount === 0 ? setCurrentCount(0) : setCurrentCount(currentCount - 1)}>
                                –
                            </button>
                            <p className="product__count-current">{currentCount}</p>
                            <button className="product__count-increase"
                                    onClick={() => setCurrentCount(currentCount + 1)}>+
                            </button>
                        </div>
                    </div>
                    <div className="product__options">
                        <p className="product__options-text">Price options</p>
                        <div className="product__options-item">
                            <input type="radio" name='price' className="product__options-item-checkbox"
                                   id='product__options-item-text' checked/>
                            <label htmlFor="product__options-item-checkbox" className="product__options-item-text">One
                                time purchase. Price ${item.price}</label>
                        </div>
                        <div className="product__options-item">
                            <input type="radio" name='price' className="product__options-item-checkbox"
                                   id='product__options-item-text-2'/>
                            <label htmlFor="product__options-item-checkbox-2" className="product__options-item-text">Subscribe
                                now, and save 25% on this order. </label>
                        </div>
                    </div>
                    <button className="product__add" onClick={() => {
                        addProduct(item.id, currentCount);
                        showAddedAlert();
                    }}>add to cart
                    </button>
                </div>
                {isAlertShowed ? <p className='product__added'>Added to cart</p> : <></>}
            </div>
        </ClickAwayListener>
    </div>
}