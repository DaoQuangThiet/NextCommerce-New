import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from "../client-config";
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";

const HomePage = ( props ) =>{
  console.warn( props );
  const { productnew } = props;
    return(
        <div>Product</div>
    );
};


HomePage.getInitialProps =  async function( context ) {
  let { query : {slug } } = context;
  const id = slug ? parseInt ( slug.split('-').pop()):context.query.id;
  const rest =  await fetch(`${clientConfig.siteUrl}/getProducts`);
  const productsDatanew = await rest.json();
  return {
    productnew: rest.productsDatanew
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
