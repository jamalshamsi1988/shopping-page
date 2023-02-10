import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from './../context/CartContextProvider';

//function
import { shorten , isInCart, quantityCounter } from '../helpers/function';
//css
import styles from '../components/Product.module.css';



const Product = ({productData}) => {
  
  const {state , dispatch}=useContext(CartContext);

  return (
    <div className={styles.container}>
      <img  src={productData.image} alt='product'/>

      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
           {
            isInCart(state , productData.id) ?

            <button onClick={()=> dispatch({type:"INCREASE", payload:productData})}>+</button> :
            <button onClick={()=> dispatch({type:"ADD_ITEM" , payload:productData})}> Add to cart</button>

           }
       
            {
             quantityCounter(state, productData.id) === 1 &&
             <button onClick={()=> dispatch({type:"REMOVE_ITEM" , payload:productData})}> Rmove</button>
              }
            {
              quantityCounter(state, productData.id) > 1 &&
             <button onClick={()=> dispatch({type:"DECREASE", payload:productData})}>-</button>
              
            }
         </div>
      </div>
    </div>
  )
}

export default Product
