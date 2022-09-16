import axios from "axios";
// const axios = require("axios");
import { getCompantId, getToken, verifyToken } from "../utils";
// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:1010/'
// axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
// export default axios;
class EAPI {
  constructor({ BaseUrl }) {
    this._BaseUrl = BaseUrl;
    if (verifyToken()) {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${getToken()}`,
        companyId: getCompantId(),
      };
    }
    // console.log("from service axios header : ", axios.defaults.headers.common);
  }

  settings = {
    companyId() {
      axios.defaults.headers.common = {
        companyId: getCompantId(),
        Authorization: `Bearer ${getToken()}`,
      };
      // console.log(
      //   "from service axios header : ",
      //   axios.defaults.headers.common
      // );
    },
    setToken() {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${getToken()}`,
      };
      // // console.log(
      //   "from service axios header : ",
      //   axios.defaults.headers.common
      // );
    },
  };

  print() {
    // // console.log(this._BaseUrl);
  }

  inspectionPlan = {
    getOne: (id) => axios.get(`${this._BaseUrl}/inspection-plans/${id}`),

    getAll: ({ key, value }) => {
      let params;
      if (key === "page") {
        // // console.log("key :", key);
        params = `?${key}=${value}`;
      } else {
        params = `?all=true`;
      }
      return axios.get(`${this._BaseUrl}/inspection-plans${params}`);
    },
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/inspection-plans`,
        data: formData,
      }),

    delete: (id) => axios.delete(`${this._BaseUrl}/inspection-plans/${id}`),
  };

  BuildArea = {
    getOne: (id) =>
      axios.get(`${this._BaseUrl}/build-area?buildMasterId=${id}`),
    getAll: (page) =>
      axios.get(`${this._BaseUrl}/build-area-master?page=${page}`),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/build-area`,
        data: formData,
      }),
    update: (id, toUpdate) =>
      axios.put(`${this._BaseUrl}/build-area/${id}`, toUpdate),

    addMaster: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/build-area-master`,
        data: formData,
      }),

    delete: (id) => axios.delete(`${this._BaseUrl}/build-area-master/${id}`),

    addBuildCondition: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/build-area-master`,
        data: formData,
      }),
  };

  step = {
    getOne: (id) => axios.get(`${this._BaseUrl}/steps/${id}`, {}),
    getAll: () => axios.get(`${this._BaseUrl}/steps`, {}),

    // update: (id, toUpdate, token) =>
    //   axios.put(`${this._BaseUrl}/vehicle/${id}`, toUpdate, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   }),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/steps`,
        data: formData,
      }),
    delete: (id) => axios.delete(`${this._BaseUrl}/steps/${id}`, {}),
  };

  QCPoint = {
    getOne: (id) => axios.get(`${this._BaseUrl}/qc-points/${id}`, {}),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/qc-points`,
        data: formData,
      }),
    delete: (id) => axios.delete(`${this._BaseUrl}/qc-points/${id}`, {}),

    addCheckCondition: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/qc-point/alert-condition`,
        data: formData,
      }),

    getAllCheckConditions: (qcId) =>
      axios.get(
        `${this._BaseUrl}/qc-point/alert-condition?qcPointId=${qcId}`,
        {}
      ),
  };

  workstations = {
    getOne: (id) => axios.get(`${this._BaseUrl}/workstations/${id}`, {}),
    getAll: () => axios.get(`${this._BaseUrl}/workstations`, {}),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/workstations`,
        data: formData,
      }),
    delete: (id) => axios.delete(`${this._BaseUrl}/workstations/${id}`, {}),

    update: (id, toUpdate) =>
      // // // console.log("from api lib :", toUpdate);
      axios.put(`${this._BaseUrl}/workstations/${id}`, toUpdate, {}),
  };

  MaterialMaster = {
    getOne: (id) => axios.get(`${this._BaseUrl}/material-masters/${id}`, {}),
    getAll: (page) =>
      axios.get(`${this._BaseUrl}/material-masters?page=${page}`, {}),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/material-masters`,
        data: formData,
      }),
    delete: (id) => axios.delete(`${this._BaseUrl}/material-masters/${id}`, {}),
    update: (id, toUpdate) =>
      // // // console.log("from api lib :", toUpdate);
      axios.put(`${this._BaseUrl}/material-masters/${id}`, toUpdate, {}),
  };

  Stripe = {
    getIntent: () => axios.get(`${this._BaseUrl}/stripe/setup-intent`, {}),

    createStripeCharge: (formdata) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/stripe/charge`,
        data: formdata,
      }),

    createCompany: (formdata) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/company/create`,
        data: formdata,
      }),
  };

  plant = {
    getOne: (id) => axios.get(`${this._BaseUrl}/plants/${id}`, {}),
    getAll: (page) => axios.get(`${this._BaseUrl}/plants?page=${page}`, {}),

    update: (id, toUpdate, token) =>
      axios.put(`${this._BaseUrl}/plants/${id}`, toUpdate, {}),
    add: (formData, token) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/plants`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization: `Bearer ${key.token}`,
          // companyId: key.compnyId,
        },
      }),
    delete: (id) => axios.delete(`${this._BaseUrl}/plants/${id}`, {}),
  };

  subscriptionPlan = {
    getOne: (id) => axios.get(`${this._BaseUrl}/subscriptions/${id}`, {}),
    getAll: (page) =>
      axios.get(`${this._BaseUrl}/subscriptions?page=${page}`, {}),

    update: (id, toUpdate, token) =>
      axios.put(`${this._BaseUrl}/subscriptions/${id}`, toUpdate, {
        // headers: { Authorization: `Bearer ${token}` },
      }),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/subscriptions`,
        data: formData,
      }),

    delete: (id) => axios.delete(`${this._BaseUrl}/subscriptions/${id}`, {}),
  };

  file = {
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/file`,
        data: formData,
      }),
    upload: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/file`,
        data: formData,
      }),
  };

  companyPlans = {
    getOne: (id) => axios.get(`${this._BaseUrl}/plans/${id}`, {}),
    getAll: (page) => axios.get(`${this._BaseUrl}/plans?page=${page}`, {}),

    update: (id, toUpdate, token) =>
      axios.put(`${this._BaseUrl}/plans/${id}`, toUpdate, {}),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/plans`,
        data: formData,
      }),

    delete: (id) => axios.delete(`${this._BaseUrl}/plans/${id}`, {}),
  };

  MaterialNoConfig = {
    getOne: (id) => axios.get(`${this._BaseUrl}/material-no-configs/${id}`, {}),
    getAll: (page) =>
      axios.get(`${this._BaseUrl}/material-no-configs?page=${page}`, {}),

    update: (id, toUpdate) =>
      axios.put(`${this._BaseUrl}/material-no-configs/${id}`, toUpdate, {}),

    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/material-no-configs`,
        data: formData,
      }),

    delete: (id) =>
      axios.delete(`${this._BaseUrl}/material-no-configs/${id}`, {}),
  };

  InspectionLot = {
    getOne: (id) => axios.get(`${this._BaseUrl}/inspection-lots/${id}`, {}),
    getAll: (page) =>
      axios.get(`${this._BaseUrl}/inspection-lots?page=${page}`, {}),

    update: (id, toUpdate) =>
      axios.put(`${this._BaseUrl}/inspection-lots/${id}`, toUpdate, {}),

    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/inspection-lots`,
        data: formData,
      }),

    delete: (id) => axios.delete(`${this._BaseUrl}/inspection-lots/${id}`, {}),
  };

  Roles = {
    getOne: (id) => axios.get(`${this._BaseUrl}/role/${id}`, {}),
    getAll: (page) => axios.get(`${this._BaseUrl}/role`, {}),

    update: (id, toUpdate) =>
      axios.put(
        `${this._BaseUrl}/role/${id}`,
        toUpdate
        // {
        //   headers: { Authorization: `Bearer ${key.token}`, companyId: 100000 },
        // }
      ),

    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/role`,
        data: formData,
      }),

    delete: (id) => axios.delete(`${this._BaseUrl}/role/${id}`, {}),
  };

  Users = {
    getOne: (id) => axios.get(`${this._BaseUrl}/users/${id}`, {}),
    getAll: (page) => axios.get(`${this._BaseUrl}/users?page=${page}`, {}),

    update: (id, toUpdate) =>
      axios.put(`${this._BaseUrl}/users/${id}`, toUpdate, {}),

    passwordUpdate: (Id, toUpdate) =>
      axios.put(`${this._BaseUrl}/users/${Id}/password`, toUpdate),

    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/users`,
        data: formData,
      }),

    delete: (id) => axios.delete(`${this._BaseUrl}/users/${id}`, {}),
  };

  Permissions = {
    getAll: () => axios.get(`${this._BaseUrl}/permissions`),

    getAllAssigned: (id) => axios.get(`${this._BaseUrl}/${id}/permissions`),

    assignNew: (id, formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/${id}/assign-permissions`,
        data: formData,
      }),
  };
  auth = {
    login: (data) => axios.post(`${this._BaseUrl}/login`, data),

    user: (token) => {
      // // console.log("from api service :", token);
      return axios.get(`${this._BaseUrl}/auth-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    // forgotPassword: (data) => axios.post(`${this._BaseUrl}/auth/forgot`, data),
    // resetpasswod: (data) =>
    //   axios.post(`${this._BaseUrl}/auth/resetpasswod`, data),
  };

  CompanyManagement = {
    getOne: (id) => axios.get(`${this._BaseUrl}/companies/${id}`),
    getAll: (page) => axios.get(`${this._BaseUrl}/companies?page=${page}`, {}),

    update: (id, toUpdate) =>
      axios.put(`${this._BaseUrl}/companies/${id}`, toUpdate, {}),

    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/companies`,
        data: formData,
      }),

    delete: (id) => axios.delete(`${this._BaseUrl}/companies/${id}`, {}),
  };

  rejectedReasons = {
    getOne: (id) => axios.get(`${this._BaseUrl}/rejected-reasons/${id}`, {}),
    getAll: () => axios.get(`${this._BaseUrl}/rejected-reasons`, {}),

    update: (id, toUpdate) =>
      axios.put(`${this._BaseUrl}/rejected-reasons/${id}`, toUpdate, {}),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/rejected-reasons`,
        data: formData,
      }),
    delete: (id) => axios.delete(`${this._BaseUrl}/rejected-reasons/${id}`, {}),
  };

  Groups = {
    getOne: (id) => axios.get(`${this._BaseUrl}/groups/${id}`, {}),
    getAll: () => axios.get(`${this._BaseUrl}/groups`, {}),

    update: (id, toUpdate) =>
      axios.put(`${this._BaseUrl}/groups/${id}`, toUpdate, {}),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/groups`,
        data: formData,
      }),
    delete: (id) => axios.delete(`${this._BaseUrl}/groups/${id}`, {}),
  };

  WorkFlowGroup = {
    add: (data) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/workflow-approval-group`,
        data: data,
      }),
    getAll: () =>
      axios({
        method: "get",
        url: `${this._BaseUrl}/workflow-approval-group`,
      }),
  };

  form = {
    getAllForms: () => axios.get(`${this._BaseUrl}/workflow-form-builders`, {}),

    delete: (id) => {
      // console.log("id is", id);
      return axios.delete(`${this._BaseUrl}/workflow-form-builders/${id}`, {});
    },

    add: (data) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/workflow-form-builders`,
        data: data,
      }),
    getAll: () =>
      axios({
        method: "get",
        url: `${this._BaseUrl}/workflow-approval-group`,
      }),
    getEnablesForms: () =>
      axios({
        method: "get",
        url: `${this._BaseUrl}/enabled-forms`,
      }),

    getFixForms: () =>
      axios({
        method: "get",
        url: `${this._BaseUrl}/fix-forms`,
      }),

    getEnablesFormsDetails: (id) => {
      let url = `${this._BaseUrl}/enabled-forms/detail/${id}`;
      // console.log("hahahha ---  ", url);
      return axios({
        method: "get",
        url,
      });
    },

    AddFormFields: (data) => {
      let url = `${this._BaseUrl}/workflow-form-builder-fields`;
      return axios({
        method: "post",
        url,
        data: data,
      });
    },
    getAllFormFields: (id) => {
      let url = `${this._BaseUrl}/workflow-form-builder-fields/?${id}&workflowFormBuilderId=${id}`;
      return axios({
        method: "get",
        url,
      });
    },

    deleteFormField: (id) => {
      let url = `${this._BaseUrl}/workflow-form-builder-fields/${id}`;
      // console.log("");
      return axios({
        method: "delete",
        url,
      });
    },

    updateFormField: (data, id) => {
      let url = `${this._BaseUrl}/workflow-form-builder-fields/${id}`;
      // console.log("");
      return axios({
        method: "put",
        url,
        data: data,
      });
    },

    updateForm: (data, id) => {
      let url = `${this._BaseUrl}/workflow-form-builders/${id}`;
      // console.log("");
      return axios({
        method: "put",
        url,
        data: data,
      });
    },

    workFlowApprovalForm: (data) => {
      let url = `${this._BaseUrl}/workflow-approval`;
      return axios({
        method: "post",
        url,
        data: data,
      });
    },

    saveEnableForm: (data) => {
      let url = `${this._BaseUrl}/workflow-save-form`;
      return axios({
        method: "post",
        url,
        data: data,
      });
    },
  };

  report = {
    getAllFmeaReports: () =>
      axios({
        method: "get",
        url: `${this._BaseUrl}/reports/fema/mm6a`,
      }),
    updateFmeaReports: (id) =>
      axios({
        method: "put",
        url: `${this._BaseUrl}/reports/fema/${id}`,
      }),
  };

  Measurement = {
    getOne: (id) => axios.get(`${this._BaseUrl}/measurement-units/${id}`, {}),
    getAll: () => axios.get(`${this._BaseUrl}/measurement-units`, {}),

    update: (id, toUpdate) =>
      axios.put(`${this._BaseUrl}/measurement-units/${id}`, toUpdate, {}),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/measurement-units`,
        data: formData,
      }),
    delete: (id) =>
      axios.delete(`${this._BaseUrl}/measurement-units/${id}`, {}),
  };

  SensorType = {
    getOne: (id) => axios.get(`${this._BaseUrl}/sensor-types/${id}`, {}),
    getAll: () => axios.get(`${this._BaseUrl}/sensor-types`, {}),

    update: (id, toUpdate) =>
      axios.put(`${this._BaseUrl}/sensor-types/${id}`, toUpdate, {}),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/sensor-types`,
        data: formData,
      }),
    delete: (id) => axios.delete(`${this._BaseUrl}/sensor-types/${id}`, {}),
  };

  Sensor = {
    getOne: (id) => axios.get(`${this._BaseUrl}/sensors/${id}`, {}),
    getAll: () => axios.get(`${this._BaseUrl}/sensors`, {}),

    update: (id, toUpdate) =>
      axios.put(`${this._BaseUrl}/sensors/${id}`, toUpdate, {}),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/sensors`,
        data: formData,
      }),
    delete: (id) => axios.delete(`${this._BaseUrl}/sensors/${id}`, {}),
  };

  WorkflowGroup = {
    getOne: (id) =>
      axios.get(`${this._BaseUrl}/workflow-approval-group/${id}`, {}),
    getAll: () => axios.get(`${this._BaseUrl}/workflow-approval-group`, {}),

    update: (id, toUpdate) =>
      axios.put(`${this._BaseUrl}/workflow-approval-group/${id}`, toUpdate, {}),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/workflow-approval-group`,
        data: formData,
      }),
  };

  WorkflowApproval = {
    getOne: (id, userId) =>
      axios.get(`${this._BaseUrl}/workflow-approval/${id}?.${userId}`, {}),
    getAll: (userId) =>
      axios.get(`${this._BaseUrl}/workflow-approval?.${userId}`, {}),

    update: (id, toUpdate) =>
      axios.put(
        `${this._BaseUrl}/update-workflow-approval-status/${id}`,
        toUpdate,
        {}
      ),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/workflow-approval`,
        data: formData,
      }),
  };

  WorkflowBuilder = {
    getOne: (id, userId) =>
      axios.get(`${this._BaseUrl}/workflow-form-builders/${id}`, {}),
    getAll: (userId) =>
      axios.get(`${this._BaseUrl}/workflow-form-builders`, {}),

    update: (id, toUpdate) =>
      axios.put(
        `${this._BaseUrl}/update-workflow-approval-status/${id}`,
        toUpdate,
        {}
      ),
    add: (formData) =>
      axios({
        method: "post",
        url: `${this._BaseUrl}/workflow-form-builders`,
        data: formData,
      }),
    delete: (id) =>
      axios.delete(`${this._BaseUrl}/workflow-form-builders/${id}`, {}),
  };
  RegistrationConsent = {
    updateAndCreate: (toUpdate) =>
      axios.post(`${this._BaseUrl}/registration-consent`, toUpdate),
    get: () => axios.get(`${this._BaseUrl}/registration-consent`),
  };
  catogries = {
    getAll: (userId) =>
      axios.get(`${this._BaseUrl}/workflow-approval-category`, {}),
  };

  AdminLogs = {
    getAll: (id) => axios.get(`${this._BaseUrl}/login-logs?userId=${id}`),
  };

  generalForm = {
    getAllForms: (page) =>
      axios.get(`${this._BaseUrl}/general-form?page=${page}`),
    getAllFormsFilledBy: (id) =>
      axios.get(`${this._BaseUrl}/general-form/${id}`),
    getFormDetail: (id) =>
      axios.get(`${this._BaseUrl}/general-form/detail/${id}`),
  };

  inspectionLotReport = {
    getInspectionLotReport: () =>
      axios.get(`${this._BaseUrl}/reports/inspection-lot`),
    getStepsReport: (id, flag) =>
      axios.get(
        `${this._BaseUrl}/reports/inspection-lot/${id}/event/${flag}/steps`
      ),
    getQcPointReport: (id, stepId) =>
      axios.get(
        `${this._BaseUrl}/reports/inspection-lot/${id}/step/${stepId}/qc-points`
      ),
  };

  graphs = {
    histogram: {
      qualitative: (formData) =>
        axios({
          method: "post",
          url: `${this._BaseUrl}/graph/qualitative`,
          data: formData,
        }),
    },
    steps: (id) => axios.get(`${this._BaseUrl}/steps/inspection-plan/${id}`),
    qcPoints: (id, boo) =>
      axios.get(`${this._BaseUrl}/qc-points/step/${id}?quantitative=${boo}`),
    inspectors: () => axios.get(`${this._BaseUrl}/user/inspector`),
  };
}

export default EAPI;

// drive = {
//   getAll: () => axios.get(`${this._BaseUrl}/drive`),
//   add: (Data, token) =>
//     axios.post(`${this._BaseUrl}/drive`, Data, {
//       headers: { Authorization: `Bearer ${token}` },
//     }),
//   delete: (id, token) =>
//     axios.delete(`${this._BaseUrl}/drive/${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     }),
// };

// auth = {
//   login: (data) => axios.post(`${this._BaseUrl}/auth/login`, data),
//   register: (data) => axios.post(`${this._BaseUrl}/auth/register`, data),
//   forgotPassword: (data) => axios.post(`${this._BaseUrl}/auth/forgot`, data),
//   resetpasswod: (data) =>
//     axios.post(`${this._BaseUrl}/auth/resetpasswod`, data),
// };

// state = {
//   getAll: (token) =>
//     axios.get(`${this._BaseUrl}/stat`, {
//       headers: { Authorization: `Bearer ${token}` },
//     }),
// };