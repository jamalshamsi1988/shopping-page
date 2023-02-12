import React ,{useContext} from 'react'
//function
import { shorten } from '../../helpers/function';
//context
import { CartContext } from './../../context/CartContextProvider';
//icons
import trash from '../../assets/icons/trash.svg'

const Cart = ({data}) => {
  const{dispatch}=useContext(CartContext);
    
  return (
    <div>
     <img src={data.image}  alt="Imag"/>
     <div>
     <h3>{shorten(data.title)}</h3>
     <p>{data.price}</p>
     </div>
     <div><span>{data.quantity}</span></div>
     <div>
      { data.quantity >1 ? <button onClick={()=>dispatch({type:"DECREASE",payload:data})}>-</button>:
      <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:data})}><img src={trash} alt='trash'/></button>  
      }
        <button onClick={()=>dispatch({type:"INCREASE",payload:data})}>+</button>
     </div>
     
     
    </div>
  )
}

export default Cart
