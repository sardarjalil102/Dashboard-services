import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { toast } from "react-toastify";

const initialState = {
  allPermissions: [],
  assignedPermissions: {},
  permission: {},
  error: null,
  status: null,
};

export const getAllPermissions = createAsyncThunk(
  "get/allPermissions",
  async () => {
    try {
      const response = await API.Permissions.getAll();
      // // // console.log(response);
      // // // console.log(response.data.data);
      return response.data;
    } catch (error) {
      // // // console.log(error.response.message);
      return error.response.data;
    }
  }
);

export const fetchOneAssignedPermissionData = createAsyncThunk(
  "get/assignedPermission",
  async (id) => {
    try {
      const response = await API.Permissions.getAllAssigned(id);
      // // // console.log(response.data);

      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

export const AssignNewPermissions = createAsyncThunk(
  "post/assignPermission",
  async (pData) => {
    try {
      const response = await API.Permissions.assignNew(pData.id, pData.data);
      // // // console.log("from action funcction :",response.data);
      // // // console.log(response.data);
      if (response.data.success) {
        toast.success("Assigned", {
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
  }
);

const userPermissionSlice = createSlice({
  name: "userPermissions",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPermissions.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllPermissions.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload.inspectionpermissions);
        state.allPermissions = action.payload.data;
      })
      .addCase(getAllPermissions.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // get permission data reduces
      .addCase(fetchOneAssignedPermissionData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneAssignedPermissionData.fulfilled, (state, action) => {
        state.status = "succeeded";
        let tempArr = [];
        const { assignedPermissions } = action.payload;
        // console.log(action.payload);
        for (const [key, value] of Object.entries(assignedPermissions)) {
          // console.log(value);
          tempArr.push(value?.trim());
        }

        // console.log(tempArr);
        state.assignedPermissions = tempArr;
      })

      .addCase(fetchOneAssignedPermissionData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // delete permission data reduces

      .addCase(AssignNewPermissions.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(AssignNewPermissions.fulfilled, (state, action) => {
        state.status = "succeeded";
        // var processedPermission = Object.keys(action.payload.data.assignedPermissions).map(
        //   (key) => action.payload.data.assignedPermissions[key]
        // );
        // state.assignedPermissions = processedPermission;
      })
      .addCase(AssignNewPermissions.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      });
  },
});

export default userPermissionSlice.reducer;
