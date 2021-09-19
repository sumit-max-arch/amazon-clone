import './App.css';
import data from './data';
import React from 'react';
import Product from './component/Product';
function App() {
  return (
    <div className="grid-container">
    <header className="row">
<div>
    <a href="/">Amazona</a>
</div>
<div>
    <a href="/cart">Cart</a>
    <a href="/signin">Sign in</a>
</div>
    </header>

    <main>
        <div className="row center">
          {
            data.products.map(product => (
           <Product key = {product._id} product = {product}></Product>
            ))
          }
  </div>
</main>
    <footer className="row-center">
    All right reserved @2021
    </footer>
</div>
  );
}

export default App;
