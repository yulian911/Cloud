import React from "react";
import "./filelist.scss";
import { useSelector, useDispatch } from "react-redux";
import File from "./file/File";

function FileList() {
  const files = useSelector((state) => state.files.files).map((file) => (
    <File key={file.id} file={file} />
  ));

  return (
    <div>
      <div className="fileList">
        <div className="fileList__header">
          <div className="fileList__name">Nazwa</div>
          <div className="fileList__data">Data</div>
          <div className="fileList__size">Rozmiar</div>
        </div>
      </div>
      {files}
    </div>
  );
}

export default FileList;
