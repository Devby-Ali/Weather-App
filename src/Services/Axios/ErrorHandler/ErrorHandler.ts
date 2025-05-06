import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const errorHandler = (error: any) => {
  if (error.response) {
    if (error.response?.status === 400) {
      Toast.fire({
        icon: "warning",
        title: "مکانی یافت نشد!",
        position: "top",
        width: "35%",
        padding: "2rem",
        heightAuto: false,
      });
    }
    console.error("Server Error:", error.response.data.message);
  } else if (error.request) {
    console.error("Network Error:", error.message);
  } else {
    console.error("Error:", error.message);
  }
};
export default errorHandler;
