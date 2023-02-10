import React,{useContext} from 'react';
import { Link, useParams } from 'react-router-dom';

//context
import { ProductContext } from '../context/ProductContextProvider';

const ProductDetailes = (props) => {

  const data=useContext(ProductContext);
  const params=useParams();
  const id=params.id;
  const {image,price,title,description,category}=data[id - 1];

  return (
    <div>
        <img src={image} alt="product"/>
   <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{category}</p>
   </div>
      <div>
        <span>{price} $</span>
        <Link to="/products">Go back to shop</Link>
       </div>
    </div>
  )
}

export default ProductDetailes;
