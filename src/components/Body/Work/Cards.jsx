import React from 'react'
import "./cards.css"
import {data} from "./Data"
function Cards() {
  return (
    <div className='Cards'>
      {data.map(data=>{
        return(
          <>
          <div class="card">
    <img src={data.img} alt="" />
    <h2>{data.title}</h2>
    <a href={data.a} target='blank' className='git'>Git Hub</a>
    <a href={data.d} target='blank' className='demo'>Demo</a>
  </div>
          </>
        )
      })}
      
  
</div>
  )
}

export default Cards