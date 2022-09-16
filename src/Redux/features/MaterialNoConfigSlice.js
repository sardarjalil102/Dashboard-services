import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { toast } from "react-toastify";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";
import { ERROR_MESS, MATERIAL_MASTER_CREATE, MATERIAL_MASTER_UPDATE, MATERIAL_NO_CONFIG_CREATE, MATERIAL_NO_CONFIG_DELETE, MATERIAL_NO_CONFIG_UPDATE } from "../../constant";

const initialState = {
  configs: [],
  config: {},
  error: null,
  status: null,
};

export const fetchConfigs = createAsyncThunk("get/allConfigs", async (page) => {
  try {
    const response = await API.MaterialNoConfig.getAll(page);
    // // console.log(response.data);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    return error.response.data;
  }
});

export const addConfigs = createAsyncThunk("post/configs", async (data) => {
  try {
    const response = await API.MaterialNoConfig.add(data);
    // // console.log(response.data);
    SHOW_SUCCESS(response.data.success,MATERIAL_NO_CONFIG_CREATE)
    return [];
  } catch (error) {
    // // console.log(error.response.data.message);
    SHOW_ERROR(error, ERROR_MESS)
    return [];
  }
});

export const updateOneConfig = createAsyncThunk(
  "update/config",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.MaterialNoConfig.update(
        data.id,
        data.finalData
      );
      SHOW_SUCCESS(response.data.success,MATERIAL_NO_CONFIG_UPDATE)
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const deleteConfigs = createAsyncThunk("delete/config", async (data) => {
  try {
    const response = await API.MaterialNoConfig.delete(data);
    SHOW_SUCCESS(response.data.success,MATERIAL_NO_CONFIG_DELETE)
    return [];
  } catch (error) {
    // // console.log(error.response.data.message);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

export const fetchOneConfig = createAsyncThunk("get/config", async (id) => {
  try {
    const response = await API.MaterialNoConfig.getOne(id);
    // // console.log(response.data);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    return error.response.data;
  }
});

const MaterialNoConfigSlice = createSlice({
  name: "Material No Config",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchConfigs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchConfigs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.configs = action.payload;
        // delete action.payload.configs;
        // state.paginationData = action.payload;
      })
      .addCase(fetchConfigs.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(fetchOneConfig.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneConfig.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.config = action.payload;
      })
      .addCase(fetchOneConfig.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(deleteConfigs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteConfigs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.configs = state.configs.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteConfigs.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(addConfigs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addConfigs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.configs.push(action.payload);
      })
      .addCase(addConfigs.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      });
  },
});

// export const { postAdded, reactionAdded } = plantSlice.actions;

export default MaterialNoConfigSlice.reducer;
