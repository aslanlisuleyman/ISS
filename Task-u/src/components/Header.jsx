import React from 'react'

function Header({data,setData}) {



    const handleChange =(e)=>{
        if(data ==" "){
             setData([...data])
        }
        let search=e.target.value.trim().toLowerCase()
        let searchProducts= data.filter((card)=>card.name.trim().toLowerCase().includes(search.trim().toLowerCase()))
        console.log(searchProducts)
       setData(searchProducts)
    }

    const handleClick=(e)=>{
        e.preventDefault()
        let sortedData=data.sort((a,b)=>a.unitPrice-b.unitPrice)
        console.log(sortedData)
        setData([...sortedData])
      }



  return (
    
    <div className='header'>
        <input type="text" placeholder='search...'  onChange={(e)=>handleChange(e)}/>
        <button onClick={(e)=>handleClick(e)}>Sort By Price</button>
        <button>Discounted</button>


    </div>
  )
}

export default Header