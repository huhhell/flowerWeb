import {Route, Routes} from "react-router-dom";
import Main from "./Main.tsx";
import ProductsPage from "./ProductsPage.tsx";

export default () => {
    return <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/products' element={<ProductsPage />} />
    </Routes>
}