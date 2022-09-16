import { lazy } from "react";

import MainLyout from "../components/layout/MainLyout";
import ProtectRoute from "../components/common/ProtectRoute";

const AuthPage = lazy(() => import("../components/Auth/Auth"));

const ViewMaterialPage = lazy(() =>
  import("../components/Pages/company/Material/ViewMaterial")
);
const InspectionPlanPage = lazy(() =>
  import("../components/Pages/company/InspectionPlan/InspectionPlan")
);

const ViewCompanyPage = lazy(() =>
  import("../components/Pages/saas/CompanyManagement/ViewComapny")
);

const ViewInspectionLotPage = lazy(() =>
  import("../components/Pages/company/InspectionLot/ViewInspectionLot")
);

const ViewWorkStationPage = lazy(() =>
  import("../components/Pages/company/Workstation/ViewWorkStation")
);

const SensorTypePage = lazy(() =>
  import("../components/Pages/company/Sensors/SensorType/SensorType")
);

const CreateSensorTypePage = lazy(() =>
  import("../components/Pages/company/Sensors/SensorType/CreateSensorType")
);

const ViewSensorTypePage = lazy(() =>
  import("../components/Pages/company/Sensors/SensorType/ViewSensorType")
);

const ViewSensorPage = lazy(() =>
  import("../components/Pages/company/Sensors/ViewSensor")
);

const DashboardPage = lazy(() => import("../components/Pages/Playground"));

const NoMatchPage = lazy(() => import("../components/common/Error404"));
const ForbPage = lazy(() => import("../components/common/Error403"));
const UnAuthPage = lazy(() => import("../components/common/Error401"));

const ForgotPasswordPage = lazy(() =>
  import("../components/Auth/ForgotPassword")
);
// const RegisterPage = lazy(() => import("../components/Auth/Register"));
const CompanyManagmentPage = lazy(() =>
  import("../components/Pages/saas/CompanyManagement/CompanyManagment")
);
const CreateComapnyPage = lazy(() =>
  import("../components/Pages/saas/CompanyManagement/CreateComapny")
);
const CreateSubscriptionPage = lazy(() =>
  import("../components/Pages/saas/subscription/CreateSubscription")
);
const EditSubscriptionPage = lazy(() =>
  import("../components/Pages/saas/subscription/EditSubscription")
);
const AdminLogPage = lazy(() =>
  import("../components/Pages/company/adminLogs/AdminLog")
);

const ManageSubscriptionPage = lazy(() =>
  import("../components/Pages/saas/subscription/ManageSubscription")
);
const TransactionPage = lazy(() =>
  import("../components/Pages/saas/transaction/Transaction")
);
const ConsentPagePage = lazy(() =>
  import("../components/Pages/saas/registrationConsent/Consent")
);
const AccountInfoPage = lazy(() =>
  import("../components/Pages/company/AccountInfo")
);
const WorkistationPage = lazy(() =>
  import("../components/Pages/company/Workstation/Workistation")
);
const CreateWorkstationPage = lazy(() =>
  import("../components/Pages/company/Workstation/CreateWorkstation")
);
const PlantPage = lazy(() => import("../components/Pages/company/Plant/Plant"));

const GraphsPage = lazy(() =>
  import("../components/Pages/company/reports/graphs")
);

const CreatePlantPage = lazy(() =>
  import("../components/Pages/company/Plant/CreatePlant")
);
const UpdatePlantPage = lazy(() =>
  import("../components/Pages/company/Plant/UpdatePlant")
);

