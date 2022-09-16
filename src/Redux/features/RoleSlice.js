import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";
import { ERROR_MESS, ROLE_CREATE, ROLE_DELETE, ROLE_UPDATE } from "../../constant";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";

const initialState = {
  Roles: [],
  Role: {},
  error: null,
  status: null,
};

export const getAllRoles = createAsyncThunk("get/Roles", async () => {
  try {
    const response = await API.Roles.getAll();
    // // // console.log(response);
    // // console.log(response.data.data);
    return response.data;
  } catch (error) {
    // // console.log(error.response.message);
    return error.response.data;
  }
});
export const addRolesData = createAsyncThunk("post/Roles", async (data) => {
  try {
    const response = await API.Roles.add(data);
    SHOW_SUCCESS(response.data.success,ROLE_CREATE)

    return [];
  } catch (error) {
    // // // console.log(error.response.data.message);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

export const updateOneRole = createAsyncThunk("update/Role", async (data) => {
  try {
    // // console.log("from slice :", data);
    const response = await API.Roles.update(data.id, data.finalData);
    SHOW_SUCCESS(response.data.success,ROLE_UPDATE)
    return [];
  } catch (error) {
    // // console.log("FROM SLICE API ERROR", error);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

export const deleteRole = createAsyncThunk("delete/Role", async (data) => {
  try {
    const response = await API.Roles.delete(data);
    SHOW_SUCCESS(response.data.success,ROLE_DELETE)
    return [];
  } catch (error) {
    // // console.log(error.response.data.message);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});
export const fetchOneRoleData = createAsyncThunk("get/Role", async (id) => {
  try {
    const response = await API.Roles.getOne(id);
    // // console.log(response.data);

    return response.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    return error.response.data;
  }
});

// export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
//   const response = await axios.post(POSTS_URL, initialPost)
//   return response.data
// })

const RoleSlice = createSlice({
  name: "Roles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllRoles.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllRoles.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload.inspectionPlans);
        state.Roles = action.payload.data;
      })
      .addCase(getAllRoles.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // post data reduces
      .addCase(addRolesData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addRolesData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // // // console.log(action.payload);
      })
      .addCase(addRolesData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(fetchOneRoleData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneRoleData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // // // console.log(action.payload);
        state.Role = action.payload.data;
      })
      .addCase(fetchOneRoleData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // delete plan data reduces
      .addCase(deleteRole.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions
        state.Roles = state.Roles.filter((item) => item.id !== action.payload);
        // Add any fetched posts to the array
        // // // console.log(action.payload);
        // state.plans = action.payload.inspectionPlans;
      })
      .addCase(deleteRole.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      });
  },
});

export default RoleSlice.reducer;
