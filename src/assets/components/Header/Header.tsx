import './header.scss';
import menuImg from './images/menu.svg';
import cartImg from './images/cart.svg';


import Menu from "../Menu/Menu.tsx";







export default function Header() {

    return <header className='header'>
        <div className="header__links">
            {/*TODO add href*/}
            <a href="#" className="header__shop">Shop</a>
            <a href="#" className="header__contact">Contact</a>

            <button className='header__menu-button'>
                <img src={menuImg} alt="open menu" className="header__menu-img"/>
            </button>
        </div>
        <div className="header__account">
            <button className="header__signin">Sign in</button>
            <button className="header__cart">Cart</button>


            <button className="header__cart-button">
                <img src={cartImg} alt="open cart" className="header__cart-img"/>
            </button>
        </div>
        <Menu isMenuOpen={false}/>
    </header>
}