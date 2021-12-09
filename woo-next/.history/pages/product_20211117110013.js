import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import Product from "../components/Product";

var Product = function(props) =>{
    console.warn( props );
    return(
        <div>Product</div>
    )
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
