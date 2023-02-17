import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//components
import Cart from './shared/Cart';
//Context
import { CartContext } from '../context/CartContextProvider';
//Css
import styles from '../components/ShopCart.module.css';


const ShopCart = () => {
  const {state,dispatch}=useContext(CartContext);

  return (

    <div  className={styles.container} >
      <div className={styles.cartContainer}>
         {
      state.selectedItems.map(item => <Cart key={item.id} data={item} />)
     }
     </div>
     {
     state.itemsCounter > 0 && <div className={styles.payments}>
      <p><span>Total Items:{state.itemsCounter}</span></p>
      <p><span>Total Payments:{state.total}</span></p>

      <div  className={styles.buttonContainer}>
        <button className={styles.checkout} onClick={()=>dispatch({type:"CHECKOUT"})}>Check Out</button>
        <button className={styles.clear} onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
      </div>
      </div>
      }
      {
        state.checkOut && <div  className={styles.complete}>
          <h3>Check Out Successfully!</h3>
          <Link to='/products'>Buy More</Link>
        </div>
      }
       {
        !state.checkOut && state.itemsCounter===0 && <div className={styles.complete}>
          <h3>Want to buy?</h3>
          <Link to='/products'>Go to shop</Link>
        </div>
      }
      
    
     
    </div>
  )
}

export default ShopCart
