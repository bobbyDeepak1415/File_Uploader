import React, { useRef, useState } from 'react'

const Demo = () => {
  const inputFileRef=useRef(null)

  const [files,setFiles]=useState([])

  const handleSelect=(e)=>{
    const selectedFiles=Array.from(e.target.files)

    const fileNames=selectedFiles.map((file)=>{
      return {
        name:file.name
      }
    })

    setFiles((prev)=>[...prev,...fileNames])

  }


  const handleClick=()=>{
inputFileRef.current.click()
inputFileRef.current.value=""

  }

  const handleDrop=(e)=>{
e.preventDefault()

const droppedFiles=Array.from(e.dataTransfer.files)
const fileNames=droppedFiles.map((file)=>{
  return {
    name:file.name
  }
})

setFiles(prev=>[...prev,...fileNames])

  }

  const handleDefaults=(e)=>{
e.preventDefault()
e.stopPropagation()
  }

  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
      
      <input ref={inputFileRef} onChange={handleSelect}  hidden multiple type='file'/>
      <button onClick={handleClick}>Browse files</button>
      <div onDrop={handleDrop} onDragOver={handleDefaults} onDragEnter={handleDefaults} style={{height:"40vh",width:"80vw",border:"1px dashed",margin:"auto",marginTop:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        Drop here
      </div>

<div>

  <h2>Your files here:</h2>
  <ul>

  {files.map((file)=>{
    return <li>{file.name}</li>
  })}
  </ul>
</div>


    </div>
  )
}

export default Demo
