import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";
import { ERROR_MESS, PLANS_CREATE, PLANS_DELETE, PLANS_UPDATE } from "../../constant";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";

const initialState = {
  Plans: [],
  onePlan: {},
  error: null,
  status: null,
};

export const getAllPlans = createAsyncThunk(
  "get/subscriptionPlans",
  async () => {
    try {
      const response = await API.companyPlans.getAll();
      // // // console.log(response);
      // // console.log(response.data);
      return response.data;
    } catch (error) {
      // // console.log(error.response.message);
      return error.response.data;
    }
  }
);
export const addPlanData = createAsyncThunk(
  "post/subscriptionPlans",
  async (data) => {
    try {
      const response = await API.companyPlans.add(data);
      // // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,PLANS_CREATE)

      return response.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      SHOW_ERROR(error,ERROR_MESS)
    return [];
    }
  }
);

export const updateOnePlan = createAsyncThunk(
  "update/oneSubscriptionPlan",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.companyPlans.update(data.id, data.finalData);
      SHOW_SUCCESS(response.data.success,PLANS_UPDATE)
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const deleteUserPlan = createAsyncThunk(
  "delete/oneSubscriptionPlan",
  async (data) => {
    try {
      const response = await API.companyPlans.delete(data);
      SHOW_SUCCESS(response.data.success,PLANS_DELETE)
      return [];
    } catch (error) {
      // // console.log(error.response.data.message);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);
export const fetchOnePlanData = createAsyncThunk(
  "get/oneSubscriptionPlan",
  async (id) => {
    try {
      const response = await API.companyPlans.getOne(id);
      // console.log(response.data.data);

      return response.data;
    } catch (error) {
      // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

// export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
//   const response = await axios.post(POSTS_URL, initialPost)
//   return response.data
// })

const PlanSlice = createSlice({
  name: "Company Plans",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPlans.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllPlans.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload.inspectionPlans);
        state.Plans = action.payload.data;
      })
      .addCase(getAllPlans.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // post data reduces
      .addCase(addPlanData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addPlanData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload);
        // state.plans = action.payload.inspectionPlans;
      })
      .addCase(addPlanData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // get plan data reduces
      .addCase(fetchOnePlanData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOnePlanData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.onePlan = action.payload.data;
      })
      .addCase(fetchOnePlanData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // delete plan data reduces
      .addCase(deleteUserPlan.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteUserPlan.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions
        state.Plans = state.Plans.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteUserPlan.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(updateOnePlan.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOnePlan.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updateOnePlan.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload.message;
      });
  },
});

export default PlanSlice.reducer;
