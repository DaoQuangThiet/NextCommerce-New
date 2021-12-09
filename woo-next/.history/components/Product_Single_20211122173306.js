import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
const Product = (props) => {
    const { product } = props;
    
    return (
    <div className="card mb-3 mr-4" >
      <h3 className="card-header text-center">{product.name}</h3>
      
        <a>
          <img 
            src={ product.images[0].src }
            alt="Product image"/>
        </a>
      <div className="card-body  text-center">
    </div>
</div>
    );
}

export default Product;