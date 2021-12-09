import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import { FETCH_ALL_PRODUCTS_QUERY } from '../utils/gql/GQL_QUERIES';


const HomePage = ( props) =>{
    return(
        <div>Product</div>
    )
};
export default HomePage;

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
