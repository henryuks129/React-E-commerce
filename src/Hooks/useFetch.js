import React,{ useState,useEffect } from 'react'

const useFetch = (url) => {
  const [data,setData] = useState([])
  const [isLoading,setIsLoading] =useState(false)
  const [error,setError] = useState(null)
  // let url = 'https://fakestoreapi.com/products/14' 
  let fetchedData = async ()=>{
      try{
          setIsLoading(true)
          let fetchRequest = await fetch(url)
          let response = await fetchRequest.json()
          console.log(response);
          setData(response)
      }catch(error){
          console.log(error);
      }finally{
          setIsLoading(false)
      }
  }
useEffect(()=>{
      fetchedData()
  },[url])
  return {data,isLoading,error}
}

export default useFetch