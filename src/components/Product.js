import React from 'react';
import { Link } from 'react-router-dom';

//function
import { shorten } from '../helpers/function';
//css
import style from '../components/Product.module.css';


const Product = ({productData}) => {
  return (
    <div className={style.container}>
      <img  src={productData.image} alt='product'/>

      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
            <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
