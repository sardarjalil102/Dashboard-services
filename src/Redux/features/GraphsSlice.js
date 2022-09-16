import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";

const initialState = {
  histogramData: [],
  steps: [],
  QcPoints: [],
  inspectors: [],
  status: null,
  error: null,
};

export const addHistogramQualitativedata = createAsyncThunk(
  "post/qualitativeData",
  async (data) => {
    try {
      const response = await API.graphs.histogram.qualitative(data);
      // if (response.data.success) {
      //   toast.success("Created Successfully!", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //   });
      // }

      return response.data.data;
    } catch (error) {
      if (error) {
        return [];
      }
    }
  }
);

export const getSteps = createAsyncThunk("getAllSteps", async (id) => {
  try {
    const response = await API.graphs.steps(id);

    return response.data.data;
  } catch (error) {
    if (error) {
      return [];
    }
  }
});

export const getQcPoints = createAsyncThunk("getAllQcPoints", async (data) => {
  try {
    // console.log(data);
    const response = await API.graphs.qcPoints(data.id, data.qty);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    if (error) {
      return [];
    }
  }
});

export const getInspectors = createAsyncThunk(
  "get/histogramInspector",
  async () => {
    try {
      const response = await API.graphs.inspectors();
      // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // console.log(error.response.data.message);
      if (error) {
        return [];
        // toast.error("Something went wrong!", {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        // });
      }
    }
  }
);

const GraphsSlice = createSlice({
  name: "graphs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addHistogramQualitativedata.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addHistogramQualitativedata.fulfilled, (state, action) => {
        state.status = "succeed";
        state.histogramData = action.payload;
      })
      .addCase(addHistogramQualitativedata.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })

      .addCase(getSteps.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSteps.fulfilled, (state, action) => {
        state.status = "succeed";
        state.steps = action.payload;
      })
      .addCase(getSteps.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })

      .addCase(getQcPoints.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getQcPoints.fulfilled, (state, action) => {
        state.status = "succeed";
        state.QcPoints = action.payload;
      })
      .addCase(getQcPoints.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      .addCase(getInspectors.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getInspectors.fulfilled, (state, action) => {
        state.status = "succeed";
        state.inspectors = action.payload;
      })
      .addCase(getInspectors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export default GraphsSlice.reducer;
