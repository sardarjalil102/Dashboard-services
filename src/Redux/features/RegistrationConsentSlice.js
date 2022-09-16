import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";
import { REGISTRATION_UPDATE } from "../../constant";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";

// import TutorialDataService from "../services/tutorial.service";

const initialState = {
  consent: "",
  status: "",
};

export const updateOrCreate = createAsyncThunk(
  "registrationCensent",
  async (data) => {
    const res = await API.RegistrationConsent.updateAndCreate(data);
    SHOW_SUCCESS(res.data.success, REGISTRATION_UPDATE);
    return res.data.data;
  }
);

export const getRegistrationConsent = createAsyncThunk(
  "get/registrationCensent",
  async () => {
    const res = await API.RegistrationConsent.get();
    // SHOW_SUCCESS(res.data.success, "updated successfully!");
    return res.data;
  }
);

const RegistrationConsentSlice = createSlice({
  name: "AppUtils",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(updateOrCreate.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOrCreate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.consent = action.payload;
      })
      .addCase(updateOrCreate.rejected, (state, action) => {
        state.status = "failed";
        SHOW_ERROR();
      })
      .addCase(getRegistrationConsent.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRegistrationConsent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.consent = action.payload.data;
      })
      .addCase(getRegistrationConsent.rejected, (state, action) => {
        state.status = "failed";
        SHOW_ERROR();
      });
  },
});
// export const {} = RegistrationConsentSlice.actions;

const { reducer } = RegistrationConsentSlice;
export default reducer;
