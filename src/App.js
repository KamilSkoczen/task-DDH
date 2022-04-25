import ProductPage from "./pages/ProductPage";
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import * as React from 'react';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
function App() {

  //Setup products from db
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const getProducts = async () => {
      const ProductsFromServer = await fetchProducts()
      setProducts(ProductsFromServer)
    }

    getProducts()
  }, [])

  // Fetch Products
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()

    return data
  }

    //Add to cart
    const [cartItems, setCartItems] = useState(
      JSON.parse(localStorage.getItem('cart-items')) || []
  );

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      console.log(products)
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  //Monitor cart changes
  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(cartItems));
  }, [cartItems]);

  //Remove from cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  //Remove product totally from cart
  const onRemoveTotal = (product)=> {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
  }



  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onRemoveTotal={onRemoveTotal}/>}>
          <Route index element={<Home products={products} onAdd={onAdd}/>} />
          <Route exact path="/product-page/:productId" element = { <ProductPage cartItems={cartItems} onAdd={onAdd} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