const UserPage = lazy(() => import("../components/Pages/company/User/User"));
const CreateUserPage = lazy(() =>
  import("../components/Pages/company/User/CreateUser")
);
const ViewUserPage = lazy(() =>
  import("../components/Pages/company/User/ViewUser")
);
const MaterialNoConfigPage = lazy(() =>
  import("../components/Pages/company/MaterialNoConfig/MaterialNoConfig")
);
const NoConfigCreatePage = lazy(() =>
  import("../components/Pages/company/MaterialNoConfig/NoConfigCreate")
);
const NoConfigUpdatePage = lazy(() =>
  import("../components/Pages/company/MaterialNoConfig/NoConfigUpdate")
);
const RoleManagmentPage = lazy(() =>
  import("../components/Pages/company/RoleManagment/RoleManagment")
);
const CreateRolePage = lazy(() =>
  import("../components/Pages/company/RoleManagment/CreateRole")
);
const MaterialPage = lazy(() =>
  import("../components/Pages/company/Material/Material")
);
const CreateMaterialPage = lazy(() =>
  import("../components/Pages/company/Material/CreateMaterial")
);
const RejectionReasonPage = lazy(() =>
  import("../components/Pages/company/Rejection/RejectionReason")
);
const CreateRejectionReasonPage = lazy(() =>
  import("../components/Pages/company/Rejection/CreateRejectionReason")
);
const CreateMeasurementUnitsPage = lazy(() =>
  import("../components/Pages/company/MeasurementUnits/CreateMeasurementUnits")
);
const MeasurementUnitsPage = lazy(() =>
  import("../components/Pages/company/MeasurementUnits/MeasurementUnits")
);
const CreateInspectionPlanPage = lazy(() =>
  import("../components/Pages/company/InspectionPlan/CreateInspectionPlan")
);
const SensorConfigurationsPage = lazy(() =>
  import("../components/Pages/company/Sensors/Sensors")
);
const CreateSensorPage = lazy(() =>
  import("../components/Pages/company/Sensors/CreateSensor")
);
const InspectionPlanLotPage = lazy(() =>
  import("../components/Pages/company/InspectionLot/InspectionLot")
);
const CreateInspectionPlanLotPage = lazy(() =>
  import("../components/Pages/company/InspectionLot/CreateInspectionLot")
);
const BuildAreaPage = lazy(() =>
  import("../components/Pages/company/BuildArea/BuildArea")
);
const ViewBuildAreaPage = lazy(() =>
  import("../components/Pages/company/BuildArea/ViewBuildArea")
);
const UpdateMeasurementUnitPage = lazy(() =>
  import("../components/Pages/company/MeasurementUnits/UpdateMeasurementUnit")
);
const ViewRejectionReasonPage = lazy(() =>
  import("../components/Pages/company/Rejection/ViewRejectionReason")
);

const RejectionReasonChildPage = lazy(() =>
  import("../components/Pages/company/Rejection/RejectionReasonChilds")
);

const GroupListingPage = lazy(() =>
  import("../components/WorkFlow/groupListing")
);
// const EditGroupPage = lazy(() =>
//   import("../components/WorkFlow/editGroup")
// );
const EditGroupPage = lazy(() => import("../components/WorkFlow/editGroup"));
const FormBuilderPage = lazy(() =>
  import("../components/Pages/FormBank/AllForms")
);
const ShowFormDetailPage = lazy(() =>
  import("../components/Pages/FormBank/ShowFormDetail")
);
const FixedFormDetailPage = lazy(() =>
  import("../components/Pages/FormBank/FixedFormDetail")
);
const UpdateFormPage = lazy(() =>
  import("../components/Pages/FormBank/UpdateForm")
);
const CreatGroupPage = lazy(() => import("../components/WorkFlow/CreatGroup"));

