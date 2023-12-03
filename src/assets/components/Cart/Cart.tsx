import closeImg from './images/close.svg';
import {IProduct} from "../../data/products.ts";
import './cart.scss';

interface IProps {
    itemsInCart: IProduct[];
    isCartOpen: boolean;
    closeCart: () => void;
}

export default function Cart({itemsInCart, isCartOpen, closeCart}: IProps) {


    return <div className={isCartOpen ? 'cart cart-active' : 'cart'}>
        <div className="cart__header">
            <h3 className="cart__title">Shopping Cart</h3>
            <button className="cart__close" onClick={closeCart}>
                <img src={closeImg} alt="close cart" className="cart__close-icon"/>
            </button>
        </div>
        <div className="cart__list">
            {itemsInCart.map((i: IProduct, id) => {
                return <div className='cart__item' key={id}>
                    <div className="cart__item-product">
                        <img src={i.img} alt={i.alt} className="cart__item-img"/>
                        <div className="cart__item-info">
                            <h4 className="cart__item-title">{i.title}</h4>
                            <p className="cart__item-count">Quantity ({i.count})</p>
                            <p className="cart__item-price">${i.price}</p>
                        </div>
                    </div>
                    <button className="cart__item-delete">Remove</button>
                </div>
            })}
        </div>
        <div className="cart__total">
            <h3 className="cart__total-title">Subtotal</h3>
            <p className="cart__total-price">${itemsInCart.reduce((sum, i) => sum + (i.price * i.count), 0)}.00</p>
        </div>
        <textarea name="message" className="cart__message" placeholder='Gift Message'></textarea>
        <p className="cart__tip">
            Shipping & taxes calculated at checkout <br />
            Free standard shipping within Kyiv
        </p>
        <button className="cart__checkout">check out</button>
    </div>
}