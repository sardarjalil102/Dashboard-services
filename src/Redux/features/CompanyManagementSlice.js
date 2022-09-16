import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { toast } from "react-toastify";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";
import { COMPANY_CREATE, COMPANY_DELETE, COMPANY_UPDATE, ERROR_MESS } from "../../constant";

const initialState = {
  companies: [],
  company: {},
  error: null,
  status: null,
};

export const getAllCompanies = createAsyncThunk("get/companies", async () => {
  try {
    const response = await API.CompanyManagement.getAll();
    // // // console.log(response);
    // // console.log(response.data);
    return response.data;
  } catch (error) {
    // // console.log(error.response.message);
    return error.response.data;
  }
});

export const addCompanyData = createAsyncThunk("post/company", async (data) => {
  try {
    const response = await API.CompanyManagement.add(data);
    // // // console.log(response.data);
    SHOW_SUCCESS(response.data.success,COMPANY_CREATE)

    return response.data;
  } catch (error) {
    // // // console.log(error.response.data.message);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

export const updateOneCompanyData = createAsyncThunk(
  "update/compnay",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.CompanyManagement.update(
        data.id,
        data.finalData
      );
      SHOW_SUCCESS(response.data.success,COMPANY_UPDATE)
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_ERROR(error,ERROR_MESS)
    return [];
    }
  }
);

export const deleteCompany = createAsyncThunk(
  "delete/compnay",
  async (data) => {
    try {
      const response = await API.CompanyManagement.delete(data);
      // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,COMPANY_DELETE)

      return data;
    } catch (error) {
      // // console.log(error.response.data.message);
      SHOW_ERROR(error,ERROR_MESS)
    return [];
    }
  }
);

export const fetchOneCompanyData = createAsyncThunk(
  "get/company",
  async (id) => {
    try {
      const response = await API.CompanyManagement.getOne(id);
      // // console.log(response.data);

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

const CompanyManagementSlice = createSlice({
  name: "Company Management",
  initialState,
  reducers: {
    clearCompany: (state, action) => {
      state.company = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllCompanies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllCompanies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.companies = action.payload.data;
        state.paginationData = action.payload;
      })
      .addCase(getAllCompanies.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      // post data reduces
      .addCase(addCompanyData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addCompanyData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload);
        // state.plans = action.payload.inspectionPlans;
      })
      .addCase(addCompanyData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // get plan data reduces
      .addCase(fetchOneCompanyData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneCompanyData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.company = action.payload.data;
        // // console.log(state.company);
      })
      .addCase(fetchOneCompanyData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // delete plan data reduces
      .addCase(deleteCompany.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions
        state.companies = state.compnaies.filter(
          (item) => item.id !== action.payload
        );
        // Add any fetched posts to the array
        // // // console.log(action.payload);
        // state.plans = action.payload.inspectionPlans;
      })
      .addCase(deleteCompany.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(updateOneCompanyData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOneCompanyData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.company = action.payload.data;
      })
      .addCase(updateOneCompanyData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload.message;
      });
  },
});
export const { clearCompany } = CompanyManagementSlice.actions;

export default CompanyManagementSlice.reducer;
