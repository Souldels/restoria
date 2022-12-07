import Login from './Pages/Login';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import Product from './Pages/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/menu' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
