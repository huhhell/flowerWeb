import Products from "../components/Products/Products.tsx";
import {IProduct} from "../data/products.ts";

interface IProps {
    products: IProduct [];
    addProduct: (id: number, count: number) => void;
    removeProduct: (id: number) => void;
}
export default function ProductsPage({products, addProduct, removeProduct}: IProps) {

    return <>
        <Products products={products} addProduct={addProduct} removeProduct={removeProduct}/>
    </>
}