import React from 'react'
import '../styles/Home.css'
import Hero from '../pages/Hero'

const Home = ({cartItem,setCartItem,handleAddToClick}) => {
  return (
    <div className='container'>
        {/* <h2>Home</h2> */}
        <Hero cartItem={cartItem} setCartItem={setCartItem} handleAddToClick={handleAddToClick} />
    </div>
  )
}

export default Home