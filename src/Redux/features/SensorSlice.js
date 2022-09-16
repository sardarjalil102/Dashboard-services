import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";
import { ERROR_MESS, SENSOR_CREATE, SENSOR_DELETE, SENSOR_UPDATE } from "../../constant";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";

const initialState = {
  allSensors: [],
  oneSensor: {},
  paginationData: {},
  error: null,
  status: null,
};

export const fetchAllSensors = createAsyncThunk(
  "get/allSensors",
  async (page) => {
    try {
      const response = await API.Sensor.getAll(page);
      // // // console.log(response.data);
      return response.data;
    } catch (error) {
      // // // console.log(error.response.data?.message);
      return error.response.data;
    }
  }
);

export const addSensorData = createAsyncThunk(
  "post/oneSensor",
  async (data) => {
    try {
      const response = await API.Sensor.add(data);
      // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,SENSOR_CREATE)
      return [];
    } catch (error) {
      // // console.log(error.response.data.message.error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const updateOneSensor = createAsyncThunk(
  "update/oneSensor",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.Sensor.update(data.id, data.finalData);
      SHOW_SUCCESS(response.data.success,SENSOR_UPDATE)
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const deleteSensor = createAsyncThunk(
  "delete/oneSensor",
  async (data) => {
    try {
      const response = await API.Sensor.delete(data);
      // // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,SENSOR_DELETE)
      return [];
    } catch (error) {
      // // // console.log(error.response.data.message);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const fetchOneSensorData = createAsyncThunk(
  "get/oneSensor",
  async (id) => {
    try {
      const response = await API.Sensor.getOne(id);
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

const SensorSlice = createSlice({
  name: "Sensor",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllSensors.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllSensors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allSensors = action.payload.data;

        delete action.payload.sensors;
        state.paginationData = action.payload;
      })
      .addCase(fetchAllSensors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchOneSensorData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneSensorData.fulfilled, (state, action) => {
        let refineData = {
          ...action.payload,
          sensorTypeId: action.payload?.sensorType?.id,
          inspectionPlanId: action.payload?.inspectionPlan?.id,
        };

        state.oneSensor = refineData;

        state.status = "succeeded";
      })
      .addCase(fetchOneSensorData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(deleteSensor.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteSensor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allSensors = state.allSensors.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteSensor.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(addSensorData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addSensorData.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (!action.payload.success) {
          state.allSensors.push(action.payload);
        }
        state.error = action.payload.message.error;
      })
      .addCase(addSensorData.rejected, (state, action) => {
        state.status = "failed";
        // console.log(action.payload);
        state.error = action.payload;
      })
      .addCase(updateOneSensor.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOneSensor.fulfilled, (state, action) => {
        state.status = "succeeded";
        // // // console.log(action.payload);
        // state.RejectedReasons.push(action.payload);
      })
      .addCase(updateOneSensor.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.payload);
        state.error = action.payload;
      });
  },
});

// export const { postAdded, reactionAdded } = RejectedReasons.actions;

export default SensorSlice.reducer;
