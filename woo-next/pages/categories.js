import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import clientConfig from '../client-config';

const Categories = (props) => {

    console.warn(props)
    const { productCategories } = props;
    return (
        <Layout>
            {/*Categories */}
            <div className="text-center mt-5">
                <h2>Categories</h2>
            </div>
        </Layout>
    )
};

Categories.getInitialProps = async () => {
    const res = await fetch(`${clientConfig.siteUrl}/getProducts`);
    const productCategories = await res.json();


    return {
        productCategories: productCategories
    }
};

export default Categories;