import React, { useContext } from 'react';

import Product from './Product';

//Context
import {ProductContext} from '../context/ProductContextProvider';

const Store= () => {
  
  const products=useContext(ProductContext);

  return (
    <div>
      {
        products.map(item =>  <Product key={item.id} productData={item}/> )
      }
    </div>
  )
}

export default Store;
