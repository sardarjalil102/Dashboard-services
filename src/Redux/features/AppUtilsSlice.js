import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { toast } from "react-toastify";

// import TutorialDataService from "../services/tutorial.service";

const initialState = {
  currentNode: null,
  gCurrentForm: "/inspection-plan/view/",
  fileData: {},
  currentRole: {},
  status: "",
};

export const uploadFile = createAsyncThunk("image/upload", async (data) => {
  // console.log("start uploading...", data);
  for (const value of data.values()) {
    // console.log(value);
  }
  const res = await API.file.add(data);
  // console.log("file result :", res);
  if (res.data.success) {
    toast.done("Image uploaded!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  // // console.log("file response : ", res.data);

  return res.data;
});

const appUtilsSlice = createSlice({
  name: "AppUtils",
  initialState,
  reducers: {
    setCurrentNode: (state, action) => {
      state.currentNode = action.payload;
    },

    setCurrentRole: (state, action) => {
      state.currentRole = action.payload;
    },

    setgCurrentForm: (state, action) => {
      state.gCurrentForm = action.payload;
    },
    clearFileState: (state, action) => {
      state.fileData = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(uploadFile.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fileData = action.payload.data;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.status = "failed";
        // console.log("file uoload error ", action.payload);
        state.error = action.payload;
      });
  },
});
export const {
  setCurrentNode,
  setgCurrentForm,
  clearFileState,
  setCurrentRole,
} = appUtilsSlice.actions;

const { reducer } = appUtilsSlice;
export default reducer;
