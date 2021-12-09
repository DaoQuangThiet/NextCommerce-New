import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";
import gql from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { useQuery } from "@apollo/client";



export async function getStaticPróp(){
    const client = new ApolloClient({
        uri:'http://localhost/woo-next/graphql',
        cache: new InMemoryCache()
    });

    const response =  await client.query({
            query: gql`
                query MyQuery {
                    products(first: 20) {
                      nodes {
                        id
                        averageRating
                        slug
                        description
                        image {
                          uri
                          title
                          srcSet
                          sourceUrl
                        }
                        name
                        onSale
                        totalSales
                      }
                    }
                  }`
        });
        
         const posts =response.data.products.map(({nodes}) => nodes); 
         console.log('posts', posts);


    return{
         props: {

         }
    }
}

const PRODUCTS_QUERY = gql`query{
    products(first: 20) {
        nodes {
          id
          averageRating
          slug
          description
          image {
            uri
            title
            srcSet
            sourceUrl
          }
          name
          onSale
          totalSales
        }
      }

}`;

/**
 * Index
 * @param {*} props 
 * @returns 
 * @constructor
 */

const Index = ( props ) =>{

    console.warn( props );
    const { products } = props;
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
Index.getInitialProps =  async() => {
    const result = await client.query({
        query: PRODUCTS_QUERY
    });

    return{
        products: result.data.products.nodes
    }
};
/*
Index.getInitialProps = async() => {
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
};*/

export default Index;