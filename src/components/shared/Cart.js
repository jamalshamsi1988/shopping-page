import React ,{useContext} from 'react'
//function
import { shorten } from '../../helpers/function';
//context
import { CartContext } from './../../context/CartContextProvider';
//icons
import trash from '../../assets/icons/trash.svg'
//Css
import styles from '../shared/Cart.module.css';


const Cart = ({data}) => {
  const{dispatch}=useContext(CartContext);
    
  return (
    <div className={styles.container}>
     <img className={styles.productImage} src={data.image}  alt="Imag"/>
     <div className={styles.data}>
     <h3>{shorten(data.title)}</h3>
     <p>{data.price} $</p>
     </div>
     <div><span className={styles.quantity}>{data.quantity}</span></div>
     <div className={styles.buttonContainer}>
      { data.quantity >1 ? <button onClick={()=>dispatch({type:"DECREASE",payload:data})}>-</button>:
      <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:data})}><img src={trash} alt='trash'/></button>  
      }
        <button onClick={()=>dispatch({type:"INCREASE",payload:data})}>+</button>
     </div>
     
     
    </div>
  )
}

export default Cart;
