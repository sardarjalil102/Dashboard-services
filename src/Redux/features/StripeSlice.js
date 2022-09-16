import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";

const initialState = {
  intent: [],
  charges: [],
  companies: [],
  error: null,
  status: null,
};

export const getIntent = createAsyncThunk("get/intent", async () => {
  try {
    const response = await API.Stripe.getIntent();
    // // // console.log(response);
    // // console.log(response.data);
    return response.data;
  } catch (error) {
    // // console.log(error.response.message);
    return error.response.data;
  }
});

export const addChargesData = createAsyncThunk("post/charge", async (data) => {
  try {
    const response = await API.Stripe.createStripeCharge(data);
    // console.log(response.data);

    return response.data;
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

export const addCompanyData = createAsyncThunk(
  "post/companies",
  async (data) => {
    try {
      const response = await API.Stripe.createCompany(data);
      // // // console.log(response.data);

      return response.data;
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

const StripeSlice = createSlice({
  name: "stripe charges",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      // post stripe charges data reduces
      .addCase(getIntent.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getIntent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.intent = action.payload.data;
      })
      .addCase(getIntent.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      // post stripe charges data reduces
      .addCase(addChargesData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addChargesData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.charge = action.payload.data;
      })
      .addCase(addChargesData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      // post company data data reduces
      .addCase(addCompanyData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addCompanyData.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(addCompanyData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      });
  },
});

export default StripeSlice.reducer;
