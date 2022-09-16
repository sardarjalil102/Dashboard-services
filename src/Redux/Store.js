import { configureStore } from "@reduxjs/toolkit";
import inspectionPlanReducer from "./features/InspectionPlanSlice";
import BuildAreaReducer from "./features/BuildAreaSlice";
import stepSliceReducer from "./features/StepSlice";
import userPermissionReducer from "./features/PermissionsSlice";
import QCPointSliceReducer from "./features/QCPointSlice";
import AppUtilsReducer from "./features/AppUtilsSlice";
import plantReducer from "./features/PlantSlice";
import MaterialMasterReducer from "./features/MaterialMasterSlice";
import WorkStationReducer from "./features/WorkStaionSlice";
import AuthReducer from "./features/AuthSlice";
import SubscriptionPlanReducer from "./features/SubscriptionPlanSlice";
import PlanReducer from "./features/PlansSlice";
import RoleSlice from "./features/RoleSlice";
import MaterialNoConfigSlice from "./features/MaterialNoConfigSlice";
import InspectionLotSlice from "./features/InspectionLotSlice";
import UsersSlice from "./features/UsersSlice";
import StripeSlice from "./features/StripeSlice";
import CompanyManagementSlice from "./features/CompanyManagementSlice";
import RejectedReasonsSlice from "./features/RejectedReasonsSlice";
import GroupSlice from "./features/GroupSlice";
import MeasurementUnitSlice from "./features/MeasurementUnitSlice";
import SensorTypeSlice from "./features/SensorTypeSlice";
import SensorSlice from "./features/SensorSlice";
import WorkFlowFormBuilderSlice from "./features/WorkFlowFormBuilderSlice";
import RegistrationConsentSlice from "./features/RegistrationConsentSlice";
import WorkFlowGroupSlice from "./features/WorkFlowGroupSlice";
import FormSlice from "./features/FormSlice";
import CategorySlice from "./features/CategorySlice";
import AdminLogsSlice from "./features/AdminLogsSlice";
import GeneralFormSlice from "./features/GeneralFormSlice";
import InspectionLotReportSlice from "./features/InspectionLotReportSlice";
import GraphsSlice from "./features/GraphsSlice";

const store = configureStore({
  reducer: {
    InspectionPlan: inspectionPlanReducer,
    BuildArea: BuildAreaReducer,
    UserPermission: userPermissionReducer,
    Step: stepSliceReducer,
    QCPoint: QCPointSliceReducer,
    Plant: plantReducer,
    MaterialMaster: MaterialMasterReducer,
    WorkStation: WorkStationReducer,
    AppUtils: AppUtilsReducer,
    Auth: AuthReducer,
    SubscriptionPlan: SubscriptionPlanReducer,
    Plan: PlanReducer,
    userRoles: RoleSlice,
    MaterialNoConfig: MaterialNoConfigSlice,
    InspectionLot: InspectionLotSlice,
    Users: UsersSlice,
    Stripe: StripeSlice,
    CompanyManagement: CompanyManagementSlice,
    RejectedReasons: RejectedReasonsSlice,
    Groups: GroupSlice,
    Measurement: MeasurementUnitSlice,
    SensorType: SensorTypeSlice,
    Sensors: SensorSlice,
    WorkBuilder: WorkFlowFormBuilderSlice,
    WorkFlowGroup: WorkFlowGroupSlice,
    Form: FormSlice,
    catogries: CategorySlice,
    RegistrationConsent: RegistrationConsentSlice,
    AdminLogs: AdminLogsSlice,
    GeneralForm: GeneralFormSlice,
    InspectionLotReport: InspectionLotReportSlice,
    Graphs: GraphsSlice,
  },
  devTools: process.env.NODE_ENV === "production" ? false : true,
});

export default store;
