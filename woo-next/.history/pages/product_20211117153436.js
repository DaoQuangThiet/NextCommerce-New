import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import Product from "../components/Product";
import { FETCH_ALL_PRODUCTS_QUERY } from '../utils/gql/GQL_QUERIES';


const Product = ( props) =>{
    return(
        <div>Product</div>
    )
};
export default Product;

export async function getStaticProps() {
    const { data, loading, networkStatus } = await client.query({
      query: FETCH_ALL_PRODUCTS_QUERY,
    });
  
    return {
      props: {
        products: data.products.nodes,
        loading,
        networkStatus,
      },
      revalidate: 10,
    };
  }
