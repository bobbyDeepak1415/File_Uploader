import React, { useState } from 'react'

const Demo = () => {

  const inputFileRef=useState(null)

  return (
    <div>
      
<input ref={inputFileRef} type='file'/>
<div></div>
    </div>
  )
}

export default Demo
