import { toast } from "react-toastify";

const SHOW_ERROR = (error = true, msg = "Some thing went wrong") => {
  if (error) {
    toast.error(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

const SHOW_SUCCESS = (sucess = true, msg = "Successful !") => {
  if (sucess) {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

const SHOW_INFO = (sucess = true, msg = "information !") => {
  if (sucess) {
    toast.info(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

export { SHOW_ERROR, SHOW_SUCCESS, SHOW_INFO };
