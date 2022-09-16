import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";
import { useNavigate } from "react-router-dom";
const initialState = {
  allGroups: [],
  Users: [],
  paginationData: {},
  error: null,
  status: null,
};

export const fetchAllGroups = createAsyncThunk(
  "get/workflow-approval-group",
  async () => {
    try {
      const response = await API.WorkFlowGroup.getAll();
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data?.message);
      return error.response.data;
    }
  }
);

export const getAllGroupsUsers = createAsyncThunk("get/users", async () => {
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

export const createGroup = createAsyncThunk("post/WorkFlowGroup", async ({data ,onResponse}) => {
  try {
    const response = await API.WorkFlowGroup.add(data);
    // // console.log(response.data);
    if (response.data.success) {
      toast.success("Group Created Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    onResponse?.(response.data.data);

    return response.data.data;
} catch (error) {
    // // console.log(error.response.data.message.error);
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

export const updateOneGroup = createAsyncThunk(
  "update/oneGroup",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.Groups.update(data.id, data.finalData);
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

export const deleteGroup = createAsyncThunk("delete/oneGroup", async (data) => {
  try {
    const response = await API.Groups.delete(data);
    // // // console.log(response.data);
    if (response.data.success) {
      toast.success("Deleted successfully !", {
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
});

export const deleteWorkFlowApprovalGroup= createAsyncThunk("delete/workflow-approval-group", async ({id,onResponse}) => {
  console.log('data',id)
  try {
    const response = await API.Groups.deleteWorkFlowGroup(id);
    // // console.log(response.data);
    if (response.data.success) {
      toast.success("Deleted successfully !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      onResponse?.(response.data.data);
    }
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
    builder .addCase(createGroup.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createGroup.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(createGroup.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(fetchAllGroups.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllGroups.fulfilled, (state, action) => {
        state.allGroups=action.payload    
        state.status = "succeeded";
      })
      .addCase(fetchAllGroups.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(getAllGroupsUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllGroupsUsers.fulfilled, (state, action) => {
        state.Users=action.payload    
        state.status = "succeeded";
      })
      .addCase(getAllGroupsUsers.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(deleteWorkFlowApprovalGroup.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteWorkFlowApprovalGroup.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteWorkFlowApprovalGroup.rejected, (state, action) => {
        state.status = "failed";
        // // console.log(action.error);
        state.error = action.payload?.message;
      })
      
  },
});

// export const { postAdded, reactionAdded } = RejectedReasons.actions;

export default GroupSlice.reducer;
