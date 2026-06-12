import { useRef, useState } from "react";

const Demo = () => {
  const [files, setFiles] = useState([]);

  const inputFileRef = useRef(null);

  const handleSelect = (e) => {
    e.preventDefault();
    const selectedFiles = Array.from(e.target.files);

    const filesData = selectedFiles.map((file) => {
      return { name: file.name };
    });

    setFiles([...files, filesData]);
  };

  const handleClick = () => {
    inputFileRef.current.click();
    inputFileRef.current.value = "";
  };

  return (
    <div>
      <h1>Hello</h1>
      <input
        onChange={(e) => handleSelect(e)}
        value={files}
        ref={inputFileRef}
        hidden
      ></input>
      <button onClick={handleClick}>Browse Files</button>

      <div
        style={{
          height: "50vh",
          background: "gray-400",
          width: "90vw",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          border: "1px dashed",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        Drop your files here
      </div>
    </div>
  );
};

export default Demo;
