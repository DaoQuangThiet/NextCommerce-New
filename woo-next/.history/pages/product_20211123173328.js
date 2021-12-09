import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from "../client-config";
import fetch from 'isomorphic-unfetch';
import gql from "graphql-tag";

const HomePage = ( props  =>{
  const { productsDatanew } = props;
    return(
        <Layout>
          { productsDatanew ? (
         <div className="card-header">{ productsDatanew.name}</div>
          ) : ''}
        </Layout>
    )
});


HomePage.getInitialProps =  async function( context ) {
  let { query : {slug } } = context;
  const id = slug ? parseInt ( slug.split('-').pop()):context.query.id;
  const rest =  await fetch(`${clientConfig.siteUrl}/product/${id}`);
  const productsDatanew = await rest.json();

  console.log(`Fetched show: ${productsDatanew.id}`)


  return {
    productsDatanew:productsDatanew
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
