import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';
import Product_Single from "../components/Product";

const HomePage = ( props ) =>{

    console.warn( props );
    const { products } = props;
    return(
      <Layout>
      <div className="product-container">
      { products.length ? (
          products.map( product => <Product_Single  />)
      ) : ''}
      </div>
  </Layout>
    )
};
HomePage.getInitialProps = async() => {
const res =  await fetch(`${clientConfig.siteUrl}/getProducts`);
const productsData = await res.json();

return {
    products: productsData
}
    // const result = await client.query( {
    //     query:PRODUCTS_QUERY
    // });

    // return {
    //     products: result.data.products.nodes
    // }
};

export default HomePage;