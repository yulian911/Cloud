const SET_FILES = "SET_FILES";
const SET_CURRENT_DIR = "SET_CURRENT_DIR";
const ADD_FILE = "SET_FILE";
const SET_POPUP_DISPLAY = "SET_POPUP_DISPLAY";

const initialState = {
  files: [],
  currentDir: null,
  popupDisplay: "none",
};

export default function filesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILES:
      return { ...state, files: action.payload };
    case SET_CURRENT_DIR:
      return { ...state, currentDir: action.payload };
    case ADD_FILE:
      return { ...state, files: [...state.files, action.payload] };
    case SET_POPUP_DISPLAY:
      return { ...state, popupDisplay: action.payload };
    default:
      return state;
  }
}

// action creater

export const setFiles = (files) => ({ type: SET_FILES, payload: files });
export const setCurrentDir = (dir) => ({ type: SET_CURRENT_DIR, payload: dir });
export const addFile = (file) => ({ type: ADD_FILE, payload: file }); ///dodawanie nowego folderu
export const setPopupDisplay = (display) => ({
  type: SET_POPUP_DISPLAY,
  payload: display,
}); ///popup
