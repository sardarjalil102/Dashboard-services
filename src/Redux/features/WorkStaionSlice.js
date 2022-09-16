import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { toast } from "react-toastify";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";
import { ERROR_MESS, WORK_STATION_CREATE, WORK_STATION_DELETE, WORK_STATION_UPDATE } from "../../constant";

const initialState = {
  workStations: [],
  workStation: {},
  error: null,
  status: null,
};

export const fetchWorkStations = createAsyncThunk(
  "get/WorkStations",
  async () => {
    try {
      const response = await API.workstations.getAll();
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

export const addWorkStationData = createAsyncThunk(
  "post/workStation",
  async (data) => {
    try {
      const response = await API.workstations.add(data);
      // // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,WORK_STATION_CREATE)
      return [];
    } catch (error) {
      // // // console.log(error.response.data.message);
      SHOW_ERROR(error,SHOW_ERROR)
      return [];
    }
  }
);

export const updateOneWorkStationData = createAsyncThunk(
  "update/workStation",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.workstations.update(data.Id, data.finalData);
      SHOW_SUCCESS(response.data.success,WORK_STATION_UPDATE)
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const deleteWorkStation = createAsyncThunk(
  "delete/workStation",
  async (data) => {
    try {
      const response = await API.workstations.delete(data);
      // // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,WORK_STATION_DELETE)
      return [];
    } catch (error) {
      // // // console.log(error.response.data.message);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const fetchOneWorkStationData = createAsyncThunk(
  "get/workStation",
  async (id) => {
    try {
      const response = await API.workstations.getOne(id);
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

const workStationSlice = createSlice({
  name: "workStation",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWorkStations.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchWorkStations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.workStations = action.payload;
        // delete action.payload.workStations;
        // state.paginationData = action.payload;
      })
      .addCase(fetchWorkStations.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(fetchOneWorkStationData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneWorkStationData.fulfilled, (state, action) => {
        const tempPlant = action.payload.plant.map((p) => {
          return { value: p.id, label: p.plantName };
        });
        const tempMaterial = action.payload.materialMaster.map((m) => {
          return { value: m.id, label: m.materialText };
        });
        const tempPlantId = action.payload.plant.map((p) => {
          return p.id;
        });
        const tempMaterialId = action.payload.materialMaster.map((m) => {
          return m.id;
        });
        state.workStation = action.payload;
        state.workStation.plant = tempPlant;
        state.workStation.materialMaster = tempMaterial;
        state.workStation.plantIds = tempPlantId;
        state.workStation.materialIds = tempMaterialId;
        state.status = "succeeded";
      })
      .addCase(fetchOneWorkStationData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(deleteWorkStation.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteWorkStation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.workStations = state.workStations.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteWorkStation.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(addWorkStationData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addWorkStationData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.workStations.push(action.payload);
      })
      .addCase(addWorkStationData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      });
  },
});

// export const { postAdded, reactionAdded } = workStationSlice.actions;

export default workStationSlice.reducer;
