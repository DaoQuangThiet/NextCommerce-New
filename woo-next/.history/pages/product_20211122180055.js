import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from "../client-config";
import fetch from 'isomorphic-unfetch';
import gql from "graphql-tag";

const HomePage = ( props  =>{
  const { products,id } = props;
  console.log(products,id);
    return(
        <Layout>
          { products ? (
         <div className="card-header">{ products.name}</div>
          ) : ''}
        </Layout>
    )
});


HomePage.getInitialProps =  async function( context ) {
  let { query : {slug } } = context;
  const id = slug ? parseInt ( slug.split('-').pop()):context.query.id;
  const rest =  await fetch(`${clientConfig.siteUrl}/getProducts`);
  const productsDatanew = await rest.json();
  return {
    productsDatanew,id
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
