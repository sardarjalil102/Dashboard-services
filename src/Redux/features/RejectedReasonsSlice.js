import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";
import { ERROR_MESS, REJECTION_REASON_CREATE, REJECTION_REASON_DELETE, REJECTION_REASON_UPDATE } from "../../constant";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";

const initialState = {
  allReasons: [],
  oneReason: {},
  paginationData: null,
  error: null,
  status: null,
};

export const fetchAllRejectedReasons = createAsyncThunk(
  "get/allRejectedReasons",
  async (page) => {
    try {
      const response = await API.rejectedReasons.getAll(page);
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data?.message);
      return error.response.data;
    }
  }
);

export const addRejectedReasonsData = createAsyncThunk(
  "post/RejectedReason",
  async (data) => {
    try {
      const response = await API.rejectedReasons.add(data);
      // // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,REJECTION_REASON_CREATE)
      return [];
    } catch (error) {
      SHOW_ERROR(error, ERROR_MESS)
      return [];
    }
  }
);

export const updateOneRejectedReason = createAsyncThunk(
  "update/rejectedReason",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.rejectedReasons.update(
        data.id,
        data.finalData
      );
      SHOW_SUCCESS(response.data.success,REJECTION_REASON_UPDATE)
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const deleteRejectedReasons = createAsyncThunk(
  "delete/rejectedReason",
  async (data) => {
    try {
      const response = await API.rejectedReasons.delete(data);
      // // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,REJECTION_REASON_DELETE)
      return [];
    } catch (error) {
      // // // console.log(error.response.data.message);
      SHOW_ERROR(error, ERROR_MESS)
      return [];
    }
  }
);

export const fetchOneRejectedReasonData = createAsyncThunk(
  "get/rejectedReason",
  async (id) => {
    try {
      const response = await API.rejectedReasons.getOne(id);
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

const RejectedReasonsSlice = createSlice({
  name: "RejectedReasons",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllRejectedReasons.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllRejectedReasons.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allReasons = action.payload;
      })
      .addCase(fetchAllRejectedReasons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchOneRejectedReasonData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneRejectedReasonData.fulfilled, (state, action) => {
        state.oneReason = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchOneRejectedReasonData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(deleteRejectedReasons.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteRejectedReasons.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allReasons = state.allReasons.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteRejectedReasons.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(addRejectedReasonsData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addRejectedReasonsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allReasons.push(action.payload);
      })
      .addCase(addRejectedReasonsData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(updateOneRejectedReason.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOneRejectedReason.fulfilled, (state, action) => {
        state.status = "succeeded";
        // // // console.log(action.payload);
        // state.RejectedReasons.push(action.payload);
      })
      .addCase(updateOneRejectedReason.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.payload);
        state.error = action.payload;
      });
  },
});

// export const { postAdded, reactionAdded } = RejectedReasons.actions;

export default RejectedReasonsSlice.reducer;
