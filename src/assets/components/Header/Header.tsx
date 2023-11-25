import './header.scss';

export default function Header() {


    return <header className='header'>
        <div className="header__links">
            {/*TODO add link*/}
            <a href="#" className="header__shop">Shop</a>
            <a href="#" className="header__contact">Contact</a>
        </div>
        <div className="header__account">
            <button className="header__signin">Sign in</button>
            <button className="header__cart">Cart</button>
        </div>
    </header>
}