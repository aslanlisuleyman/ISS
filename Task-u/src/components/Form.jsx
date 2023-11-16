import React from 'react'

function Form({ item}) {
    
    return (
        <div className='form'>

            <ul>
                <li>{item.id}  {item.name}   {item.unitPrice}   <button>delete</button>  </li>
                 
            </ul>
           

        </div>
    )
}

export default Form