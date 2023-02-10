import { Navigate, Route , Routes } from "react-router-dom";


//CONTEXT
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

//Components
import Store from "./components/Store";
import ProductDetailes from "./components/ProductDetailes";

function App() {
  return (
    
    <ProductContextProvider>
      <CartContextProvider>
            <Routes>
                <Route path="/products" element={<Store/>}/>
                <Route path="/*" element={<Navigate to="/products" />} />
                  <Route path="/products/:id" element={<ProductDetailes />} />

          </Routes>
       </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
