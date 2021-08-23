import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../action/file";
import FileList from "./fileList/FileList";
import "./disc.scss";

function Disc() {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);
  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);
  return (
    <div className="disc">
      <div className="disc__btns">
        <button className="disc__back">Cofnij</button>
        <button className="disc__create">Stworzyc folder</button>
      </div>
      <FileList />
    </div>
  );
}

export default Disc;
