import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from "../client-config";
import fetch from 'isomorphic-unfetch';
import gql from "graphql-tag";

const HomePage = ( props)  =>{
  const { products } = props;
    return(
        <Layout>
          { products ? (
         <div className="sadsadsad" style="background:red;">{ products.name}</div>
          ) : ''}
        </Layout>
    )
};


HomePage.getInitialProps =  async( ) => {
  
  const rest =  await fetch(`${clientConfig.siteUrl}/getProducts`);
  const productsDatanew = await rest.json();
  return {
    products: productsDatanew
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
