import PropTypes from "prop-types";

export const NODATA_PROPTYPES = {
  message: PropTypes.string.isRequired,
};

export const NAVBAR_PROPTYPES = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export const SHIPPING_TABLE_PROPTYPES = {
  boxes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      receiverName: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
      boxColor: PropTypes.string.isRequired,
      destinationCountry: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const COUNTRY_RATES = {
  Sweden: 7.35,
  China: 11.53,
  Brazil: 15.63,
  Australia: 50.09,
};

export const ACTION_MESSAGES = {
  Add: "Box added successfully!",
};

export const NAV_LINKS = [
  { to: "/boxes/new", text: "Add Box" },
  { to: "/boxes", text: "View Boxes" },
];

export const STATIC_VARIABLES = {
  empty_list: "Shipping list is empty",
  shipping_boxes: "Shipping Boxes",
  kg: "kg",
  inr: "INR",
  select_country: "Select a country",
  inr_per_kg: "INR per kg",
  submit: "Submit",
  destinationCountry: "Destination Country:",
  boxColor: "Box Color:",
  weight: "Weight (kg):",
  receiverName: "Receiver Name:",
};

export const SHIPPING_TABLE_COLUMNS = {
  receiverName: "Receiver Name",
  weight: "Weight (kg)",
  boxColor: "Box Color",
  destinationCountry: "Destination Country",
  cost: "Cost (INR)",
};

export const SHIPPING_FORM_CONFIG = {
  title: "Add Shipping Box",
  defaultState: {
    receiverName: "",
    weight: 0,
    boxColor: "#000000",
    destinationCountry: "",
  },
};
