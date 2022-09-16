import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../config";
import { useNavigate } from "react-router-dom";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";
import { ERROR_MESS, FIXED_FORM_FIELD_CREATE } from "../../constant";

const initialState = {
  allForms: [],
  singleForm: "",
  fixedForms: [],
  Users: [],
  enableForms: [],
  enableFormDetail: [],
  formFields: [],
  paginationData: {},
  error: null,
  status: null,
  navFlag: "",
};

export const getAllForms = createAsyncThunk(
  "get/workflow-form-builders",
  async () => {
    try {
      const response = await API.form.getAllForms();
      // console.log("getAll Form response is", response);
      return response.data.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const deleteForm = createAsyncThunk(
  "delete/workflow-form-builders",
  async ({ id, onResponse }) => {
    // console.log('id is',id)
    try {
      const response = await API.form.delete(id);
      // console.log(response.data);
      if (response.data.success) {
        toast.success("Form Created Successfully!", {
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

      // onResponse?.(error.response.data);
      return error.response.data;
    }
  }
);

export const createForm = createAsyncThunk(
  "post/workflow-form-builders",
  async ({ data, onResponse }) => {
    try {
      const response = await API.form.add(data);
      // console.log(response.data);
      if (response.data.success) {
        toast.success("Form Created Successfully!", {
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

      onResponse?.(error.response.data);
      return error.response.data;
    }
  }
);

export const getAllFormFields = createAsyncThunk(
  "get/workflow-form-builder-fields/",
  async (data) => {
    try {
      const response = await API.form.getAllFormFields(data);
      // onResponse?.(response.data.data);
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
      // onResponse?.(error.response.data);
      return error.response.data;
    }
  }
);

export const createFormFields = createAsyncThunk(
  "post/workflow-form-builder-fields",
  async ({ data, onResponse }) => {
    // console.log("data is", data);
    try {
      const response = await API.form.AddFormFields(data);
      // console.log(response.data);
      if (response.data.success) {
        toast.success("Field Created Successfully!", {
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
      onResponse?.(error.response.data);
      return error.response.data;
    }
  }
);

export const deleteFormField = createAsyncThunk("delete/workflow-form-builder-fields",
  async ({ id, onResponse }) => {
    try {
      const response = await API.form.deleteFormField(id);
      // console.log(response.data);
      if (response.data.success) {
        toast.success("Field Deleted Successfully!", {
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
      onResponse?.(error.response.data);
      return error.response.data;
    }
  }
);

export const updateFormField = createAsyncThunk(
  "delete/workflow-form-builder-fields",
  async ({ data, onResponse, id }) => {
    try {
      const response = await API.form.updateFormField(data, id);
      // console.log(response.data);
      if (response.data.success) {
        toast.success("Field Updated Successfully!", {
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
      onResponse?.(error.response.data);
      return error.response.data;
    }
  }
);

export const getEnablesForms = createAsyncThunk(
  "get/enabled-forms",
  async () => {
    try {
      const response = await API.form.getEnablesForms();
      // // // console.log(response);
      // // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      // // console.log(error.response.message);
      return error.response.data;
    }
  }
);

export const updateUserForm = createAsyncThunk(
  "put/workflow-form-builders",
  async ({ data, onResponse, id }) => {
    try {
      const response = await API.form.updateForm(data, id);
      if (response.data.success) {
        toast.success("Form Updated Successfully!", {
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

export const getFixForms = createAsyncThunk("get/fix-forms", async () => {
  try {
    const response = await API.form.getFixForms();
    // // // console.log(response);
    // // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    // // console.log(error.response.message);
    return error.response.data;
  }
});

export const getEnablesFormDetail = createAsyncThunk(
  `get/enabled-forms/detail/`,
  async (id) => {
    try {
      const response = API.form.getEnablesFormsDetails(id).then((res) => {
        return res.data.data;
      });
      return response;
      // console.log("id is", response);
    } catch (error) {
      // // console.log(error.response.message);
      return error.response.data;
    }
  }
);

export const createWorkflowEnableForm = createAsyncThunk(
  `post/workflow-approval`,
  async (id) => {
    try {
      const response = API.form.getEnablesFormsDetails(id).then((res) => {
        return res.data.data;
      });
      return response;
      // console.log("id is", response);
    } catch (error) {
      // // console.log(error.response.message);
      return error.response.data;
    }
  }
);

export const saveWorkflowEnableForm = createAsyncThunk(
  `post/workflow-approval`,
  async ({data,onResponse}) => {
    console.log("dat",data)
    try {
      const response = await API.form.workFlowApprovalForm(data);
      // console.log(response.data);
      SHOW_SUCCESS(response.data.success,FIXED_FORM_FIELD_CREATE)
      onResponse?.(response.data.data);
      return [];
    } catch (error) {
      // // console.log(error.response.data.message.error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const saveEnableForm = createAsyncThunk(
  `post/workflow-save-form`,
  async (data) => {
    try {
      const response = await API.form.saveEnableForm(data);
      // console.log(response.data);
      if (response.data.success) {
        toast.success("Saved Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      // onResponse?.(response.data.data);
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
  }
);
const FormSlice = createSlice({
  name: "Group",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createForm.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createForm.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(createForm.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(getEnablesForms.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getEnablesForms.fulfilled, (state, action) => {
        state.enableForms = action.payload;
        state.status = "succeeded";
      })
      .addCase(getEnablesForms.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(getEnablesFormDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getEnablesFormDetail.fulfilled, (state, action) => {
        state.enableFormDetail = action.payload;
        state.status = "succeeded";
      })
      .addCase(getEnablesFormDetail.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(createFormFields.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createFormFields.fulfilled, (state, action) => {
        state.enableFormDetail = action.payload;
        state.status = "succeeded";
      })
      .addCase(createFormFields.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(getAllFormFields.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllFormFields.fulfilled, (state, action) => {
        state.formFields = action.payload;
        state.status = "succeeded";
      })
      .addCase(getAllFormFields.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(deleteFormField.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteFormField.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteFormField.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload?.message;
      })
      .addCase(getAllForms.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllForms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allForms = action.payload;
        state.paginationData = action.payload;
      })
      .addCase(getAllForms.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(deleteForm.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteForm.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteForm.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(saveWorkflowEnableForm.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(saveWorkflowEnableForm.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(saveWorkflowEnableForm.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })

      .addCase(getFixForms.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getFixForms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fixedForms = action.payload;
      })
      .addCase(getFixForms.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(saveEnableForm.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(saveEnableForm.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fixedForms = action.payload;
      })
      .addCase(saveEnableForm.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      .addCase(updateUserForm.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateUserForm.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updateUserForm.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      });
  },
});


export default FormSlice.reducer;
