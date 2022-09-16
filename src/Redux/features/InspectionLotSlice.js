import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { toast } from "react-toastify";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";
import { ERROR_MESS, INSPECTION_LOT_CREATE, INSPECTION_LOT_DELETE, INSPECTION_LOT_UPDATE } from "../../constant";

const initialState = {
  lots: [],
  lot: {},
  error: null,
  status: null,
};

export const fetchLots = createAsyncThunk("get/allLots", async (page) => {
  try {
    const response = await API.InspectionLot.getAll(page);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    return error.response.data;
  }
});

export const addLots = createAsyncThunk("post/lots", async (data) => {
  try {
    const response = await API.InspectionLot.add(data);
    SHOW_SUCCESS(response.data.success,INSPECTION_LOT_CREATE)
    // // console.log(response.data);
    return [];
  } catch (error) {
    // // console.log(error.response.data.message);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

export const updateOneLot = createAsyncThunk("update/lot", async (data) => {
  try {
    // // // console.log("from slice :", data);
    const response = await API.InspectionLot.update(data.id, data.finalData);
    SHOW_SUCCESS(response.data.success,INSPECTION_LOT_UPDATE)
    return [];
  } catch (error) {
    // // // console.log("FROM SLICE API ERROR", error);
    SHOW_ERROR(error,ERROR_MESS)
    return [];
  }
});

export const deleteLots = createAsyncThunk("delete/lot", async (data) => {
  try {
    const response = await API.InspectionLot.delete(data);
    SHOW_SUCCESS(response.data.success,INSPECTION_LOT_DELETE)
    return [];
  } catch (error) {
    // // console.log(error.response.data.message);
    SHOW_ERROR(error, ERROR_MESS)
    return [];
  }
});

export const fetchOneLot = createAsyncThunk("get/lot", async (id) => {
  try {
    const response = await API.InspectionLot.getOne(id);
    // // console.log(response.data);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.data.message);
    return error.response.data;
  }
});

const InspectionLotSlice = createSlice({
  name: "Inspection Lot",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLots.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLots.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lots = action.payload.inspectionLots;
        delete action.payload.lots;
        state.paginationData = action.payload;
      })
      .addCase(fetchLots.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(fetchOneLot.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneLot.fulfilled, (state, action) => {
        state.status = "succeeded";
        let refineLot = {
          ...action.payload,
          plantId: action.payload.plant.id,
          userIds: action.payload.assignUsers[0].id,
          materialId: action.payload.material.id,
        };
        // console.log("from slice : ", action.payload.assignUsers[0].id);
        state.lot = refineLot;
      })
      .addCase(fetchOneLot.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(deleteLots.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteLots.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lots = state.lots.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteLots.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(addLots.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addLots.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lots.push(action.payload);
      })
      .addCase(addLots.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(updateOneLot.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOneLot.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updateOneLot.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

// export const { postAdded, reactionAdded } = plantSlice.actions;

export default InspectionLotSlice.reducer;
