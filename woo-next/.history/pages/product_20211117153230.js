import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import Product from "../components/Product";
import { FETCH_ALL_PRODUCTS_QUERY } from '../utils/gql/GQL_QUERIES';

/**
 * Main index page
 * @param {Object} products
 * Initial static data is sent as props from getStaticProps and loaded through 'utils/gql/INITIAL_PRODUCTS'
 */
const HomePage = ({ products }) => {
  return (
    <>
      <Header title="- Forside" />
      <Hero />
      <PageTitle title="Produkter" />
      {product && <IndexProducts products={products} />}
    </>
  );
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
