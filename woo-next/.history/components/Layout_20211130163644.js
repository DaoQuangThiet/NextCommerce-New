import Head from 'next/head';
import { AppProvider } from './context/AppContext';
import Header from "./Header";
// import '../styles/style.css';
const Layout = (props) => {
    return (
        <AppProvider>
            <div>
                <Head>
                    <title>Woocommerce React Theme</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css" />
                </Head>
                <Header />

                {props.children}
            </div>
        </AppProvider>
    );
};
export default Layout;