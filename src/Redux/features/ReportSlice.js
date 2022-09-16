import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";

const initialState = {
  fmeaReports:[],
  fishBoneReports:[],
  fivWhyReports:[],
  error: null,
  status: null,
};

export const getAllFmeaReports = createAsyncThunk("get/reports/fema/mm6a", async () => {
  try {
    const response = await API.report.getAllFmeaReports();
    return response.data.data;
  } catch (error) {
    return error.response.data
  }
});

export const getAllFishBoneReports = createAsyncThunk("get/reports/fish-bone/msad", async () => {
  try {
    const response = await API.report.getAllFiveWhyReports();
    return response.data.data;
  } catch (error) {
    return error.response.data
  }
});

export const getAllFiveWhyReports = createAsyncThunk("get/reports/five-why/msad", async () => {
  try {
    const response = await API.report.getAllFiveWhyReports();
    return response.data.data;
  } catch (error) {
    return error.response.data
  }
});

export const updateFiveWhyReport = createAsyncThunk("put/reports/five-why/", async (data) => {
  console.log('data is',data)

  try {
    const response = await API.report.updateFiveWhyReport(data);
    if (response.data.success) {
        toast.success("Report Updated Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    }

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

export const updateFishBoneReport= createAsyncThunk("put/reports/five-why/", async (data) => {
  console.log('data is',data)

  try {
    const response = await API.report.updateFishBoneReport(data);
    if (response.data.success) {
        toast.success("Report Updated Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    }

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
const ReportSlice = createSlice({
  name: "stripe charges",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getAllFmeaReports.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllFmeaReports.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fmeaReports = action.payload;
      })
      .addCase(getAllFmeaReports.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      .addCase(getAllFishBoneReports.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllFishBoneReports.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fishBoneReports= action.payload;
      })
      .addCase(getAllFishBoneReports.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      .addCase(getAllFiveWhyReports.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllFiveWhyReports.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fivWhyReports= action.payload;
      })
      .addCase(getAllFiveWhyReports.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      .addCase(updateFiveWhyReport.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateFiveWhyReport.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updateFiveWhyReport.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
  },
});

export default ReportSlice.reducer;
