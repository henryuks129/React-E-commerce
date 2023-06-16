import { useState,useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './layouts/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './layouts/Footer';
import SingleProduct from './pages/SingleProduct';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/SingleProduct/:id' element={<SingleProduct/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
