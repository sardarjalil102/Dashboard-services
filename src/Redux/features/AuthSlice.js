import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  removeCompantId,
  removeToken,
  setCompantId,
  setToken,
} from "../../utils";
import { SHOW_ERROR } from "../../utils/toastMessages";

const initialState = {
  currentUser: {},
  permissions: [],
  Authenticate: false,
  status: "idle",
};

export const getUserData = createAsyncThunk("auth/user", async (data) => {
  // console.log("from get user function :", data);
  try {
    let getPermissions;
    const userDataResponse = await API.auth.user(data.token);

    if (userDataResponse.data.success) {
      // console.log("user data :", userDataResponse.data.data.role[0].id);

      // console.log("user Role Id not found! ");
      getPermissions = await API.Permissions.getAllAssigned(
        userDataResponse.data.data?.role[0]?.id
      );
      return {
        userData: userDataResponse.data.data,
        token: data.token,
        navigate: data.navigate,
        from: data.from,
        permissions: getPermissions.data.data || {},
      };
    } else {
      return {
        userData: {},
        token: null,
        navigate: null,
        from: null,
        permissions: {},
      };
    }
  } catch (error) {
    return `error : ${error}`;
  }
});

export const authLogIn = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    // submitData, navigate, from: from.pathname
    // console.log("login function got called :", userData);
    const res = await API.auth.login(userData.loginData);
    if (res.data.access_token) {
      // userData.navigate(userData.from);
      axios.defaults.headers.common = {
        Authorization: `Bearer ${res.data.access_token}`,
      };
      thunkAPI.dispatch(
        getUserData({
          token: res.data.access_token,
          navigate: userData.navigate,
          from: userData.from,
        })
      );

      return res.data;
    }

    if (res.error) {
      toast.error(res.message, {
        position: "top-right",
        // autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }
  }
);

export const getCompanyId = createAsyncThunk("get/companyId", async (id) => {
  const response = id;
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCompnyId: {
      reducer(state, action) {
        state.companyId = action.payload;
      },
    },
    logoutUser: {
      reducer(state, action) {
        state.Authenticate = false;
        state.status = "done";
        state.currentUser = {};
        removeToken();
        removeCompantId();
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(authLogIn.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(authLogIn.fulfilled, (state, action) => {
        // state.status = "succeeded";
        if (action.payload.access_token) {
          setToken(action.payload.access_token);
        }
        if (action.payload?.companyId) {
          setCompantId(action.payload.companyId);
        }
        // state.Authenticate = true;
      })
      .addCase(authLogIn.rejected, (state, action) => {
        state.status = "failed";
        // console.log("from fail request : ", action.payload);
        SHOW_ERROR(true, "please check your internet connection");
      })
      .addCase(getUserData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        // console.log("user function got called :", action.payload);
        state.status = "succeeded";
        if (action.payload.token) {
          setToken(action.payload.token);
        }
        if (action.payload.userData.company) {
          setCompantId(action.payload.userData.company);
        }

        if (
          action.payload.from === "/login" ||
          action.payload.from === undefined
        ) {
          action.payload.navigate("/");
        } else {
          action.payload.navigate(action.payload?.from);
        }
        state.currentUser = action.payload?.userData;
        for (const [key, value] of Object.entries(
          action.payload?.permissions?.assignedPermissions
        )) {
          state.permissions.push(value?.trim());
        }
        state.Authenticate = true;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = "failed";
        // console.log("from fail request : ", action.payload);
        SHOW_ERROR(true, "please check your internet connection");
        // state.error = action.payload?.message;
      })
      .addCase(getCompanyId.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCompanyId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.companyId = action.payload;
      })
      .addCase(getCompanyId.rejected, (state, action) => {
        state.status = "failed";
        // console.log(action.error);
        state.error = action.payload.message;
      });
  },
});

export const { logoutUser, setCompnyId } = authSlice.actions;

const { reducer } = authSlice;
export default reducer;
