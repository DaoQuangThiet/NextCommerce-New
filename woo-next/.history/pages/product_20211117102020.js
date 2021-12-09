import Layout from "../components/Layout";
import fetch from "node-fetch";
import client from "../components/ApolloClient";
import Product from "../components/Product";
import clientConfig from "../client-config";

const Product =( props) =>{
    console.warn( props );
    return(
        <div>Product</div>
    )
};

Product.getInitialProps = async() => {

const res = await fetch (`${clientConfig.siteUrl}/getProducts`);
const productData = await res.json();

return {
    products: productData
}
};

export default Product;
