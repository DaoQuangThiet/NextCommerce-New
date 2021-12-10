import Layout from "../components/Layout";
import gql from "graphql-tag";
import fetch from 'isomorphic-unfetch';
import client from "../components/ApolloClient";
import clientConfig from '../client-config';
import ParentCategoriesBlock from "../components/category/category-block/ParentCategoriesBlock";

// const CATEGORY_QUERY = gql `query{
//     productCategories(first: 10) {
//         nodes {
//           id
//           name
//           slug
//           image {
//             sourceUrl
//             srcSet
//             uri
//           }
//         }
//       }
// }`;

const Categories = (props) => {

    console.warn(props);
    // console.warn(props)
    const { productCategories } = props;
    return (
        <Layout>
            {/*Categories */}
            <div className="text-center mt-5">
                <h2>Categories</h2>
                <ParentCategoriesBlock
                    productCategories={productCategories}
                />
            </div>
        </Layout>
    )
};

// Categories.getInitialProps = async () => {
//     const result = await client.query( {
//         query: CATEGORY_QUERY
//     });

//     return {
//         productCategories: result.data.productCategories.nodes
//     }
// };
Categories.getInitialProps = async () => {
    const res = await fetch(`${clientConfig.siteUrl}/getProducts`);
    const productCategories = await res.json();


    return {
        productCategories: productCategories
    }
};

export default Categories;