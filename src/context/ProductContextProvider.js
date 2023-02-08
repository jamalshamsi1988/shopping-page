import React ,{useState,useEffect,createContext} from 'react';
//API
import { getAPI } from '../services/api';

export const ProductContext=createContext();

const ProductContextProvider = ({children}) => {

  const [products, setProducts]=useState([]);

  useEffect(()=>{

    const fetchApi=async()=>{
      setProducts(await getAPI());
    }
       fetchApi();
  },[])
    
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;
