import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";

const initialState = {
 allCategories:[],
  error: null,
  status: null,
};

export const getAllCatogries = createAsyncThunk("get/workflow-approval-category", async () => {
  try {
    const response = await API.catogries.getAll();
    // // // console.log(response);
    // // console.log(response.data);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.message);
    return error.response.data
  }
});

const CatogriesSlice = createSlice({
  name: "stripe charges",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      // catogries redues
      .addCase(getAllCatogries.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllCatogries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allCategories = action.payload;
      })
      .addCase(getAllCatogries.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

  },
});

export default CatogriesSlice.reducer;
