import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import Product from "../components/Product";

const Product = withRouter( props =>{
    console.warn( props );
    const { product } = props;
    return(
        <div>Product</div>
    )
});

Product.getInitialProps = async function( context ) {

    const res =  await fetch(`${clientConfig.siteUrl}/getProducts`);
    const productsDatas = await res.json();
    
    return {
        product: productsDatas
    }
};

export default Product
