import React, { useRef, useState } from "react";

const Demo = () => {

  const inputFileRef=useRef(null)

  const [files,setFiles]=useState([])
  // const [files,setFiles]=useState(()=>{
  //   const files=localStorage.getItem("files")
  //   return files? JSON.parse(files) :[]
  // })



  const handleClick=()=>{
    inputFileRef.current.click()
    inputFileRef.current.value=""

  }


  const handleSelect=(e)=>{
    const selectedFiles=Array.from(e.target.files)
    const fileNames=selectedFiles.map((file)=>{
      return {name:file.name}
    })
    setFiles((prev)=>[...prev,...fileNames])
  }

  return <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
    <input multiple ref={inputFileRef} type="file" hidden onChange={handleSelect}/>
    <button onClick={handleClick}>Browse Files</button>

<div>
  <h2>Your files here:</h2>
  <ul>
    {files.map((file)=>{
      return <li>{file.name}</li>
    })}
  </ul>
</div>

  </div>;
};

export default Demo;
