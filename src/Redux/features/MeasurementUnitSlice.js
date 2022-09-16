import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  ERROR_MESS,
  MEASUREMENT_UNIT_DELETE,
  MEASUREMENT_UNIT_UPDATE,
} from "../../constant";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";

const initialState = {
  allMeasurements: [],
  oneMeasurement: {},
  paginationData: {},
  error: null,
  status: null,
};

export const fetchAllMeasurement = createAsyncThunk(
  "get/allMeasurement",
  async (page) => {
    try {
      const response = await API.Measurement.getAll(page);
      // // // console.log(response.data);
      return response.data;
    } catch (error) {
      // // // console.log(error.response.data?.message);
      return error.response.data;
    }
  }
);

export const addMeasurementData = createAsyncThunk(
  "post/oneMeasurement",
  async (FormData) => {
    try {
      const response = await API.Measurement.add(FormData);
      const { success, message, data } = response.data;

      SHOW_SUCCESS(success, message);

      return {
        success,
        data,
        code: 201,
      };
    } catch (error) {
      // console.log(error.response.data );
      const { code, success, message, errors } = error.response.data;
      if (!success && code === 400) {
        SHOW_ERROR(true, message.error);
      } else if (!success && code === 422) {
        SHOW_ERROR(true, errors.code[0]);
      } else {
        SHOW_ERROR(true, "Something Went Wrong !");
      }
      return {
        success,
        data: {},
        code,
      };
    }
  }
);

export const updateOneMeasurement = createAsyncThunk(
  "update/oneMeasurement",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.Measurement.update(data.id, data.finalData);
      SHOW_SUCCESS(response.data.success, MEASUREMENT_UNIT_UPDATE);
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_SUCCESS(error, MEASUREMENT_UNIT_UPDATE);
      return [];
    }
  }
);

export const deleteMeasurement = createAsyncThunk(
  "delete/oneMeasurement",
  async (data) => {
    try {
      const response = await API.Measurement.delete(data);
      SHOW_SUCCESS(response.data.success, MEASUREMENT_UNIT_DELETE);
      return [];
    } catch (error) {
      // // // console.log(error.response.data.message);
      SHOW_ERROR(error, ERROR_MESS);
      return [];
    }
  }
);

export const fetchOneMeasurementData = createAsyncThunk(
  "get/oneMeasurement",
  async (id) => {
    try {
      const response = await API.Measurement.getOne(id);
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

const MeasurementUnitSlice = createSlice({
  name: "Measurement Unit",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllMeasurement.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllMeasurement.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allMeasurements = action.payload.data;

        delete action.payload.groups;
        state.paginationData = action.payload;
      })
      .addCase(fetchAllMeasurement.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchOneMeasurementData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneMeasurementData.fulfilled, (state, action) => {
        state.oneMeasurement = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchOneMeasurementData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(deleteMeasurement.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteMeasurement.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allMeasurements = state.allMeasurements.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteMeasurement.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(addMeasurementData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addMeasurementData.fulfilled, (state, action) => {
        const { success, data, code } = action.payload;
        if (success) {
          state.status = "succeeded";
          state.allMeasurements.unshift(data);
        } else {
          state.status = "failed";
          state.error = code;
        }
      })
      .addCase(addMeasurementData.rejected, (state, action) => {
        state.status = "failed";
        // console.log(action.payload);
        state.error = action.payload;
      })
      .addCase(updateOneMeasurement.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOneMeasurement.fulfilled, (state, action) => {
        state.status = "succeeded";
        // // // console.log(action.payload);
        // state.RejectedReasons.push(action.payload);
      })
      .addCase(updateOneMeasurement.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.payload);
        state.error = action.payload;
      });
  },
});

// export const { postAdded, reactionAdded } = RejectedReasons.actions;

export default MeasurementUnitSlice.reducer;
