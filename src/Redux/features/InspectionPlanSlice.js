import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { API, key } from "../../config";
import _ from "lodash";
import { toast } from "react-toastify";
import { SHOW_ERROR, SHOW_SUCCESS } from "../../utils/toastMessages";
import { ERROR_MESS, INSPECTION_PLAN_CREATE, INSPECTION_PLAN_DELETE, INSPECTION_PLAN_UPDATE } from "../../constant";

const initialState = {
  plans: [],
  plan: {},
  treeStuff: { currentNode: {}, tree: [] },
  error: null,
  actionType: null,
  status: null,
  paginationData: null,
};

export const fetchInspectionPlans = createAsyncThunk(
  "get/Plans",
  async (page) => {
    try {
      const response = await API.inspectionPlan.getAll({
        key: page ? "page" : "",
        value: page,
      });
      // console.log("inspection plan data", response);

      return response.data.data;
    } catch (error) {
      // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

export const addInspectoinPlanData = createAsyncThunk(
  "post/Plan",
  async (data) => {
    try {
      const response = await API.inspectionPlan.add(data);
      // // // console.log(response.data);
      SHOW_SUCCESS(response.data.success,INSPECTION_PLAN_CREATE)

      return [];
    } catch (error) {
      // // // console.log(error.response.data.message);
      SHOW_ERROR(error, ERROR_MESS)
      return [];
    }
  }
);

export const updateOneInspectionplan = createAsyncThunk(
  "update/plan",
  async (data) => {
    try {
      // // // console.log("from slice :", data);
      const response = await API.inspectionPlan.update(data.id, data.finalData);
      SHOW_SUCCESS(response.data.success,INSPECTION_PLAN_UPDATE)
      return [];
    } catch (error) {
      // // // console.log("FROM SLICE API ERROR", error);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);

export const deleteInspectoinPlan = createAsyncThunk(
  "delete/Plan",
  async (data) => {
    try {
      const response = await API.inspectionPlan.delete(data);
      // // // console.log(response.data);
SHOW_SUCCESS(response.data.success,INSPECTION_PLAN_DELETE)

      return [];
    } catch (error) {
      // // // console.log(error.response.data.message);
      SHOW_ERROR(error,ERROR_MESS)
      return [];
    }
  }
);
export const fetchOneInspectoinPlanData = createAsyncThunk(
  "get/Plan",
  async (id) => {
    try {
      const response = await API.inspectionPlan.getOne(id);
      // // // console.log(response.data);

      return response.data.data;
    } catch (error) {
      // // console.log(error.response.data.message);
      return error.response.data;
    }
  }
);

const inspectionPlanSlice = createSlice({
  name: "Inpspection Plan",
  initialState,
  reducers: {
    updateTree: {
      reducer(state, action) {
        var TREE = _.cloneDeep(current(state.treeStuff.tree));

        if (action.payload.data.type === "qc") {
          // console.log("main tree before ", TREE);
          TREE[0].children.forEach((node) => {
            if (node.id === action.payload.stepId) {
              // console.log("node", node.children);
              node.children = [...node.children, action.payload.data];
            }
          });
        }

        if (action.payload.data.type === "step") {
          // console.log("main tree before ", TREE);
          TREE[0].children = [...TREE[0].children, action.payload.data];
        }

        // console.log("main tree after:", TREE);
        state.treeStuff.tree = TREE;
      },
    },
    updateQCPointArry: {
      reducer(state, action) {
        var CURR_PLAN = _.cloneDeep(current(state.plan.steps));

        // console.log("plan  before ", CURR_PLAN);
        CURR_PLAN.forEach((node) => {
          if (node.id === action.payload.stepId) {
            // console.log("QC point", node.qcPoints);
            node.qcPoints = [...node.qcPoints, action.payload.data];
            // // console.log(new_data);
          }
        });

        // // console.log("comming data step id :", action.payload.stepId);
        // // console.log("comming data treeData :", action.payload.data);
        // console.log("plan  before after:", CURR_PLAN);
        state.plan.steps = CURR_PLAN;
      },
    },
    updateStepArry: {
      reducer(state, action) {
        var CURR_PLAN = _.cloneDeep(current(state.plan.steps));
        // console.log("plan  before ", CURR_PLAN);

        CURR_PLAN = [...CURR_PLAN, action.payload.data];

        // console.log("plan  before after:", CURR_PLAN);
        state.plan.steps = CURR_PLAN;
      },
    },
    updateActionType: {
      reducer(state, action) {
        const OPTIONS = key.tree.ACTION_TYPES,
          OPTION = action.payload;

        const keyflage = OPTIONS.includes(OPTION);

        if (keyflage) {
          if (OPTION === "e") {
            state.actionType = OPTION;
          }
          if (OPTION === "a") {
            state.actionType = OPTION;
          }
        }
        // SHOW_ERROR(!keyflage || OPTION !== null, "Invalid Action Type");
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchInspectionPlans.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchInspectionPlans.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.inspectionPlans) {
          state.plans = action.payload.inspectionPlans;
          delete action.payload.inspectionPlans;
          state.paginationData = action.payload;
        } else {
          state.plans = action.payload;
        }
      })
      .addCase(fetchInspectionPlans.rejected, (state, action) => {
        state.status = "failed";
        // console.log(action.error);
        state.error = action.payload;
      })
      // post data reduces
      .addCase(addInspectoinPlanData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addInspectoinPlanData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload);
        // state.plans = action.payload.inspectionPlans;
      })
      .addCase(addInspectoinPlanData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // get plan data reduces
      .addCase(fetchOneInspectoinPlanData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneInspectoinPlanData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions

        // Add any fetched posts to the array
        // // // console.log(action.payload);
        state.treeStuff.tree = [
          {
            id: action.payload?.id,
            label: action.payload?.title,
            children: [],
          },
        ];
        let tempChild = [];
        action.payload.steps.forEach((step) => {
          let tempqc = [];
          if (step.qcPoints.length > 0) {
            step.qcPoints.forEach((qc) => {
              tempqc.push({ id: qc.id, label: qc.title, type: "qc" });
            });
          }

          tempChild.push({
            id: step.id,
            label: step.title,
            children: tempqc,
            type: "step",
          });
        });

        // // // console.log(tempChild);
        state.treeStuff.tree[0].children = tempChild;
        state.plan = action.payload;
      })
      .addCase(fetchOneInspectoinPlanData.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      })
      // delete plan data reduces
      .addCase(deleteInspectoinPlan.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteInspectoinPlan.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.plans =
        // const tempPLan = JSON.parse(JSON.stringify(state.plans))
        // // console.log("temp plan before :",JSON.parse(JSON.stringify(tempPLan)));
        // const aftertemp = tempPLan
        // // console.log("temp plan after :",aftertemp);

        state.plans = state.plans.filter((item) => item.id !== action.payload);
        // // console.log(JSON.parse(JSON.stringify(state.plans)));
      })
      .addCase(deleteInspectoinPlan.rejected, (state, action) => {
        state.status = "failed";
        // // // console.log(action.error);
        state.error = action.payload.message;
      });
  },
});

// export const selectAllPlans = (state) => state.plans;
// export const getPostsStatus = (state) => state.status;
// export const getPostsError = (state) => state.error;

export const {
  updateTree,
  addQCPointToTree,
  addStepToTree,
  updateQCPointArry,
  updateStepArry,
  updateActionType,
} = inspectionPlanSlice.actions;

export default inspectionPlanSlice.reducer;
