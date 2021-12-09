import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Link from 'next/link';
const Product = (props) => {
    const { product } = props;
    
    return (
    <div className="card mb-3 mr-4" >
      <h3 className="card-header text-center">{product.name}</h3>
      <Link as={`/product/${ product.slug}-${ product.id}`} href={product.permalink }>
        <a>
          <img 
            src={ product.images[0].src }
            alt="Product image"/>
        </a>
      </Link>
      <div className="card-body  text-center">
      <h6 className="card-subtitle mb-3">{'cost :$'+product.regular_price}</h6>
      <h6 className="card-subtitle mb-4">{'Sale :$' + product.sale_price}</h6>
      <Button variant="contained">Add To Cart</Button>
    </div>
</div>
    );
}

export default Product;