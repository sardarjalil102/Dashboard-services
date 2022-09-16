import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { toast } from "react-toastify";

const initialState = {
  users: [],
  user: {},
  error: null,
  status: null,
};

export const getAllUsers = createAsyncThunk("get/users", async () => {
  try {
    const response = await API.Users.getAll();
    // // // console.log(response);
    // // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.message);
    return error.response.data;
  }
});

export const addUsersData = createAsyncThunk("post/users", async (data) => {
  try {
    const response = await API.Users.add(data);
    // // // console.log(response.data);
    if (response.data.success) {
      toast.success("Created Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

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

export const updateOneUserData = createAsyncThunk(
  "update/user",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.Users.update(data.id, data.finalData);
      if (response.data.success) {
        toast.success("Updated Successfully!", {
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

export const updatePassword = createAsyncThunk(
  "update/password",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.Users.passwordUpdate(data.id, data.finalData);
      if (response.data.success) {
        toast.success("Updated Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      return response.data;
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

export const deleteUser = createAsyncThunk("delete/user", async (data) => {
  try {
    const response = await API.Users.delete(data);
    // // console.log(response.data);
    if (response.data.success) {
      toast.info(response.data.message, {
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
    // // console.log(error.response.data.message);
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

export const fetchOneUserData = createAsyncThunk("get/user", async (id) => {
  try {
    const response = await API.Users.getOne(id);
    // // console.log(response.data);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    return error.response.data;
  }
});

// export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
//   const response = await axios.post(POSTS_URL, initialPost)
//   return response.data
// })

const UsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload.users;
        delete action.payload.users;
        state.paginationData = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // post data reduces
      .addCase(addUsersData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addUsersData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload);
        // state.plans = action.payload.inspectionPlans;
      })
      .addCase(addUsersData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      //password update
      .addCase(updatePassword.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.status = "rejected";
      })

      // get plan data reduces
      .addCase(fetchOneUserData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload);
        state.user = action.payload;
      })
      .addCase(fetchOneUserData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // delete plan data reduces
      .addCase(deleteUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions
        state.Users = state.Users.filter((item) => item.id !== action.payload);
        // Add any fetched posts to the array
        // // // console.log(action.payload);
        // state.plans = action.payload.inspectionPlans;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      });
  },
});

export default UsersSlice.reducer;
