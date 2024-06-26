import './header.scss';
import menuImg from './images/menu.svg';
import cartImg from './images/cart.svg';


import Menu from "../Menu/Menu.tsx";
import {useState} from "react";
import Cart from "../Cart/Cart.tsx";
import {IProduct} from "../../data/products.ts";
import {Link} from "react-router-dom";

interface IProps {
    itemsInCart: IProduct[];
    removeProduct: (id: number, count: number) => void;
}

export default function Header({itemsInCart, removeProduct}: IProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    function toggleMenu() {setMenuOpen(!menuOpen)}
    function toggleCart() {setCartOpen(!cartOpen)}

    return <header className='header'>
        <div className="header__links">
            <Link to='products' className='header__shop'>Shop</Link>
            <a href="#" className="header__contact">Contact</a>

            <button className='header__menu-button' onClick={toggleMenu}>
                <img src={menuImg} alt="open menu" className="header__menu-img"/>
            </button>
        </div>
        <div className="header__account">
            <button className="header__signin">Sign in</button>
            <button className="header__cart" onClick={toggleCart}>Cart</button>


            <button className="header__cart-button" onClick={() => toggleCart()}>
                <img src={cartImg} alt="open cart" className="header__cart-img"/>
            </button>
        </div>
        <Menu isMenuOpen={menuOpen} closeMenu={toggleMenu}/>
        <Cart itemsInCart={itemsInCart} closeCart={toggleCart} isCartOpen={cartOpen} removeProduct={removeProduct}/>
    </header>
}