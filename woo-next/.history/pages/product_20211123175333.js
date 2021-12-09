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
            <div className="card bg-light mb-3 p-5">
                  <div className="card-header">{ productsDatanew.name}</div>
                  <div className="card-body">
                    <h4 className="card-title">{productsDatanew.name }</h4>
                    <img src={ productsDatanew.image.src} alt="Product Image" with="200" srcSet={ productsDatanew.image.srcSet} />
                    <p className="card-text">{productsDatanew.description}</p>
                  </div>
            </div>
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