const EditFormBuilderPage = lazy(() =>
  import("../components/Pages/FormBank/EditFormBuilder")
);
const CreateFormPage = lazy(() =>
  import("../components/Pages/FormBank/FormCreator")
);
const FormInitiatorPage = lazy(() =>
  import("../components/Pages/company/FutureUseForms/FormInitiator")
);
const CustomFormCrudPage = lazy(() =>
  import("../components/Pages/company/FutureUseForms/CustomFormCrud")
);
const MainInspectionPlanTreePage = lazy(() =>
  import("../components/Pages/company/InspectionPlan/MainInspectionPlanTree")
);
const StepPage = lazy(() =>
  import("../components/Pages/company/InspectionPlan/forms/Step")
);
const FixedFieldsPage = lazy(() =>
  import("../components/Pages/company/FutureUseForms/FixedFields")
);
const ViewFixedFormPage = lazy(() =>
  import("../components/Pages/company/FutureUseForms/ViewFixedForm")
);
const ViewCustomFormPage = lazy(() =>
  import("../components/Pages/company/FutureUseForms/ViewCustomForm")
);
const PaymentMethodPage = lazy(() =>
  import("../components/Pages/company/FutureUseForms/PaymentMethod")
);
const PlanSubscriptionPage = lazy(() =>
  import("../components/Pages/company/FutureUseForms/PlanSubscription")
);
const PlanUpgradePage = lazy(() =>
  import("../components/Pages/company/FutureUseForms/Plan-upgrade")
);
const AssignPermissionsPage = lazy(() =>
  import(
    "../components/Pages/company/RoleManagment/Permissions/AssignPermissions"
  )
);
const ViewRolePage = lazy(() =>
  import("../components/Pages/company/RoleManagment/ViewRole")
);
const CreatePurchasePage = lazy(() =>
  import("../components/Pages/saas/subscription/CreatePurchase")
);
const FMEAPage = lazy(() =>
  import("../components/Pages/company/FutureUseForms/FMEA")
);
const FMEAReportPage = lazy(() =>
  import("../components/Pages/company/reports/Fmea/FmeaReports")
);
const GroupPage = lazy(() => import("../components/Pages/company/Group/Group"));
const CreateGroupsPage = lazy(() =>
  import("../components/Pages/company/Group/CreateGroups")
);
const ViewGroupPage = lazy(() =>
  import("../components/Pages/company/Group/ViewGroup")
);

const Report1Page = lazy(() =>
  import("../components/Pages/company/FutureUseForms/Report1")
);
const Report2Page = lazy(() =>
  import("../components/Pages/company/FutureUseForms/Report2")
);
const InspectionLotReport = lazy(() =>
  import("../components/Pages/company/reports/InspectionLotReport")
);

const GeneralFormListPage = lazy(() =>
  import("../components/Pages/company/reports/generalForm/GeneralFormList")
);

const GeneralFormFilledByPage = lazy(() =>
  import("../components/Pages/company/reports/generalForm/GeneralFormFilledBy")
);

// const GeneralFormDetailPage = lazy(() =>
//   import("../components/Pages/company/reports/generalForm/GeneralFormDetail")
// );
const StepReport = lazy(() =>
  import("../components/Pages/company/reports/StepsReport")
);
const QcReport = lazy(() =>
  import("../components/Pages/company/reports/QcPointReport")
);

let PublicRoutes = [
  {
    path: "/login",
    element: <AuthPage />,
  },
  // { path: "*", element: <NoMatchPage /> },
];

