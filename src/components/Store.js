import React, { useContext ,useState} from 'react';

import Product from './shared/Product';
import Loding from '../components/Loding'

//Context
import {ProductContext} from '../context/ProductContextProvider';
//css
import styles from '../components/Store.module.css';


const Store= () => {
  
  const products=useContext(ProductContext);
  const [search , setSearch]=useState("");
  

  const searchHandler= event =>{
    setSearch(event.target.value);
  }
  const searchProduct=products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" placeholder='Search' value={search} onChange={searchHandler} />
          </div>

          {
            products.length ?

            <div className={styles.container}>   
      {
        searchProduct.map(item =>  <Product key={item.id} productData={item}/> )
      }

          </div>
          :
            <Loding />
            
      }
    </>
  )
}

export default Store;
