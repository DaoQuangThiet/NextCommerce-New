import '../styles/style.css';

//mặc định này là bắt buộc
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }