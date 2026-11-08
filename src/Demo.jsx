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



setSelectedFiles((prev)=>[...prev,...fileNames])

}

  const handleClick=()=>{
    inputFileRef.current.click()
    inputFileRef.current.value=""
  }

  return (
    <div>
      
<input onChange={(e)=>handleSelect(e)} hidden type="file" ref={inputFileRef} multiple />
<button className='border-2 bg-gray-400 p-1 rounded-md' onClick={handleClick}>Browse Files</button>

<div className='border border-dashed border-black mt-2 h-[50vh] w-[90vw] m-auto'>Drop your files here</div>
<br></br>
<br></br>
<br></br>
<div>
  <ul>

  {selectedFiles.map((file)=>{
    return <li key={file.id}>{file.name}</li>
  })}
  </ul>
</div>

    </div>
  )
}

export default Demo
