import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";

const initialState = {
  plans: [],
  plan: {},
  error: null,
  status: null,
};

export const SubscriptionPlans = createAsyncThunk("get/subsPlans", async () => {
  try {
    const response = await API.subscriptionPlan.getAll();
    // // console.log(response);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    return error.response.data;
  }
});
export const addSubscriptionPlanData = createAsyncThunk(
  "post/Plan",
  async (data) => {
    try {
      const response = await API.subscriptionPlan.add(data);
      // // // console.log(response.data);
      if (response.data.success) {
        toast.success("Added  successfully !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

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
  }
);
export const deleteSubscriptionPlan = createAsyncThunk(
  "delete/Plan",
  async (data) => {
    try {
      const response = await API.subscriptionPlan.delete(data);
      // // // console.log(response.data);
      if (response.data.success) {
        toast.success("Deleted  successfully !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      return data;
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
  }
);

export const updateSubscriptionPlan = createAsyncThunk(
  "update/plan",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.subscriptionPlan.update(
        data.id,
        data.finalData
      );
      if (response.data.success) {
        toast.success("updated successfully !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      return response.data.data;
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
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
      return error.response;
    }
  }
);

export const fetchOneSubscriptionPlanData = createAsyncThunk(
  "get/Plan",
  async (id) => {
    try {
      const response = await API.subscriptionPlan.getOne(id);
      // // // console.log(response.data);

      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

// export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
//   const response = await axios.post(POSTS_URL, initialPost)
//   return response.data
// })

const SubscriptionPlanSlice = createSlice({
  name: "subscriptionPlan",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(SubscriptionPlans.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(SubscriptionPlans.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload.inspectionPlans);
        state.plans = action.payload.companyPlans;
      })
      .addCase(SubscriptionPlans.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // post data reduces
      .addCase(addSubscriptionPlanData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addSubscriptionPlanData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload);
        // state.plans = action.payload.inspectionPlans;
      })
      .addCase(addSubscriptionPlanData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // get plan data reduces
      .addCase(fetchOneSubscriptionPlanData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneSubscriptionPlanData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload);
        state.tree = [
          {
            id: action.payload?.id,
            label: action.payload?.title,
            children: [],
          },
        ];
        state.plan = action.payload;
      })
      .addCase(fetchOneSubscriptionPlanData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(updateSubscriptionPlan.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateSubscriptionPlan.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.plan = action.payload.data;
      })
      .addCase(updateSubscriptionPlan.rejected, (state, action) => {
        state.status = "failed";
      })
      // delete plan data reduces
      .addCase(deleteSubscriptionPlan.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteSubscriptionPlan.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions
        state.plans = state.plans.filter((item) => item.id !== action.payload);
        // Add any fetched posts to the array
        // // // console.log(action.payload);
        // state.plans = action.payload.inspectionPlans;
      })
      .addCase(deleteSubscriptionPlan.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      });
  },
});

export default SubscriptionPlanSlice.reducer;
