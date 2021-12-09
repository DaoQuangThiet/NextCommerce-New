import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import { FETCH_ALL_PRODUCTS_QUERY } from '../utils/gql/GQL_QUERIES';


const HomePage = ( props ) =>{
    return(
        <div>Product</div>
    );
};


HomePage.getInitialProps =  async function( context ) {
  let { query : {slug } } = context;
  const id = slug ? parseInt ( slug.split('-').pop()):context.query.id;
  const result = await client.query({
    query: FETCH_ALL_PRODUCTS_QUERY,
  });
  const res= await client.query(({
    query: result,
    variables: {id}
  }));
  return {
      products: res.data.products
  }
};
export default HomePage;

// export async function getStaticProps() {
//     const result = await client.query({
//       query: FETCH_ALL_PRODUCTS_QUERY,
//     });
  
//     return {
//         products: result.products.nodes
//   };
// }
