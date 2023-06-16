import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import ClipLoader from "react-spinners/ClipLoader";
import '../styles/SingleProduct.css'


const SingleProduct = () => {
    const {id} = useParams()
    const{data,isLoading} = useFetch(`https://fakestoreapi.com/products/${id}`)
    const {title,image,description,price,rating} = data
  return (
    <div>
        <div className='container'>
            {isLoading && <ClipLoader/>}
            <div className='row justify-content-center align-items-center mt-4'>
                <div className='col-sm-12 text-center col-md-4'>
                    <img className='img-fluid w-100 image' src={image} alt={title} />
                </div>
                <div className='col-sm-12 col-lg-7'>
                    <h1 className='text-danger fw-bold'> {title} </h1>
                    <h4 className='text-success lh-base '> {description} </h4>
                    <h3> ${price} </h3>
                    {/* <p> {rating} </p> */}
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-primary'> <Link to='/' className='btn btn-primary' >Back to home</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct