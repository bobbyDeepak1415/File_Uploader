import React from "react";

export default function Demo(props) {
  return (
    <div>
        <input onChange={openExplorer} hidden></input>
        <button>Upload Files</button>
    </div>
  );
}
