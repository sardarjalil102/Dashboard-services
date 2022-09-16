import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";

const initialState = {
  lotReport: [],
  stepsReport: [],
  qcPointReport: [],
  status: null,
  error: null,
};

export const getInspectionLotReports = createAsyncThunk(
  "get/inspectionLotReports",
  async () => {
    try {
      const response = await API.inspectionLotReport.getInspectionLotReport();
      // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const getStepsReports = createAsyncThunk(
  "get/stepsReports",
  async (data) => {
    try {
      // // console.log(flag);
      const response = await API.inspectionLotReport.getStepsReport(
        data.id,
        data.flag
      );
      if (response.data.success) {
        // console.log("steps passes !", response.data.success);
        return { data: response.data.data };
      }
    } catch (error) {
      // console.log("steps not  passes !", error);

      return { data: [], error };
    }
  }
);

export const getQcPointReports = createAsyncThunk(
  "get/qcPointReport",
  async ({ id, stepId }) => {
    try {
      const response = await API.inspectionLotReport.getQcPointReport(
        id,
        stepId
      );
      // // console.log(id, stepId);
      return response.data.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const InspectionLotReportSlice = createSlice({
  name: "Inspection Lot Report",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //Inspection Lot Reports
      .addCase(getInspectionLotReports.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getInspectionLotReports.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lotReport = action.payload.inspectionLots;
      })
      .addCase(getInspectionLotReports.rejected, (state, action) => {
        state.status = "failed";
      })
      // Steps Reports
      .addCase(getStepsReports.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getStepsReports.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stepsReport = action.payload.data;
      })
      .addCase(getStepsReports.rejected, (state, action) => {
        state.status = "failed";
      })
      //QC Point Reports
      .addCase(getQcPointReports.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getQcPointReports.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.qcPointReport = action.payload;
      })
      .addCase(getQcPointReports.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default InspectionLotReportSlice.reducer;
