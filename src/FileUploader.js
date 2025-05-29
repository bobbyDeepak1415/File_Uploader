import React, { useRef, useState } from "react";

function FileUploader(props) {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  return (
    <div>
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <button>Browse Files</button>
      <div>Drop files here</div>
    </div>
  );
}

export default FileUploader;
