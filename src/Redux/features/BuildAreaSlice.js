import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { toast } from "react-toastify";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";
import { BUILD_AREA_CREATE, BUILD_AREA_DELETE, BUILD_AREA_UPDATE, ERROR_MESS } from "../../constant";

const initialState = {
  areas: [],
  area: {},
  // treeStuff: { currentNode: {}, tree: [] },
  error: null,
  status: null,
  paginationData: null,
};

export const fetchBuildAreas = createAsyncThunk("get/Areas", async (page) => {
  try {
    const response = await API.BuildArea.getAll(page);
    // console.log(response.data);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    return error.response.data;
  }
});

export const addBuildAreaData = createAsyncThunk("post/Area", async (data) => {
  try {
    const response = await API.BuildArea.add(data);
    // // console.log(response.data);
    SHOW_SUCCESS(response.data.success, "Build Area added successfully." )
    return response.data.data;
  } catch (error) {
    // // // console.log(error.response.data.message);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

export const deleteBuildArea = createAsyncThunk("delete/Area", async (data) => {
  try {
    const response = await API.BuildArea.delete(data);
    SHOW_SUCCESS(response.data.success,BUILD_AREA_DELETE)
     // // console.log(response.data);

    return [];
  } catch (error) {
    // // console.log(error.response.data.message);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

export const fetchOneBuildAreaData = createAsyncThunk(
  "get/Area",
  async (id) => {
    try {
      const response = await API.BuildArea.getOne(id);
      // // // console.log(response.data);

      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

export const addBuildAreaMaster = createAsyncThunk(
  "post/AreaMaster",
  async (data) => {
    try {
      const response = await API.BuildArea.addMaster(data);
      // // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,BUILD_AREA_CREATE)

      return [];
    } catch (error) {
      SHOW_ERROR(error,ERROR_MESS)

      // // // console.log(error.response.data.message);
      return [];
    }
  }
);

export const updateBuilArea = createAsyncThunk("put/area", async (data) => {
  const response = await API.BuildArea.update(data.id, data.finalData);
  try {
    SHOW_SUCCESS(response.data.success,BUILD_AREA_UPDATE)
    return [];
  } catch (error) {
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

const BuildAreaSlice = createSlice({
  name: "buildArea",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBuildAreas.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBuildAreas.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions
        state.areas = action.payload.buildAreaMasters;
        // let tempdata = action.payload;
        delete action.payload.buildAreaMasters;
        state.paginationData = action.payload;
        // Add any fetched posts to the array
        // // // console.log(action.payload.inspectionareas);
        // // // console.log("temp refined data :",tempdata);
      })
      .addCase(fetchBuildAreas.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload;
      })
      // post data reduces
      .addCase(addBuildAreaData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addBuildAreaData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // console.log(action.payload);
        if (action.payload.parentId === null) {
          state.area = action.payload;
        }

        // // // console.log(([state.area],action.payload.parentId, action.payload));
      })
      .addCase(addBuildAreaData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // get plan data reduces
      .addCase(fetchOneBuildAreaData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneBuildAreaData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.area = action.payload[0];
      })
      .addCase(fetchOneBuildAreaData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // delete plan data reduces
      .addCase(deleteBuildArea.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteBuildArea.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions
        state.areas = state.areas.filter((item) => item.id !== action.payload);
        // Add any fetched posts to the array
        // // // console.log(action.payload);
        // state.areas = action.payload.inspectionareas;
      })
      .addCase(deleteBuildArea.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(addBuildAreaMaster.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addBuildAreaMaster.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.areas.unshift(action.payload);
      })
      .addCase(addBuildAreaMaster.rejected, (state, action) => {
        state.status = "failed";
        // // console.log(action.error);
        state.error = action.payload.message;
      });
  },
});

// export const { updateTree } = inspectionareaslice.actions;

export default BuildAreaSlice.reducer;
