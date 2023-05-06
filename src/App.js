import './App.css';
import Product from './components/Product.js'
import Navbar from './components/Navbar.js'
import Products from './components/Products.js'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Products>
        <Product>
        </Product>
      </Products>
      
    </div>
  );
}

export default App;
