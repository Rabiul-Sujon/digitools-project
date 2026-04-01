import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductHeader from "./components/ProductHeader";
import ProductList from "./components/ProductList";
import ProductCart from "./components/ProductCart";
import StepsSection from "./components/StepsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('products'); // Toggle between 'products' and 'cart'

  // Fetch JSON Data
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add to Cart Function
  const handleAddToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.warn("Product already in cart!");
    }
   };

  // Remove from cart
  const handleRemove = (id) => {
    const remainingItems = cart.filter(item => item.id !== id);
    setCart(remainingItems);
    toast.error("Item removed from cart!");
   };

  //  Checkout Removal
   const handleCheckout = () => {
      setCart([]); 
      toast.success("Checkout successful! Thank you for your purchase.");
      // alert("Checkout successful!"); 
      // setView('products'); // Optional: This takes you back to the home page
     };

  return (
    <div className="bg-white min-h-screen">
      <ToastContainer position="top-center" autoClose={2000} />
      
      {/* Pass cart.length to Navbar to update the count */}
      <Navbar cartCount={cart.length} />
      
      <Banner />
      <Stats />

      {/* Pass view and setView to the header to make buttons work */}
      <ProductHeader view={view} setView={setView} cartCount={cart.length} />

      {/* Conditional Rendering: Show Products or Cart */}
      {view === 'products' ? (
        <ProductList products={products} handleAddToCart={handleAddToCart} 
        cart={cart}/>
         ) : (
        <div className="max-w-7xl mx-auto px-10 pb-20 text-center">
       <ProductCart cart={cart} 
        handleRemove={handleRemove}
        handleCheckout={handleCheckout}/>
        </div>
      )}

      <StepsSection/>
      <PricingSection/>
      <Footer/>
    
    </div>
    
  );
}

export default App;