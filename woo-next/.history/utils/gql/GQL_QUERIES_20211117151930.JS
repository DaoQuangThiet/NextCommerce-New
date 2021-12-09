import {gql} from '@apollo/client';
export const FETCH_ALL_PRODUCTS_QUERY = gql`
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
  }
  `;