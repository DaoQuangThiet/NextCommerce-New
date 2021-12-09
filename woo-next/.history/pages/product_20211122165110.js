import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from "../client-config";
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";
import gql from "graphql-tag";

const HomePage = ( props ) =>{
  const { products } = props;
    return(
        <Layout>
          { products ? (
            <div className="card bg-light mb-3 p-5">
              <div className="card-header">{ products.name}</div>
              <div className="card-body">
                <h4 className="card-title">{products.name}</h4>
               <p className="card-text">{products.description}</p>
              </div>
            </div>
          ) : ''}
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
