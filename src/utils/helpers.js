import { toast } from "react-toastify";
import { COUNTRY_RATES } from "./constants";

export const notifySuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

export const getCountryRate = (country) => {
  return COUNTRY_RATES[country] || 0;
};

export const hexToRgb = (hex) => {
  // Remove the '#' if it exists
  hex = hex.replace(/^#/, "");

  // Parse r, g, b values from the hex string
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  return `RGB (${r}, ${g}, ${b})`;
};
