import React,{useContext} from 'react';
import { Link, useParams } from 'react-router-dom';

//context
import { ProductContext } from '../context/ProductContextProvider';
//Css
import styles from '../components/ProductDetailes.module.css';

const ProductDetailes = (props) => {

  const data=useContext(ProductContext);
  const params=useParams();
  const id=params.id;
  const {image,price,title,description,category}=data[id - 1];

  return (
    <div  className={styles.container}>
        <img className={styles.image} src={image} alt="product"/>
   <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>{category}</p>
    <div  className={styles.buttonContainer}>
        <span className={styles.price}>{price} $</span>
        <Link to="/products">Back to Shop</Link>
       </div>
       </div>
    </div>
  )
}

export default ProductDetailes;
