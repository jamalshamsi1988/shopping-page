import React, { useContext } from 'react';

import Product from './Product';

//Context
import {ProductContext} from '../context/ProductContextProvider';
//css
import style from '../components/Store.module.css';

const Store= () => {
  
  const products=useContext(ProductContext);

  return (
    <div className={style.container}>
      {
        products.map(item =>  <Product key={item.id} productData={item}/> )
      }
    </div>
  )
}

export default Store;
