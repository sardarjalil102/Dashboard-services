import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { toast } from "react-toastify";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";
import {
  ERROR_MESS,
  PLANT_CREATE,
  PLANT_DELETE,
  PLANT_UPDATE,
} from "../../constant";

const initialState = {
  plants: [],
  plant: {},
  error: null,
  status: null,
};

export const fetchPlants = createAsyncThunk("get/allPlants", async (page) => {
  try {
    const response = await API.plant.getAll(page);
    // // console.log(response.data);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    return error.response.data;
  }
});

export const addPlantData = createAsyncThunk(
  "post/plant",
  async (submitData) => {
    try {
      const response = await API.plant.add(submitData);
      // console.log(response.data);
      // const { code, success, message } = error.response.data;
      const { success, message, data } = response.data;

      SHOW_SUCCESS(success, message);

      return {
        success,
        data,
        code: 201,
      };
    } catch (error) {
      // console.log(error.response.data );
      const { code, success, message } = error.response.data;
      if (!success && code === 400) {
        SHOW_ERROR(true, message.error);
      } else {
      }
      return {
        success,
        data: {},
        code,
      };
    }
  }
);

export const updateOnePlant = createAsyncThunk("update/plant", async (data) => {
  try {
    // // // console.log("from slice :", data);
    const response = await API.plant.update(data.id, data.finalData);
    if (response.data.success) {
      SHOW_SUCCESS(response.data.success, PLANT_UPDATE);
    }
    return response.data.data;
  } catch (error) {
    // // // console.log("FROM SLICE API ERROR", error);
    if (error) {
      SHOW_ERROR(error, ERROR_MESS);
    }
    return error.response;
  }
});

export const deletePlant = createAsyncThunk("delete/plant", async (data) => {
  try {
    const response = await API.plant.delete(data);
    if (response.data.success) {
      SHOW_SUCCESS(response.data.success, PLANT_DELETE);
    }
    return data;
  } catch (error) {
    // // console.log(error.response.data.message);
    if (error) {
      SHOW_ERROR(error, ERROR_MESS);
    }
    return error.response.data;
  }
});

export const fetchOnePlantData = createAsyncThunk("get/plant", async (id) => {
  try {
    const response = await API.plant.getOne(id);
    // // console.log(response.data);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    return error.response.data;
  }
});

const plantSlice = createSlice({
  name: "plant",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPlants.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.plants = action.payload.plants;
        delete action.payload.plants;
        state.paginationData = action.payload;
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(fetchOnePlantData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOnePlantData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.plant = action.payload;
      })
      .addCase(fetchOnePlantData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(deletePlant.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deletePlant.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.plants = state.plants.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deletePlant.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(addPlantData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addPlantData.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { success, data, code } = action.payload;
        if (success) {
          state.plants.unshift(data);
        } else {
          state.error = code;
        }
      })
      .addCase(addPlantData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(updateOnePlant.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOnePlant.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updateOnePlant.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

// export const { postAdded, reactionAdded } = plantSlice.actions;

export default plantSlice.reducer;
