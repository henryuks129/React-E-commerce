import React from 'react'
import useFetch from '../Hooks/useFetch'
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer,toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import CartContext from '../Hooks/CartContext';
import '../styles/ '


const Jewelry = () => {
    const {cartItem,setCartItem,handleAddToClick} = useContext(CartContext)
    const {data,error,isLoading} = useFetch('https://fakestoreapi.com/products/category/jewelry')
    const notify = () =>{toast("An item has been added",{position:toast.POSITION.TOP_CENTER,})}
  return (
    <div className='container'>
        <h2>{}isLoading && <ClipLoader/> </h2>
        <div className='component-title-jewelry'>
            <h2>JEWELRY CATEGORY</h2>
        </div>
    <div className='component-data-mapped-jewelry'>
        {data.map((datumJewelry)=>{
            const {id,image,price,title} = datumJewelry
            return(
                <div key={id} className='component-data-inner-jewelry'>
                    <Link to={`SingleProduct/${id}`} className='text-decoration-none'>
                    <img src={image} alt={title} />
                    <p className='fw-bold'>${price}</p>
                    </Link>
                    btn
                </div>
            )
        })}
    </div>
    </div>

  )
}

export default Jewelry