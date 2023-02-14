import React, { useContext ,useState} from 'react';

import Product from './shared/Product';

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


  return (
    <>
          <div>
            <input type="text" placeholder='Search' value={search} onChange={searchHandler} />
           
          </div>
    <div className={styles.container}>
      {
        products.map(item =>  <Product key={item.id} productData={item}/> )
      }
    </div>

    </>
  )
}

export default Store;
