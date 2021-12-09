import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";

const Product = ( props ) =>{

    console.warn( props );
    const { product } = props;
    <div>HI BRO</div>
};
Product.getInitialProps = async() => {
const res =  await fetch(`${clientConfig.siteUrl}/getProducts`);
const productsData = await res.json();

return {
    products: productsData
}
    // const result = await client.query( {
    //     query:PRODUCTS_QUERY
    // });

    // return {
    //     products: result.data.products.nodes
    // }
};

export default Product;