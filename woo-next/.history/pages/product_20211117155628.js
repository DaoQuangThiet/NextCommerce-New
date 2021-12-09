import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import { FETCH_ALL_PRODUCTS_QUERY } from '../utils/gql/GQL_QUERIES';


const HomePage = ( {products}) =>{
    return(
        <div>Product</div>
    );
};
export default HomePage;

export async function getStaticProps() {
    const result = await client.query({
      query: FETCH_ALL_PRODUCTS_QUERY,
    });
  
    return {
      props: {
        products: result.products.nodes,
      },
      revalidate: 10,
    };
  }
