import React, { useContext, useState } from 'react'
import Marque from './Marque'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { BsCart4 } from 'react-icons/bs';
import CartContext from '../Hooks/CartContext';


const Navbar = () => {
    // const [cartItem,setCartItem] = useState([])
    const {cartItem} = useContext(CartContext)
  return (
    <div className='sticky-top'>
        <Marque/>
      <div className='navbar-content'>
      <header className='container d-flex justify-content-between align-items-center'>
                <ul>
                    <li className='list-unstyled '>
                    <Link className='text-decoration-none' to='/'>
                    <h2 className='text-white fst-itslic'>Henry's</h2>
                </Link>
                    </li>
                </ul>
            <nav className='w-50 d-flex flex-row-reverse justify-content-center'>
                <ul className='d-sm-none d-md-flex justify-content-between w-75'>
                <li className='list-unstyled d-none-x-sm'>
                    <Link className='text-decoration-none text-light fs-3 red' to='/'> Account</Link>
                    </li>
                <li className='list-unstyled d-none-x-sm'>
                    <Link className='text-decoration-none text-light fs-3 red' to='/'>Help</Link>
                    </li>
                    <li className='list-unstyled'>
                    <Link className='text-decoration-none text-light fs-3 red' to='/Cart'><BsCart4/> Cart {cartItem.length}</Link>
                    </li>
                </ul>
            </nav>
        </header>
      </div>
    </div>
  )
}

export default Navbar