import {Route, Routes} from "react-router-dom";
import Main from "./Main.tsx";
import ProductsPage from "./ProductsPage.tsx";
import {IProduct} from "../data/products.ts";
import Subscription from "./Subscription.tsx";


interface IProps {
    products: IProduct[];
    addProduct: (id: number, count: number) => void;
}

export default ({products, addProduct}: IProps) => {
    return <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/products' element={<ProductsPage products={products} addProduct={addProduct}/>} />
        <Route path='/subscription' element={<Subscription />} />
    </Routes>
}