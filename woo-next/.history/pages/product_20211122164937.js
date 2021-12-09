import * as React from 'react';
import ReactDOM from 'react-dom';
import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from "../client-config";
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";

const HomePage = ( props ) =>{
  const { products } = props;
    return(
        <Layout>
         <div className="product-container">
                { products.length ? (
                    products.map( product => <Product key={product.id} product={ product} />)
                ) : ''}
                </div>
        </Layout>
    );
};


HomePage.getInitialProps =  async function( context ) {
  let { query : {slug } } = context;
  const id = slug ? parseInt ( slug.split('-').pop()):context.query.id;
  const rest =  await fetch(`${clientConfig.siteUrl}/getProducts`);
  const productsDatanew = await rest.json();
  return {
    productsDatanew
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
