import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import client from "../components/ApolloClient";
import gql from "graphql-tag";
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
const productData = awai res.json();

return {
    products: productData
}
};

export default Product;
