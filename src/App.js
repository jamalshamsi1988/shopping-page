import { Navigate, Route , Routes } from "react-router-dom";


//CONTEXT
import ProductContextProvider from "./context/ProductContextProvider";

//Components
import Store from "./components/Store";
import ProductDetailes from "./components/ProductDetailes";

function App() {
  return (
    
    <ProductContextProvider>
     <Routes>
         <Route path="/products" element={<Store/>}/>
         <Route path="/*" element={<Navigate to="/products" />} />
          <Route path="/products/:id" element={<ProductDetailes />} />

   </Routes>
    </ProductContextProvider>
  );
}

export default App;
