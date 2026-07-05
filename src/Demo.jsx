import React, { useRef, useState } from "react";

const Demo = () => {
  const inputFileRef = useRef();

  const [selectedFiles, setSelectedFiles] = useState(()=>{
    try{

      const files=localStorage.getItem("selectedFiles")
      return files ? JSON.parse(files) : []
    }catch(er){
      console.log("failed To fetch",er)
    }
  });

  const handleClick = () => {
    inputFileRef.current.click();
    inputFileRef.current.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();

    setSelectedFiles((prev) => [...prev, ...e.target.files]);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        ref={inputFileRef}
        type="file"
        hidden
        multiple
      />
      <button onClick={handleClick}>Add Files</button>
      <div>
        <ul>
          {selectedFiles.map((file) => {
            return <li key={file.id}>{file.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Demo;
