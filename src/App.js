import './App.css';
import Home from './Pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cards/Cart/Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
          <Home />
          <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
