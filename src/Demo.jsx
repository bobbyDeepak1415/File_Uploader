import React, { useState } from 'react'

const Demo = () => {

  const inputFileRef=useState(null)

  return (
    <div>
      
<input type="file" ref={inputFileRef} />
<div></div>
    </div>
  )
}

export default Demo
