import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir, getFiles } from "../../action/file";
import FileList from "./fileList/FileList";
import "./disc.scss";
import Popup from "./Popup";
import { setPopupDisplay } from "../../reducer/fileReducer";

function Disc() {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);
  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  const showHandler = () => {
    // dispatch(createDir(currentDir, "Lasia"));
    dispatch(setPopupDisplay('flex'))
  };

  return (
    <div className="disc">
      <div className="disc__btns">
        <button className="disc__back">Cofnij</button>
        <button className="disc__create" onClick={showHandler}>
          Stworzyc folder
        </button>
      </div>
      <FileList />
      <Popup />
    </div>
  );
}

export default Disc;
