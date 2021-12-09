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
          { products ? (
            <div className="card bg-light mb-3 p-5">
              <div className="card-header">{ products.name}</div>
              <div className="card-body">
                <h4 className="card-title">{products.name}</h4>
                <img 
            src={ product.images[0].src }
            alt="Product image"/>
                <p className="card-text">{products.description}</p>
              </div>
            </div>
          ) : ''}
        </Layout>
    );
};


HomePage.getInitialProps =  async () => {

  const rest =  await fetch(`${clientConfig.siteUrl}/getProducts`);
  const products = await rest.json();
  return {
    products
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