import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";
import { ERROR_MESS, GROUP_CREATE, GROUP_DELETE, GROUP_UPDATE } from "../../constant";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";

const initialState = {
  allGroups: [],
  oneGroup: {},
  paginationData: {},
  error: null,
  status: null,
};

export const fetchAllGroups = createAsyncThunk(
  "get/allGroups",
  async (page) => {
    try {
      const response = await API.Groups.getAll(page);
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data?.message);
      return error.response.data;
    }
  }
);

export const addGroupData = createAsyncThunk("post/oneGroup", async (data) => {
  try {
    const response = await API.Groups.add(data);
    // // console.log(response.data);
    SHOW_SUCCESS(response.data.success,GROUP_CREATE)
    return [];
  } catch (error) {
    // // console.log(error.response.data.message.error);
    SHOW_ERROR(error,ERROR_MESS)

    return [];
  }
});

export const updateOneGroup = createAsyncThunk(
  "update/oneGroup",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.Groups.update(data.id, data.finalData);
      SHOW_SUCCESS(response.data.success,GROUP_UPDATE)
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const deleteGroup = createAsyncThunk("delete/oneGroup", async (data) => {
  try {
    const response = await API.Groups.delete(data);
    // // // console.log(response.data);
    SHOW_SUCCESS(response.data.success,GROUP_DELETE)
    return [];
  } catch (error) {
    // // // console.log(error.response.data.message);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

export const fetchOneGroupData = createAsyncThunk(
  "get/oneGroup",
  async (id) => {
    try {
      const response = await API.Groups.getOne(id);
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

const GroupSlice = createSlice({
  name: "Group",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllGroups.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllGroups.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allGroups = action.payload.groups;

        delete action.payload.groups;
        state.paginationData = action.payload;
      })
      .addCase(fetchAllGroups.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchOneGroupData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneGroupData.fulfilled, (state, action) => {
        state.oneGroup = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchOneGroupData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(deleteGroup.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteGroup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allGroups = state.allGroups.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteGroup.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(addGroupData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addGroupData.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.success) {
          state.allGroups.push(action.payload.data);
        }
        state.error = action.payload?.message?.error;
      })
      .addCase(addGroupData.rejected, (state, action) => {
        state.status = "failed";
        // console.log(action.payload);
        state.error = action.payload;
      })
      .addCase(updateOneGroup.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOneGroup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allGroups = state.allGroups.filter(
          (item) => item.id !== action.payload
        );
        state.allGroups.push(action.payload);
        // // // console.log(action.payload);
        // state.RejectedReasons.push(action.payload);
      })
      .addCase(updateOneGroup.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.payload);
        state.error = action.payload;
      });
  },
});

// export const { postAdded, reactionAdded } = RejectedReasons.actions;

export default GroupSlice.reducer;
