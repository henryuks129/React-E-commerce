import React,{ createContext,useState,useEffect } from 'react'

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItem')) || [] 
const CartContext = createContext()
export const CartProvider = ({children})=>{
    const [cartItem,setCartItem] = useState(cartItemsFromLocalStorage)
    let handleAddToClick = (product)=>{
        const productSelected = cartItem.find((singleCartItem)=>singleCartItem.id === product.id)
        if(productSelected){
            setCartItem(cartItem.map((oneItem)=>oneItem.id === product.id ? {...productSelected, quantity:productSelected.quantity + 1} : oneItem))
      }else{
          setCartItem([...cartItem,{...product,quantity:1}])
        }
    }
    // function for increase and decrease button
    function handleIncrease(product){
        const productSelected = cartItem.find((singleCartItem)=>singleCartItem.id === product.id)
        if(productSelected){
            setCartItem(cartItem.map((oneItem)=>oneItem.id === product.id ? {...productSelected, quantity:productSelected.quantity + 1} : oneItem))
      }
    }
    function handleDecrease(product){
        const productSelected = cartItem.find((singleCartItem)=>singleCartItem.id === product.id)
        if(productSelected.quantity === 1){
            setCartItem(cartItem.filter((oneItem)=>oneItem.id !== product.id ))
      } else{
        setCartItem(cartItem.map((item)=>item.id === product.id ? {...productSelected, quantity:productSelected.quantity - 1} : item))
      }
    }
    const totalPrice = cartItem.reduce((price,item)=> price + item.quantity * item.price, 0)

    useEffect(()=>{
      localStorage.setItem('cartItem',JSON.stringify(cartItem))
    },[cartItem])
    return(
        <CartContext.Provider value={{ cartItem,setCartItem,handleAddToClick,handleIncrease,handleDecrease,totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext