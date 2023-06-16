import React,{useContext, useEffect} from 'react'
import useFetch from '../Hooks/useFetch'
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/Hero.css'
import CartContext from '../Hooks/CartContext';

const Hero = () => {
    const {handleAddToClick}= useContext(CartContext)
    // console.log(cartItem.length);
    const {data:data2,isLoading:isLoading2,error:error2} = useFetch('https://fakestoreapi.com/products/14')
    const {data:data3,isLoading:isLoading3,error:error3} = useFetch("https://fakestoreapi.com/products/category/men's clothing") 
    // const [data:data4,isLoading:isLoading4,error:error4] = useFetch
    const notify = () =>{toast("An item has been added",{position:toast.POSITION.TOP_CENTER,})}
  return (
    <div className='container hero-container mt-4'>
        <div className='row justify-content-between gap-4 shadow-sm border border-5 rounded'>
            {isLoading2 && <ClipLoader color={'red'} size={'150'} />} 
            {error2 && <h2> {error2.message} </h2>}
                <div className='col-sm-12 col-lg-6'>
                    {/* <h2> {data.title.slice(0,50)} </h2> */}
                    <img className='w-100 hero-img' src={data2.image} alt="" />
                </div>
                {/* Card section */}
                <div className='col-sm-12 col-lg-5 datum-container'>
                    <div className='card-container mt-sm-4'>
                       {data3.map((datum)=>{
                        const {id,title,image,price} = datum
                          return(     
                    <div className='h-100 p-1 text-center card-inner shadow-sm border border-3 rounded' key={id}>
                                {/* <h2> {data.title.slice(0,40)} </h2> */}
                                <Link className='text-decoration-none' to={`/SingleProduct/${id}`} >
                                <img className='img-fluid w-100' src={datum.image} alt="" />
                                <p className='fw-bold'> ${price} </p>
                                </Link>
                                <button onClick={()=>{handleAddToClick(datum); notify()}} className='btn text-white btn-primary'>add to cart</button>
                                <ToastContainer />
                     </div>           
                    )
                })}
                </div>
            </div>
            </div>
        </div>
  )
}

export default Hero