let PrivateRoutes = [
  {
    path: "/",
    element: <MainLyout />,
    children: [
      { index: true, element: <DashboardPage /> },

      // saas starts
      {
        path: "/company",
        element: <CompanyManagmentPage />,
      },
      {
        path: "/company/create",
        element: <CreateComapnyPage />,
      },
      {
        path: "/company/:Id",
        element: <ViewCompanyPage />,
      },
      {
        path: "/subscription",
        element: <ManageSubscriptionPage />,
      },
      {
        path: "/transaction",
        element: <TransactionPage />,
      },
      {
        path: "/consent",
        element: <ConsentPagePage />,
      },

      {
        path: "/admin-log",
        element: (
          <ProtectRoute>
            <AdminLogPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/roles",
        element: <RoleManagmentPage />,
      },
      {
        path: "/roles/create",
        element: <CreateRolePage />,
      },
      {
        path: "/roles/:roleId",
        element: <ViewRolePage />,
      },
      {
        path: "/plan-subscription",
        element: (
          <ProtectRoute>
            <PlanSubscriptionPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/plan-upgrade",
        element: (
          <ProtectRoute>
            <PlanUpgradePage />
          </ProtectRoute>
        ),
      },
      {
        path: "/payment-method",
        element: (
          <ProtectRoute>
            <PaymentMethodPage />
          </ProtectRoute>
        ),
      },

      // ************************************************************ saas ens here

      // com
      {
        path: "/editGroup",
        element: (
          <ProtectRoute>
            <EditGroupPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/Group/Create",
        element: (
          <ProtectRoute>
            <CreatGroupPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/FormBuilder",
        element: (
          <ProtectRoute>
            <FormBuilderPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/editForm",
        element: (
          <ProtectRoute>
            <EditFormBuilderPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/creatForm",
        element: (
          <ProtectRoute>
            <CreateFormPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/updateForm",
        element: (
          <ProtectRoute>
            <UpdateFormPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/userEnableForm",
        element: (
          <ProtectRoute>
            <ShowFormDetailPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/FixedFormDetail",
        element: (
          <ProtectRoute>
            <FixedFormDetailPage />
          </ProtectRoute>
        ),
      },
      // {path: "/register",element: (<RegisterPage />),},
      {
        path: "/forgot",
        element: (
          <ProtectRoute>
            <ForgotPasswordPage />
          </ProtectRoute>
        ),
      },

      {
        path: "/account",
        element: (
          <ProtectRoute>
            <AccountInfoPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/station",
        element: (
          <ProtectRoute>
            <WorkistationPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/station/create",
        element: (
          <ProtectRoute>
            <CreateWorkstationPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/station/:Id",
        element: (
          <ProtectRoute>
            <ViewWorkStationPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/plant",
        element: (
          <ProtectRoute>
            <PlantPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/plant/create",
        element: (
          <ProtectRoute>
            <CreatePlantPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/view-plant/edit/:id",
        element: (
          <ProtectRoute>
            <UpdatePlantPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/user",
        element: (
          <ProtectRoute>
            <UserPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/user/create",
        element: (
          <ProtectRoute>
            <CreateUserPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/user/edit/:id",
        element: (
          <ProtectRoute>
            <ViewUserPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/material-no-config",
        element: (
          <ProtectRoute>
            <MaterialNoConfigPage />
          </ProtectRoute>
        ),
      },

      {
        path: "/material",
        element: (
          <ProtectRoute>
            <MaterialPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/material/create",
        element: (
          <ProtectRoute>
            <CreateMaterialPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/material/:id",
        element: (
          <ProtectRoute>
            <ViewMaterialPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/inspection-lot",
        element: (
          <ProtectRoute>
            <InspectionPlanLotPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/inspection-lot/:id",
        element: (
          <ProtectRoute>
            <ViewInspectionLotPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/measurement-units",
        element: (
          <ProtectRoute>
            <MeasurementUnitsPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/inspection-plan",
        element: (
          <ProtectRoute>
            <InspectionPlanPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/inspection-plan/view/:id",
        element: <MainInspectionPlanTreePage />,
      },
      {
        path: "/inspection-plan/create",
        element: <CreateInspectionPlanPage />,
      },

      {
        path: "/inspection-plan/step",
        element: (
          <ProtectRoute>
            <StepPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/sensor",
        element: (
          <ProtectRoute>
            <SensorConfigurationsPage />
          </ProtectRoute>
        ),
      },

      {
        path: "/sensor/create",
        element: (
          <ProtectRoute>
            <CreateSensorPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/sensor/:id",
        element: (
          <ProtectRoute>
            <ViewSensorPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/sensor-type",
        element: (
          <ProtectRoute>
            <SensorTypePage />
          </ProtectRoute>
        ),
      },
      {
        path: "/create-sensor-type",
        element: (
          <ProtectRoute>
            <CreateSensorTypePage />
          </ProtectRoute>
        ),
      },
      { path: "sensor-type/:id", element: <ViewSensorTypePage /> },
      {
        path: "/form-initiator",
        element: (
          <ProtectRoute>
            <FormInitiatorPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/custom-form",
        element: (
          <ProtectRoute>
            <CustomFormCrudPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/fixed-fields",
        element: (
          <ProtectRoute>
            <FixedFieldsPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/fixed-form/view",
        element: (
          <ProtectRoute>
            <ViewFixedFormPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/custom-form/view",
        element: (
          <ProtectRoute>
            <ViewCustomFormPage />
          </ProtectRoute>
        ),
      },

      {
        path: "/groups",
        element: (
          <ProtectRoute>
            <GroupPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/groups/create",
        element: (
          <ProtectRoute>
            <CreateGroupsPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/groups/:Id",
        element: (
          <ProtectRoute>
            <ViewGroupPage />
          </ProtectRoute>
        ),
      },

      {
        path: "/form/:id",
        element: (
          <ProtectRoute>
            <CreatePurchasePage />
          </ProtectRoute>
        ),
      },
      {
        path: "/FMEA",
        element: (
          <ProtectRoute>
            <FMEAPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/report/fmea",
        element: (
          <ProtectRoute>
            <FMEAReportPage />
          </ProtectRoute>
        ),
      },

      {
        path: "/report1",
        element: (
          <ProtectRoute>
            <Report1Page />
          </ProtectRoute>
        ),
      },
      {
        path: "/report2",
        element: (
          <ProtectRoute>
            <Report2Page />
          </ProtectRoute>
        ),
      },
      {
        path: "/build-area",
        element: (
          <ProtectRoute>
            <BuildAreaPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/inspection-lot-report",
        element: (
          <ProtectRoute>
            <InspectionLotReport />
          </ProtectRoute>
        ),
      },
      {
        path: "/step-report/:id/:flag",
        element: (
          <ProtectRoute>
            <StepReport />
          </ProtectRoute>
        ),
      },
      {
        path: "/qc-report/:id/steps/:stepId",
        element: (
          <ProtectRoute>
            <QcReport />
          </ProtectRoute>
        ),
      },
      {
        path: "/build-area/:id",
        element: (
          <ProtectRoute>
            <ViewBuildAreaPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/FixedFormDetail",
        element: (
          <ProtectRoute>
            <FixedFormDetailPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/subscription",
        element: (
          <ProtectRoute>
            <ManageSubscriptionPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/subscription/create",
        element: (
          <ProtectRoute>
            <CreateSubscriptionPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/edit-subscription/:id",
        element: (
          <ProtectRoute>
            <EditSubscriptionPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/station/create",
        element: (
          <ProtectRoute>
            <CreateWorkstationPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/view-plant/edit/:id",
        element: (
          <ProtectRoute>
            <UpdatePlantPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/material-no-config",
        element: (
          <ProtectRoute>
            <MaterialNoConfigPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/material-no-config/create",
        element: (
          <ProtectRoute>
            <NoConfigCreatePage />
          </ProtectRoute>
        ),
      },
      {
        path: "/material-no-config/:id",
        element: (
          <ProtectRoute>
            <NoConfigUpdatePage />
          </ProtectRoute>
        ),
      },
      {
        path: "/assign-permissions/:rolId",
        element: <AssignPermissionsPage />,
      },
      {
        path: "/rejection-reasons",
        element: (
          <ProtectRoute>
            <RejectionReasonPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/rejection-reasons/:Id",
        element: (
          <ProtectRoute>
            <ViewRejectionReasonPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/rejection-reasons/child/:parentId",
        element: (
          <ProtectRoute>
            <RejectionReasonChildPage />
          </ProtectRoute>
        ),
      },

      {
        path: "/rejection-reasons/create",
        element: <CreateRejectionReasonPage />,
      },
      {
        path: "/inspection-lot",
        element: (
          <ProtectRoute>
            <InspectionPlanLotPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/inspection-lot/create",
        element: <CreateInspectionPlanLotPage />,
      },
      {
        path: "/measurement-units",
        element: (
          <ProtectRoute>
            <MeasurementUnitsPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/measurement-units/create",
        element: <CreateMeasurementUnitsPage />,
      },
      {
        path: "/grouplisting",
        element: (
          <ProtectRoute>
            <GroupListingPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/Group/Update",
        element: (
          <ProtectRoute>
            <EditGroupPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/measurement-unit/:id",
        element: (
          <ProtectRoute>
            <UpdateMeasurementUnitPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/custom-form/view",
        element: (
          <ProtectRoute>
            <ViewCustomFormPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/plan-subscription",
        element: (
          <ProtectRoute>
            <PlanSubscriptionPage />
          </ProtectRoute>
        ),
      },
      // response
      {
        path: "/report/general-form",
        element: (
          <ProtectRoute>
            <GeneralFormListPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/report/general-form/filled/:Id",
        element: (
          <ProtectRoute>
            <GeneralFormFilledByPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/report/graph",
        element: (
          <ProtectRoute>
            <GraphsPage />
          </ProtectRoute>
        ),
      },
      { path: "/forb", element: <UnAuthPage /> },
      { path: "/unAuth", element: <ForbPage /> },
      { path: "*", element: <NoMatchPage /> },
    ],
  },
];

export { PrivateRoutes, PublicRoutes };
