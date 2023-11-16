import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Form from './Form'

function Forms() {
    const [data, setData] = useState([])

    useEffect(()=>{
         axios.get('https://northwind.vercel.app/api/products').then(res=>{
      setData(res.data)
    })
    },[])



  return (
    <div>
         <Header data={data} setData={setData}/>
        <h2>Add Forms</h2>
        <input type="text"  placeholder='add name'/>
        <input type="number" placeholder='add price'/><br />
        <label>Discounted</label> 
        <input type="checkbox" /> <br />
        <button>Add</button>
       {data.map((item)=>{
        return <Form key={item.id} item={item} data={data} />
       })
       
       
       }
        
           
    </div>
  )
}

export default Forms