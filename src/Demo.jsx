import React, { useState } from 'react'

const Demo = () => {

  const inputFileRef=useState(null)

  const [selectedFiles,setSelectedFiles]=useState([])

const handleSelect=(e)=>{
e.preventDefault()

const files=Array.from(e.target.files)

const fileNames=files.map((file)=>{
  return {
    name:file.name
  }
})

setSelectedFiles(fileNames)

}

  const handleClick=()=>{
    inputFileRef.current.click()
    inputFileRef.current.value=""
  }

  return (
    <div>
      
<input onSelect={(e)=>handleSelect(e)} hidden type="file" ref={inputFileRef} multiple />
<button className='border-2 bg-gray-400 p-1 rounded-md' onClick={handleClick}>Browse Files</button>
<br></br>
<br></br>
<br></br>
<div>
  <ul>

  {selectedFiles.map((file)=>{
    return 
  })}
  </ul>
</div>

    </div>
  )
}

export default Demo
