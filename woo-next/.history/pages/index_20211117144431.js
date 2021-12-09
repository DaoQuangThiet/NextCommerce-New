import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";

import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";



export async function getStaticProps(){
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
        
         const posts =response.products.map(({nodes}) => nodes); 
    return{
         props: {
            posts
         }
    }
}


