import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";
import clientConfig from '../client-config';


const Product = withRouter( props =>{
    console.warn( props );
    const { product } = props;
    return(
        <Layout>
            <div className="product-container">
            { products.length ? (
                products.map( product => <Product key={product.id} product={ product} />)
            ) : ''}
            </div>
        </Layout>
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
