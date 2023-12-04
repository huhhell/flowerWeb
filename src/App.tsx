import './null.css'
import './index.scss'
import Header from "./assets/components/Header/Header.tsx";
import {useState} from "react";
import productsList from "./assets/data/products.ts";
import {BrowserRouter} from "react-router-dom";
import Routes from "./assets/pages/Routes.tsx";
import Footer from "./assets/components/Footer/Footer.tsx";


// .filter(i => i.count > 0)

function App() {
    const [itemsInCart, setItemsInCart] = useState(productsList)
    function increaseProduct(id: number, count: number) {
        let newProducts = [...itemsInCart];
        newProducts[id].count += count
        setItemsInCart(newProducts)
    }

    function decreaseProduct(id: number) {
        let newProducts = [...itemsInCart];
        newProducts[id].count--
        setItemsInCart(newProducts)
    }

  return (
    <div className='_container'>
        <BrowserRouter>
            <Header itemsInCart={itemsInCart}/>
            <Routes products={productsList} addProduct={increaseProduct} removeProduct={decreaseProduct}/>
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
