import Products from "../components/Products/Products.tsx";
import {IProduct} from "../data/products.ts";

interface IProps {
    products: IProduct [];
}
export default function ProductsPage({products}: IProps) {

    return <>
        <Products products={products}/>
    </>
}