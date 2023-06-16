import React,{useContext} from 'react'
import '../styles/Cart.css'
import { NavItem } from 'react-bootstrap';
import CartContext from '../Hooks/CartContext';


const Cart = () => {
    const{cartItem,setCartItem,handleDecrease,handleIncrease,totalPrice} = useContext(CartContext)
    return (
    <div className='container'>
        {cartItem.length === 0 && (
            <div className='text-center'>
                <h3>No item in the cart</h3>
            </div>
        )}
        <div>
            {cartItem.map((singleCartItem)=>{
                const {image,id,title,price,quantity,description} = singleCartItem
                // const mult = quantity * price
                return(
                    <div>
                        <div key={id} className='row justify-content-between align-items-center mt-3'>
                            <div className='col-md-5'>
                            <img className='w-100' src={image} alt="" />
                            </div>
                           <div className='col-md-6'>
                           <h2 className='text-danger'> {title} </h2>
                            <h4 className='text-success lh-base'> {description} </h4>
                           </div>
                           <div>
                            <h4> {quantity} * {price} </h4>
                            <div className='d-flex justify-contet-between w-75 gap-4'>
                                <button onClick={()=> handleIncrease(singleCartItem)} className='btn btn-primary w-75'>increase</button>
                                <button onClick={()=> handleDecrease(singleCartItem)} className='btn btn-primary w-75'>decrease</button>
                            </div>
                           </div>
                        </div>
                    </div>
                )
            })}
            {cartItem.length >=1 &&(<div className='mt-4'>
            <button onClick={()=>setCartItem([])} className='btn btn-danger fs-5 fw-bold w-50'>{cartItem.length === 1 ? 'clear item' : 'clear all'}</button>
            </div>)}
            <div className='text-center'>
                <h1>Total Price</h1>
                <div>
                    <h2>${totalPrice}</h2>
                </div>
            </div>
        </div>
        {/* <h2>Cart component</h2> */}
    </div>
  )
}

export default Cart