import './null.css'
import './index.scss'
import Header from "./assets/components/Header/Header.tsx";
import {useState} from "react";
import productsList from "./assets/data/products.ts";
import {BrowserRouter} from "react-router-dom";
import Routes from "./assets/pages/Routes.tsx";


function App() {
    const [itemsInCart, setItemsInCart] = useState(productsList.filter(i => i.count > 0))

  return (
    <div className='_container'>
        <BrowserRouter>
            <Header itemsInCart={itemsInCart}/>
            <Routes />
        </BrowserRouter>
    </div>
  )
}

export default App
