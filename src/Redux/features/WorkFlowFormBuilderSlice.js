import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { toast } from "react-toastify";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";
import { ERROR_MESS, WORKFLOW_FORM_BUILDER_CREATE, WORKFLOW_FORM_BUILDER_DELETE, WORKFLOW_FORM_BUILDER_UPDATE } from "../../constant";

const initialState = {
  builderForms: [],
  builderForm: {},
  paginationData: {},
  error: null,
  status: null,
};

export const fetchBuilderForms = createAsyncThunk(
  "get/builderForms",
  async (page) => {
    try {
      const response = await API.WorkflowBuilder.getAll(page);
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

export const addBuilder = createAsyncThunk("post/builderForm", async (data) => {
  try {
    const response = await API.WorkflowBuilder.add(data);
    // // // console.log(response.data);
    SHOW_SUCCESS(response.data.success,WORKFLOW_FORM_BUILDER_CREATE)
    return [];
  } catch (error) {
    // // // console.log(error.response.data.message);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

export const updateOneBuilder = createAsyncThunk(
  "update/builderForm",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.WorkflowBuilder.update(
        data.id,
        data.finalData
      );
      SHOW_SUCCESS(response.data.success,WORKFLOW_FORM_BUILDER_UPDATE)
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const deleteBuilder = createAsyncThunk(
  "delete/builderForm",
  async (data) => {
    try {
      const response = await API.WorkflowBuilder.delete(data);
      // // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,WORKFLOW_FORM_BUILDER_DELETE)
      return [];
    } catch (error) {
      // // // console.log(error.response.data.message);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const fetchOneBuilder = createAsyncThunk(
  "get/builderForm",
  async (id) => {
    try {
      const response = await API.WorkflowBuilder.getOne(id);
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

const WorkFlowFormBuilderSlice = createSlice({
  name: "workStation",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBuilderForms.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBuilderForms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.builderForms = action.payload.data;
        // delete action.payload.workStations;
        state.paginationData = action.payload;
      })
      .addCase(fetchBuilderForms.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(fetchOneBuilder.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneBuilder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.builderForm = action.payload.data;
      })
      .addCase(fetchOneBuilder.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(deleteBuilder.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteBuilder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.builderForms = state.workStations.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteBuilder.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(addBuilder.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addBuilder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.builderForms.push(action.payload);
      })
      .addCase(addBuilder.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(updateOneBuilder.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOneBuilder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.builderForm = action.payload.data;
      })
      .addCase(updateOneBuilder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

// export const { postAdded, reactionAdded } = workStationSlice.actions;

export default WorkFlowFormBuilderSlice.reducer;
