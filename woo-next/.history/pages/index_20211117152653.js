import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";
import {FETCH_ALL_PRODUCTS_QUERY} from '../utils/gql/GQL_QUERIES';

const Index = ( {products} ) =>{

    return(
            <Layout>
                <div className="product-container">
                { products.length ? (
                    products.map( product => <Product key={product.id} product={ product} />)
                ) : ''}
                </div>
            </Layout>
    )
};

export default Index;

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


// Index.getInitialProps = async() => {
// const res =  await fetch(`${clientConfig.siteUrl}/getProducts`);
// const productsData = await res.json();

// return {
//     products: productsData
// }
//     // const result = await client.query( {
//     //     query:PRODUCTS_QUERY
//     // });

//     // return {
//     //     products: result.data.products.nodes
//     // }
// };