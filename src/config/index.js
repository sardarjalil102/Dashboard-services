import EAPI from "../services/api";
import timeZone from "../data/timeZone.json";

export const key = {
  server: {
    url: process.env.REACT_APP_BASE_API_URL,
    api: `${process.env.REACT_APP_BASE_API_URL}/api`,
  },
  app: {
    name: process.env.REACT_APP_NAME,
    url: process.env.REACT_APP_URL,
  },

  tree: {
    ACTION_TYPES: ["e", "a"],
  },
  apiKey: { tinyEditor: process.env.REACT_APP_TINYMCE_API_KEY },
  auth: {
    clien_secret: process.env.REACT_APP_CLIENT_SECRET,
    client_id: process.env.REACT_APP_CLIEN_ID,
    grant_type: process.env.REACT_APP_GRANT_TYPE,
  },
  constant: {
    TIME_ZONE: timeZone,
  },
  token: null,
  compnyId: null,

  // {label:"", link:"", icon:""}
  sideBar: {
    sassMenuLink: [
      {
        link: "/",
        icon: "menu-icon tf-icons bx bx-box",
        label: "Dashboard",
        permission: "Dashboard-View",
      },
      {
        link: "/company",
        icon: "menu-icon tf-icons bx bx-buildings",
        label: "Company Management",
        permission: "Company-View",
      },
      {
        link: "/subscription",
        icon: "menu-icon tf-icons bx bx-calendar",
        label: "Plans",
        permission: "Plan-View",
      },
      {
        link: "/roles",
        icon: "menu-icon tf-icons bx bx-calendar",
        label: "Roles",
        permission: "Roles-View",
      },
      {
        link: "/transaction",
        icon: "menu-icon tf-icons bx bx-history",
        label: "Transaction History",
        permission: "Transaction-View",
      },
      {
        link: "/consent",
        icon: "menu-icon tf-icons bx bx-notepad",
        label: "Registration Consent",
        permission: "Registration-update",
      },
      {
        link: "/plan-subscription",
        icon: "menu-icon tf-icons bx bx-calendar",
        label: "Plan Subscription",
        permission: "Plan-Create",
      },

      {
        link: "/plan-upgrade",
        icon: "menu-icon tf-icons bx bx-calendar",
        label: "Plan Upgrade",
        permission: "Plan-Upgrade",
      },
      {
        link: "/payment-method",
        icon: "menu-icon tf-icons bx bx-calendar",
        label: "Payment Method",
        permission: "PaymentMethod-Add",
      },
    ],
    companyMenuLink: [
      {
        link: "/",
        icon: "menu-icon tf-icons bx bx-box",
        label: "Dashboard",
        permission: "Dashboard-View",
      },

      {
        link: "/inspection-plan",
        icon: "/assets/img/inspection-plan.svg",
        label: "Inspection Plan",
        permission: "InspectionPlan-View",
      },
      {
        link: "/build-area",
        icon: "",
        label: "Build Area",
        permission: "BuildArea-View",
      },
      {
        link: "/material",
        icon: "/assets/img/material.svg",
        label: "Material Master",
        permission: "MaterialMaster-View",
      },
      {
        link: "/station",
        icon: "/assets/img/work-station.svg",
        label: "Work Station",
        permission: "WorkStation-View",
      },
      {
        link: "/plant",
        icon: "/assets/img/plant.svg",
        label: "Plant",
        permission: "Plant-View",
      },
      {
        link: "/Inspection-lot",
        icon: "/assets/img/inspection-lot.svg",
        label: "Inspection Lot",
        permission: "InspectionLot-View",
      },
      {
        link: "/FormBuilder",
        icon: "menu-icon tf-icons bx bx-calendar",
        label: "General/Workflow",
        permission: "Forms-View",
      },
      {
        link: "/FixedFormDetail",
        icon: "menu-icon tf-icons bx bx-calendar",
        label: "Approval Trails",
        permission: "Form-Trail-View",
      },
      {
        link: "/grouplisting",
        icon: "menu-icon tf-icons bx bx-calendar",
        label: "Approval Groups",
        permission: "ApprovalGroup-View",
      },
      {
        link: "/user",
        icon: "/assets/img/users.svg",
        label: "Users",
        permission: "User-View",
      },
      {
        link: "/roles",
        icon: "/assets/img/role-managment.svg",
        label: "Role Managment",
        permission: "RoleManagement-View",
      },
      {
        link: "/creatForm",
        icon: "menu-icon tf-icons bx bx-calendar",
        label: "Workflow",
        permission: "Worlflow-View",
      },
      {
        link: "/userEnableForm",
        icon: "menu-icon tf-icons bx bx-calendar",
        label: "Enabled Trails",
        permission: "Form-Trail",
      },
      {
        link: "/fixed-fields",
        icon: "menu-icon tf-icons bx bx-calendar",
        label: "Approval Form",
        permission: "Form-Create",
      },
      {
        link: "submenu",
        icon: "/assets/img/settings.svg",
        label: "Settings",
        permission: "Settings-View",
        subMenu: [
          {
            link: "/rejection-reasons",
            icon: "menu-icon tf-icons bx bx-calendar",
            label: "Rejection Reason",
            permission: "RejectionReason-View",
          },
          {
            link: "/material-no-config",
            icon: "/assets/img/material-config.svg",
            label: "Material No",
            permission: "MaterialNoConfig-View",
          },
          {
            link: "/measurement-units",
            icon: "menu-icon tf-icons bx bx-calendar",
            label: "Measurement Units",
            permission: "MeasurementUnits-View",
          },
          {
            link: "/admin-log",
            icon: "/assets/img/admin-log.svg",
            label: "Admin Logs",
            permission: "Adminlog-View",
          },
          // {
          //   link: "/account",
          //   icon: "/assets/img/admin-info.svg",
          //   label: "Account Info",
          // },
          // {
          //   link: "/company-edit",
          //   icon: "/assets/img/edit-company.svg",
          //   label: "Company Info",
          // },
          {
            link: "/groups",
            icon: "/assets/img/role-managment.svg",
            label: "Group",
            permission: "Group-View",
          },
        ],
      },
      {
        link: "/sensor",
        icon: "/assets/img/sensor.svg",
        label: "Sensors",
        permission: "Sensor-View",
      },
      {
        link: "/sensor-type",
        icon: "/assets/img/sensor.svg",
        label: "Sensors Type",
        permission: "SensorType-View",
      },
      {
        link: "reportSubmenu",
        icon: "menu-icon tf-icons bx bx-notepad",
        label: "Report",
        permission: "Report-View",
        subMenu: [
          {
            link: "/report/graph",
            icon: "menu-icon tf-icons bx bx-calendar",
            label: "Graphs",
            permission: "Graph-Filter",
          },
          {
            link: "/report/general-form",
            icon: "menu-icon tf-icons bx bx-notepad",
            label: "General form",
            permission: "GeneralForm-View",
          },
          {
            link: "/FMEA",
            icon: "menu-icon tf-icons bx bx-notepad",
            label: "FMEA",
            permission: "FMEA-View",
          },
          {
            link: "/report/fmea",
            icon: "menu-icon tf-icons bx bx-notepad",
            label: "FMEA Report",
            permission: "FMEA-Report-View",
          },
          {
            link: "/report1",
            icon: "menu-icon tf-icons bx bx-notepad",
            label: "Report 1",
            permission: "Report1-View",
          },
          {
            link: "/report2",
            icon: "menu-icon tf-icons bx bx-notepad",
            label: "Report 2",
            permission: "Report2-View",
          },
          {
            link: "/inspection-lot-report",
            icon: "menu-icon tf-icons bx bx-notepad",
            label: "Inspection Lot Report",
            permission: "InspectionLotReport-View",
          },
        ],
      },
    ],
  },
};

export const API = new EAPI({ BaseUrl: key.server.api });
