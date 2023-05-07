import React, { useState } from 'react'
import axios from 'axios'
function FetchApi() {
    const [view ,setview] = useState([])

    let product ={
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
  }
  function addproduct(){
    axios('https://dummyjson.com/products/add',{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(product)
    })
    .then(data=>console.log(data))
    .catch((e)=>console.log(e))
  }
    function fetchrequest(){

        axios.get('https://dummyjson.com/products')
        .then(data=>{
          console.log(data.data.products)
          setview(data.data.products)
        })
        .catch(e=>console.log(e))
    }
  return (
    <div>
        <button onClick={fetchrequest}>get Data</button>
        <button onClick={addproduct}>add product</button>
        <div>
          {
            view&&view.map((data)=>{
              return(
                <div key={data.id}>
                  <h3>{data.title}</h3>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default FetchApi