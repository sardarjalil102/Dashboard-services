import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";

const initialState = {
  generalForms: [],
  generalFormFilledBy: [],
  generalFormDetail: {},
  error: null,
  status: null,
  paginationData: null,
};
export const getAllGeneralForm = createAsyncThunk(
  "get/generalForm",
  async (page) => {
    try {
      const response = await API.generalForm.getAllForms(page);
      // // console.log(response.data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const getFormsFilledBy = createAsyncThunk(
  "get/formsFilledBy",
  async (id) => {
    try {
      const response = await API.generalForm.getAllFormsFilledBy(id);
      // // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const getFormDetails = createAsyncThunk(
  "get/formDetails",
  async (id) => {
    try {
      const response = await API.generalForm.getFormDetail(id);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const GeneralFormSlice = createSlice({
  name: "General Form",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllGeneralForm.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllGeneralForm.fulfilled, (state, action) => {
        state.generalForms = action.payload.data;
        state.status = "succeeded";
        delete action.payload.forms;
        state.paginationData = action.payload.data;
      })
      .addCase(getAllGeneralForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getFormsFilledBy.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getFormsFilledBy.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.generalFormFilledBy = action.payload;
      })
      .addCase(getFormsFilledBy.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getFormDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getFormDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.generalFormDetail = action.payload.data;
      })
      .addCase(getFormDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default GeneralFormSlice.reducer;
