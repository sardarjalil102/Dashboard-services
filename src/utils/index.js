import axios from "axios";

const setToken = (token) => {
  localStorage.setItem("access_token", token);
};

const removeToken = () => {
  localStorage.removeItem("access_token");
};
const removeCompantId = () => {
  localStorage.removeItem("companyId");
};
const setCompantId = (id) => {
  localStorage.setItem("companyId", id);
};

const getCompantId = () => {
  const companyId = localStorage.getItem("companyId");
  if (companyId) {
    return companyId;
  }
  return null;
};

const verifyToken = () => {
  const auth = localStorage.getItem("access_token");
  if (auth) {
    return true;
  } else {
    return false;
  }
};

const getToken = () => {
  const auth = localStorage.getItem("access_token");
  if (auth) {
    return auth;
  }
  return null;
};

const isRememberME = () => {
  const remember = localStorage.getItem("remember_me");
  if (remember) {
    return true;
  } else {
    return false;
  }
};

const setRememberME = (data) => {
  localStorage.setItem("remember_me", data);
};
const removeRememberME = () => {
  localStorage.removeItem("remember_me");
};

// todo
const isExpire = () => {
  // var { exp } = jwt_decode(TOKEN);
  // // console.log("expire date : ", exp);
  // if (Date.now() >= exp * 1000) {
  //   dispatch(logoutUser());
  // }
};

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const setTempCompantId = (compID, token) => {
  if (compID) {
    setCompantId(compID);
    // // console.log(`Bearer ${token}`);
    axios.defaults.headers.common = {
      companyId: compID,
      Authorization: `Bearer ${token}`,
    };
  } else {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }
};

const spitTime = () => {
  return new Date().toLocaleTimeString();
};
export {
  spitTime,
  openInNewTab,
  setTempCompantId,
  removeRememberME,
  isRememberME,
  setRememberME,
  setToken,
  getToken,
  verifyToken,
  setCompantId,
  removeToken,
  removeCompantId,
  getCompantId,
};
