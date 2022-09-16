import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";

const initialState = {
  logs: [],
  error: null,
  status: null,
};

export const getAllAdminLogs = createAsyncThunk("get/adminLogs", async (id) => {
  try {
    const response = await API.AdminLogs.getAll(id);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const AdminLogsSlice = createSlice({
  name: "Admin Logs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllAdminLogs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllAdminLogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.logs = action.payload.data.loginLogs;
      })
      .addCase(getAllAdminLogs.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload.message;
      });
  },
});

export default AdminLogsSlice.reducer;
