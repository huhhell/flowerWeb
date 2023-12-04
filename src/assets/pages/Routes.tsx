import {Route, Routes} from "react-router-dom";
import Main from "./Main.tsx";
import ProductsPage from "./ProductsPage.tsx";
import {IProduct} from "../data/products.ts";


interface IProps {
    products: IProduct[];
    addProduct: (id: number, count: number) => void;
    removeProduct: (id: number) => void;
}

export default ({products, addProduct, removeProduct}: IProps) => {
    return <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/products' element={<ProductsPage products={products} addProduct={addProduct} removeProduct={removeProduct}/>} />
    </Routes>
}