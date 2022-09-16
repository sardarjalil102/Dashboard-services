import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";
import { ERROR_MESS, SENSOR_TYPE_CREATE, SENSOR_TYPE_DELETE, SENSOR_TYPE_UPDATE } from "../../constant";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";

const initialState = {
  allTypes: [],
  oneType: {},
  paginationData: {},
  error: null,
  status: null,
};

export const fetchAllTypes = createAsyncThunk("get/allTypes", async (page) => {
  try {
    const response = await API.SensorType.getAll(page);
    // // // console.log(response.data);
    return response.data;
  } catch (error) {
    // // // console.log(error.response.data?.message);
    return error.response.data;
  }
});

export const addTypeData = createAsyncThunk("post/oneType", async (data) => {
  try {
    const response = await API.SensorType.add(data);
    // console.log(response.data);
    SHOW_SUCCESS(response.data.success,SENSOR_TYPE_CREATE)
    return [];
  } catch (error) {
    // // console.log(error.response.data.message.error);
    SHOW_ERROR(error,ERROR_MESS)

    return [];
  }
});

export const updateOneType = createAsyncThunk(
  "update/oneType",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.SensorType.update(data.id, data.finalData);
      SHOW_SUCCESS(response.data.success,SENSOR_TYPE_UPDATE)
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const deleteType = createAsyncThunk("delete/oneType", async (data) => {
  try {
    const response = await API.SensorType.delete(data);
    // // // console.log(response.data);
    SHOW_SUCCESS(response.data.success,SENSOR_TYPE_DELETE)
    return [];
  } catch (error) {
    // // // console.log(error.response.data.message);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

export const fetchOneTypeData = createAsyncThunk("get/oneType", async (id) => {
  try {
    const response = await API.SensorType.getOne(id);
    // // // console.log(response.data);
    return response.data.data;
  } catch (error) {
    // // // console.log(error.response.data.message);
    return error.response.data;
  }
});

const SensorTypeSlice = createSlice({
  name: "Sensor Type",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllTypes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllTypes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allTypes = action.payload.data;

        delete action.payload.groups;
        state.paginationData = action.payload;
      })
      .addCase(fetchAllTypes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchOneTypeData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneTypeData.fulfilled, (state, action) => {
        state.oneType = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchOneTypeData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(deleteType.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteType.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allTypes = state.allTypes.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteType.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(addTypeData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addTypeData.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (!action.payload.success) {
          state.allTypes.push(action.payload);
        }
        state.error = action.payload.message.error;
      })
      .addCase(addTypeData.rejected, (state, action) => {
        state.status = "failed";
        // console.log(action.payload);
        state.error = action.payload;
      })
      .addCase(updateOneType.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOneType.fulfilled, (state, action) => {
        state.status = "succeeded";
        // // // console.log(action.payload);
        // state.RejectedReasons.push(action.payload);
      })
      .addCase(updateOneType.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.payload);
        state.error = action.payload;
      });
  },
});

// export const { postAdded, reactionAdded } = RejectedReasons.actions;

export default SensorTypeSlice.reducer;
