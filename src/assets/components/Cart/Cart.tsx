import closeImg from './images/close.svg';
import {IProduct} from "../../data/products.ts";

interface IProps {
    itemsInCart: IProduct[]
}

export default function Cart({itemsInCart}: IProps) {


    return <div className="cart">
        <div className="cart__header">
            <h3 className="cart__title">Shopping Cart</h3>
            <button className="cart__close">
                <img src={closeImg} alt="close cart" className="cart__close-icon"/>
            </button>
        </div>
        <div className="cart__list">
            {itemsInCart.map((i: IProduct) => {
                return <div className='cart__item'>
                    <img src={i.img} alt={i.alt} className="cart__item-img"/>
                    <div className="cart__item-info">
                        <h4 className="cart__item-title">{i.title}</h4>
                        <p className="cart__item-count">Quantity {i.count}</p>
                        <p className="cart__item-price">${i.price}</p>
                    </div>
                    <button className="cart__item-delete">Remove</button>
                </div>
            })}
        </div>
        <div className="cart__total">
            <h3 className="cart__total-title"></h3>
            <p className="cart__total-price"></p>
        </div>
        <textarea name="message" className="cart__message" placeholder='Gift Message'></textarea>
        <p className="cart__tip">
            Shipping & taxes calculated at checkout <br />
            Free standard shipping within Kyiv
        </p>
        <button className="cart__checkout">check out</button>
    </div>
}