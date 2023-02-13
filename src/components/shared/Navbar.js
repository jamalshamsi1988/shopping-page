import React,{useContext} from 'react';

//context
import { CartContext } from '../../context/CartContextProvider';

//icon
import shopIcon from '../../assets/icons/shop.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
    
    const{state}=useContext(CartContext);
  return (
    <div>
        <Link to='/products'>Products</Link>
        <Link to='/signup'> Sing Up</Link>
        <div>
            <Link to='/cart'><img src={shopIcon} alt="shopIcon" /></Link>
        
        <span>{state.itemsCounter}</span>
        </div>
      

    </div>
  )
}

export default Navbar
