import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Link from 'next/link';
import AddToCartButton from './cart/AddToCartButton';
const Product = (props) => {
  const { product } = props;


  return (
    <div className="card mb-3 mr-4" >
      <h3 className="card-header text-center">{product.name}</h3>
      <Link as={`/product/${product.slug}-${product.id}`} href={`/product?slug=${product.slug}-${product.id}`}>
        <a>
          <img
            src={product.images[0].src}
            alt="Product image" />
        </a>
      </Link>
      <div className="card-body  text-center">
        <h6 className="card-subtitle mb-3">{'cost :$' + product.regular_price}</h6>
        <h6 className="card-subtitle mb-4">{'Sale :$' + product.sale_price}</h6>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
// Product.getInitialProps =  async function( context ) {
//   let { query : {slug } } = context;
//   const id = slug ? parseInt ( slug.split('-').pop()):context.query.id;
//   const rest =  await fetch(`${clientConfig.siteUrl}/`);
//   const productsDatanew = await rest.json();


//   return {
//     results: productsDatanew['data'].map(data =>data)
//   }
// };
export default Product;