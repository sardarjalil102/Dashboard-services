import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";

const initialState = {
 files:[],
  error: null,
  status: null,
};

export const uploadFile = createAsyncThunk("post/file", async ({data,onResponse}) => {
  try {
    const response = await API.file.upload(data);
    if (response.data.success) {
        toast.success("File Uploaded Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    }

    onResponse?.(response.data.data)
    return response.data.data;
  } catch (error) {
    if (error) {
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    return error.response.data
  }
});

const FileSlice = createSlice({
  name: "stripe charges",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(uploadFile.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.files = action.payload;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })

  },
});

export default FileSlice.reducer;
