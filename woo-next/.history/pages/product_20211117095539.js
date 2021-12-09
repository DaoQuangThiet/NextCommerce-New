import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import client from "../components/ApolloClient";
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";

const Product = withRouter( props =>{
    console.warn( props );
    return(
        <div>Product</div>
    )
});

Product.getInitialProps = async() => {
    const res =  await fetch(`${clientConfig.siteUrl}/getProducts`);
    const productsData = await res.json();
    return {
        products: productsData
    }
};

export default Product
