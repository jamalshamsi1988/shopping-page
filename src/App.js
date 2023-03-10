import { Navigate, Route , Routes } from "react-router-dom";


//CONTEXT
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

//Components
import Store from "./components/Store";
import ProductDetailes from "./components/ProductDetailes";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Footer from "./components/shared/Footer";

function App() {
  return (
    
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
            <Routes>
                <Route path="/products" element={<Store/>}/>
                <Route path="/*" element={<Navigate to="/products" />} />
                <Route path="/products/:id" element={<ProductDetailes />} />
                <Route path="/cart" element={<ShopCart />} />
                <Route path="/signup" element={<SignUp />}  />
                <Route path="login" element={<Login />} />
                <Route path="aboutus" element={<AboutUs/>} />
                

          </Routes>
          <Footer/>
       </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
