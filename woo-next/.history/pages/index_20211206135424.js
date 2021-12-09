import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    productcontainer: {
        display: 'flex',
        flexFlow: 'wrap',
        padding: '25px',
    },
});

const Index = (props) => {


    const classes = useStyles();

    console.warn(props);
    const { products } = props;
    return (
        <Layout>
            <div className={classes.productcontainer}>
                {products.length ? (
                    products.map(product => <Product key={product.id} product={product} />)
                ) : ''}
            </div>
        </Layout>
    )
};
Index.getInitialProps = async () => {
    const res = await fetch(`${clientConfig.siteUrl}/getProducts`);
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

export default Index;