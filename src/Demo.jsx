import React, { useState } from 'react'
import handleClick from './handleClick'

const Demo = () => {

  const [count,setCount]=useState(0)


  const 

  return (
    <div>

      <button onClick={handleClick}>click <span>{count}</span></button>
      
    </div>
  )
}

export default Demo
