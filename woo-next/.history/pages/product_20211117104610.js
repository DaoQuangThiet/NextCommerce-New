import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";
import clientConfig from '../client-config';


const Productnew = ( props) =>{
    console.warn( props );
    const { product } = props;
    return(
        <Layout>
            <div className="product-container">
            { products.length ? (
                products.map( product => <Productnew key={product.id} product={ product} />)
            ) : ''}
            </div>
        </Layout>
)
};

Productnew.getInitialProps = async () =>  {

    const res11 =  await fetch(`${clientConfig.siteUrl}/getProducts`);
    const productsDatas = await res11.json();
    
    return {
        product: productsDatas
    }
};

export default Productnew;
