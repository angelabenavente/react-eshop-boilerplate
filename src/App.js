import './App.css';
import Product from './components/Product.js'
import Navbar from './components/Navbar.js'
import Products from './components/Products.js'
import CheckOutPage from './components/ChekcoutPage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CheckOutPage></CheckOutPage>
      <Products>
        <Product>
        </Product>
      </Products>
      
    </div>
  );
}

export default App;
