import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import Product from "../components/Product";

const Product = withRouter({
    console.warn( props );
    return(
        <div>Product</div>
    )
});

Product.getInitialProps = async function( context ) {

    let{ query: {slug }} = context;
    const id= slug ? parseInt( slug.split( '-').pop()) : context.query.id;

    const PRODUCTS_QUERY = qgl` query Product($id: Int !) {
        productBy( productId: $id) {
            id
            slug
            description
            image {
                uri
                title
                srcSet
                sourceUrl
            }
            name
            regular_price
            regular_price
        }
    }`;
    const res =  await client.query(({
        query: PRODUCTS_QUERY,
        variables:{id}
    }));
    return {
        product: res.data.productBy
    }
};

export default Product
