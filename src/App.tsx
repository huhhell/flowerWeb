import './null.css'
import './index.scss'
import Header from "./assets/components/Header/Header.tsx";
import {useState} from "react";
import productsList from "./assets/data/products.ts";


function App() {
    const [itemsInCart, setItemsInCart] = useState(productsList.filter(i => i.count > 0))

  return (
    <div className='_container'>
      <Header itemsInCart={itemsInCart}/>
    </div>
  )
}

export default App
