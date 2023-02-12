import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//components
import Cart from './shared/Cart';

import { CartContext } from '../context/CartContextProvider';


const ShopCart = () => {
  const {state,dispatch}=useContext(CartContext);

  return (

    <div>
      <div>
         {
      state.selectedItems.map(item => <Cart key={item.id} data={item} />)
     }
     </div>
     {
     state.itemsCounter > 0 && <div>
      <p><span>Total Items:{state.itemsCounter}</span></p>
      <p><span>Total Payments:{state.total}</span></p>
      <div>
        <button onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
        <button onClick={()=>dispatch({type:"CHECKOUT"})}>Check Out</button>
      </div>
      </div>
      }
      {
        state.checkOut && <div>
          <h3>Check Out Successfully!</h3>
          <Link to='/products'>Buy More</Link>
        </div>
      }
       {
        !state.checkOut && state.itemsCounter===0 && <div>
          <h3>Want to buy?</h3>
          <Link to='/products'>Go to shop</Link>
        </div>
      }
      
    
     
    </div>
  )
}

export default ShopCart
