import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir } from "../../action/file";
import { setPopupDisplay } from "../../reducer/fileReducer";
function Popup() {
  const [dirName, setDirName] = useState("");
  const currentDir = useSelector((state) => state.files.currentDir);
  const dispatch = useDispatch();
  const showHandler = () => {
    // dispatch(createDir(currentDir, "Lasia"));
    dispatch(setPopupDisplay("none"));
  };
  const createHandler = () => {
    dispatch(createDir(currentDir, dirName));
    setDirName("");
  };
  // const handleChange = (e) => {
  //   setDirName(e.currentTarget.value);
  // };
  const popupDisplay = useSelector((state) => state.files.popupDisplay);
  return (
    <div
      className="popup"
      style={{ display: popupDisplay }}
      onClick={showHandler}
    >
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <div className="popup__header">
          <div className="popup__title">Stwórz nowy plik</div>
          <button className="popup__close" onClick={showHandler}>
            X
          </button>
        </div>
        <input
          type="text"
          placeholder="Stwórz nowy plik"
          value={dirName}
          onChange={(e) => setDirName(e.currentTarget.value)}
        />
        <button className="popup__create" onClick={createHandler}>
          Stwórz
        </button>
      </div>
    </div>
  );
}

export default Popup;
