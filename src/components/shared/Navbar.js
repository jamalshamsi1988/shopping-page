import React,{useContext} from 'react';

//context
import { CartContext } from '../../context/CartContextProvider';

//icon
import shopIcon from '../../assets/icons/shop.svg';
import { Link } from 'react-router-dom';
//Css
import styles from '../shared/Navbar.module.css';

const Navbar = () => {
    
    const{state}=useContext(CartContext);
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
      <Link to='/products'>Products</Link>
        <Link to='/signup'> Sing Up</Link>
        <Link to="/login"> Login</Link>
        <Link to="/aboutus">About us</Link>
      </div>
        <div className={styles.shopIcon} > 
            <Link to='/cart'><img src={shopIcon} alt="shopIcon" /></Link>
        
        <span>{state.itemsCounter}</span>
        </div>
      

    </div>
  )
}

export default Navbar
