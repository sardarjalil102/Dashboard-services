import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { toast } from "react-toastify";
import {
  updateActionType,
  updateQCPointArry,
  updateTree,
} from "./InspectionPlanSlice";

const initialState = {
  qcPoint: {},
  checkConditions: [],
  error: null,
  status: null,
};

// todo
// update tree when qc point added
export const addQCPoint = createAsyncThunk(
  "post/qcPoint",
  async (data, thunkAPI) => {
    try {
      const response = await API.QCPoint.add(data);
      // console.log(response.data);
      if (response.data.success) {
        toast.success("Added Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        thunkAPI.dispatch(updateActionType("null"));
      }
      if (response.data.data?.stepId) {
        thunkAPI.dispatch(
          updateTree({
            stepId: response.data.data?.stepId,
            data: {
              id: response.data.data?.id,
              label: response.data.data?.title,
              type: "qc",
            },
          })
        );
      }

      thunkAPI.dispatch(
        updateQCPointArry({
          stepId: response.data.data?.stepId,
          data: response.data.data,
        })
      );

      return response.data.data;
    } catch (error) {
      // console.log(error);
      // if (error) {
      //   toast.error("Something went wrong!", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //   });
      // }
      return error.response.data;
    }
  }
);

export const fetchOneQCPoint = createAsyncThunk("get/qcPoint", async (id) => {
  try {
    const response = await API.QCPoint.getOne(id);
    // // console.log("from qcPoint:",response.data);

    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data);
    return error.response.data;
  }
});

export const addcheckCondition = createAsyncThunk(
  "post/checkConditon",
  async (data) => {
    try {
      // console.log(data);
      const response = await API.QCPoint.addCheckCondition(data);
      // console.log(response);
      if (response.data.success) {
        toast.success("Added Successfully!", {
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
      // // console.log(error.response.data);
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

export const getAllChackConditions = createAsyncThunk(
  "get/chackConditions",
  async (qcId) => {
    try {
      const response = await API.QCPoint.getAllCheckConditions(qcId);
      // console.log("check conditoin : ", response);

      return response.data.data;
    } catch (error) {
      // // console.log(error.response.message);
      return error.response.data;
    }
  }
);

const qcPointSlice = createSlice({
  name: "qcPoint",
  initialState,
  reducers: {
    QCPointCleaner: {
      reducer(state, action) {
        // console.log("QCPoint cleaning... ");
        state.qcPoint = {};
        // console.log("QCPoint cleaning done !");
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addQCPoint.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addQCPoint.fulfilled, (state, action) => {
        state.status = "succeeded";

        // Add any fetched posts to the array
        // // // console.log(action.payload);
        state.qcPoint = action.payload;
      })
      .addCase(addQCPoint.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        // state.error = action.payload.message;
      })
      // get plan data reduces
      .addCase(fetchOneQCPoint.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneQCPoint.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload);

        state.qcPoint = action.payload;
      })
      .addCase(fetchOneQCPoint.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(getAllChackConditions.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllChackConditions.fulfilled, (state, action) => {
        state.status = "succeeded";
        // // console.log(action.payload);

        state.checkConditions = action.payload;
      })
      .addCase(getAllChackConditions.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(addcheckCondition.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addcheckCondition.fulfilled, (state, action) => {
        state.status = "succeeded";
        // // console.log(action.payload);

        state.checkConditions.push(action.payload);
      })
      .addCase(addcheckCondition.rejected, (state, action) => {
        state.status = "failed";
        // console.log(action.payload);
        // state.error = action.payload?.message;
      });
  },
});
export const { QCPointCleaner } = qcPointSlice.actions;

export default qcPointSlice.reducer;
