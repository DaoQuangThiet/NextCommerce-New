import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from "../client-config";
import fetch from 'isomorphic-unfetch';
import gql from "graphql-tag";
import Container from '@mui/material/Container';

const HomePage = (props => {
  const { productsDatanew } = props;
  return (
    <Layout>
      {productsDatanew ? (
        <Container fixed>
          <div className="card bg-light mb-3 p-5">
            <div className="card-header">{productsDatanew.name}</div>
            <div className="card-body">
              <h4 className="card-title">{productsDatanew.name}</h4>
              <img src={productsDatanew.images[0].src} alt="Product image" width="200" />
              <p className="card-text">{productsDatanew.description}</p>
            </div>
          </div>
        </Container>
      ) : ''}
    </Layout>
  )
});


HomePage.getInitialProps = async function (context) {
  let { query: { slug } } = context;
  const id = slug ? parseInt(slug.split('-').pop()) : context.query.id; // tách chuỗi để lấy id
  const rest = await fetch(`${clientConfig.siteUrl}/product/${id}`);
  const productsDatanew = await rest.json();

  console.log(`Fetched show: ${productsDatanew.id}`)


  return {
    productsDatanew: productsDatanew
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
