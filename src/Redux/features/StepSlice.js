import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  updateActionType,
  updateQCPointArry,
  updateTree,
} from "./InspectionPlanSlice";

const initialState = {
  step: {},
  error: null,
  status: null,
};

export const addStep = createAsyncThunk("post/step", async (data, thunkAPI) => {
  try {
    const response = await API.step.add(data);
    // // console.log(response.data);
    if (response.data.success) {
      // if (true) {
      toast.success("A New step added Successfully.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      thunkAPI.dispatch(updateActionType("null"));
    }
    thunkAPI.dispatch(
      updateTree({
        stepId: null,
        data: {
          id: response.data.data.id,
          label: response.data.data?.title,
          children: [],
          type: "step",
        },
      })
    );

    thunkAPI.dispatch(
      updateQCPointArry({
        stepId: null,
        data: response.data.data,
      })
    );

    return response.data.data;
  } catch (error) {
    // // // console.log(error.response.data.message);
    if (error) {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    return error.response.data;
  }
});
// export const deleteInspectoinPlan = createAsyncThunk(
//   "delete/Plan",
//   async (data) => {
//     try {
//       const response = await API.step.delete(data);
//      // // // console.log(response.data);

//       return data;
//     } catch (error) {
//      // // // console.log(error.response.data.message);
//       return error.response.data;
//     }
//   }
// );
export const fetchOneStep = createAsyncThunk("get/step", async (id) => {
  try {
    const response = await API.step.getOne(id);
    // // console.log(response.data);

    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    return error.response.data;
  }
});

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    stepCleaner: {
      reducer(state, action) {
        // console.log("step cleaning... ");
        state.step = {};
        // console.log("step cleaning done !");
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addStep.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addStep.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload);
        state.step = action.payload;
      })
      .addCase(addStep.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // get plan data reduces
      .addCase(fetchOneStep.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneStep.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload);

        state.step = action.payload;
      })
      .addCase(fetchOneStep.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      });
    // .addCase(fetchPlans.pending, (state, action) => {
    //   state.status = "loading";
    // })
    // .addCase(fetchPlans.fulfilled, (state, action) => {
    //   state.status = "succeeded";
    //   // Adding date and reactions

    //   // Add any fetched posts to the array
    //   // // // console.log(action.payload.steps);
    //   state.plans = action.payload.steps;
    // })
    // .addCase(fetchPlans.rejected, (state, action) => {
    //   state.status = "failed";
    //   // // console.log(action.error);
    //   state.error = action.payload.message;
    // })
    // post data reduces
    // delete plan data reduces
    // .addCase(deleteInspectoinPlan.pending, (state, action) => {
    //   state.status = "loading";
    // })
    // .addCase(deleteInspectoinPlan.fulfilled, (state, action) => {
    //   state.status = "succeeded";
    //   // Adding date and reactions
    //   state.plans = state.plans.filter((item) => item.id !== action.payload);
    //   // Add any fetched posts to the array
    //   // // console.log(action.payload);
    //   // state.plans = action.payload.steps;
    // })
    // .addCase(deleteInspectoinPlan.rejected, (state, action) => {
    //   state.status = "failed";
    //   // // console.log(action.error);
    //   state.error = action.payload.message;
    // })
  },
});

// export const selectAllPlans = (state) => state.plans;
// export const getPostsStatus = (state) => state.status;
// export const getPostsError = (state) => state.error;

export const { stepCleaner } = stepSlice.actions;

export default stepSlice.reducer;
