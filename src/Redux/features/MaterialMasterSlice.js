import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";
import { ERROR_MESS, MATERIAL_MASTER_CREATE, MATERIAL_MASTER_DELETE, MATERIAL_MASTER_UPDATE } from "../../constant";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";

const initialState = {
  materials: [],
  material: {},
  paginationData: null,
  error: null,
  status: null,
};

export const fetchAllMaterials = createAsyncThunk(
  "get/allMaterials",
  async (page) => {
    try {
      const response = await API.MaterialMaster.getAll(page);
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data?.message);
      return error.response.data;
    }
  }
);

export const addMaterialData = createAsyncThunk(
  "post/material",
  async (data) => {
    try {
      const response = await API.MaterialMaster.add(data);
      // // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,MATERIAL_MASTER_CREATE)
      return [];
    } catch (error) {
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const updateOneMaterialMaster = createAsyncThunk(
  "update/material",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.MaterialMaster.update(data.id, data.finalData);
      SHOW_SUCCESS(response.data.success,MATERIAL_MASTER_UPDATE)
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const deleteMaterialMaster = createAsyncThunk(
  "delete/material",
  async (data) => {
    try {
      const response = await API.MaterialMaster.delete(data);
      // // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,MATERIAL_MASTER_DELETE)
      return [];
    } catch (error) {
      // // // console.log(error.response.data.message);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const fetchOneMaterialMasterData = createAsyncThunk(
  "get/material",
  async (id) => {
    try {
      const response = await API.MaterialMaster.getOne(id);
      // // // console.log(response.data);
      return response.data.data;
    } catch (error) {
      // // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

const MaterialMasterSlice = createSlice({
  name: "MaterialMaster",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllMaterials.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllMaterials.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.materials = action.payload.materialMasters;
        // // // console.log(action.payload.materialMasters);
        delete action.payload.materialMasters;
        state.paginationData = action.payload;
      })
      .addCase(fetchAllMaterials.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.payload);
        state.error = action.payload;
      })
      .addCase(fetchOneMaterialMasterData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneMaterialMasterData.fulfilled, (state, action) => {
        const tempArry = action.payload.plants.map((p) => {
          return { value: p.id, label: p.plantName };
        });
        const tempPlantId = action.payload.plants.map((p) => {
          return p.id;
        });
        state.material = action.payload;
        state.material.plants = tempArry;
        state.material.plantIds = tempPlantId;
        state.status = "succeeded";
      })
      .addCase(fetchOneMaterialMasterData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(deleteMaterialMaster.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteMaterialMaster.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.materials = state.materials.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteMaterialMaster.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(addMaterialData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addMaterialData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.materials.push(action.payload);
      })
      .addCase(addMaterialData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(updateOneMaterialMaster.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOneMaterialMaster.fulfilled, (state, action) => {
        state.status = "succeeded";
        // // // console.log(action.payload);
        // state.materials.push(action.payload);
      })
      .addCase(updateOneMaterialMaster.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.payload);
        state.error = action.payload;
      });
  },
});

// export const { postAdded, reactionAdded } = MaterialMasterSlice.actions;

export default MaterialMasterSlice.reducer;
