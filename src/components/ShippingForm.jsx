import { useForm } from "react-hook-form";
import {
  ACTION_MESSAGES,
  COUNTRY_RATES,
  SHIPPING_FORM_CONFIG,
  STATIC_VARIABLES,
} from "../utils/constants";
import { hexToRgb, notifySuccess } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { addBox } from "../store/features/shippingSlice";
import { nanoid } from "@reduxjs/toolkit";
const ShippingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({ defaultValues: SHIPPING_FORM_CONFIG.defaultState });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const newBox = {
      id: nanoid(),
      ...data,
    };
    dispatch(addBox(newBox));
    notifySuccess(ACTION_MESSAGES.Add);
    reset(SHIPPING_FORM_CONFIG.defaultState);
  };
  const weightValue = watch("weight");
  const handleWeightChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setValue("weight", value < 0 ? 0 : value);
    trigger("weight");
  };
  const colorValue = watch("boxColor");
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Receiver Name */}
      <div>
        <label className="text-label">{STATIC_VARIABLES.receiverName}</label>
        <input
          type="text"
          {...register("receiverName", {
            required: "Receiver name is required",
          })}
          className="form-input-field"
        />
        {errors.receiverName && (
          <p className="text-error">{errors.receiverName.message}</p>
        )}
      </div>

      {/* Weight Input */}
      <div>
        <label className="text-label">{STATIC_VARIABLES.weight}</label>
        <input
          type="number"
          {...register("weight", {
            valueAsNumber: true,
            min: { value: 1, message: "Weight must be greater than 0" },
          })}
          className="form-input-field"
          value={weightValue}
          onChange={handleWeightChange}
        />
        {errors.weight && <p className="text-error">{errors.weight.message}</p>}
      </div>

      {/* Box Color Picker */}
      <div className="flex items-center justify-between">
        <label className="text-label">
          {STATIC_VARIABLES.boxColor}{" "}
          <span
            className={`p-1 rounded ${
              colorValue === "#ffffff" ? "bg-gray-300" : ""
            }`}
            style={{ color: colorValue }}
          >
            {hexToRgb(colorValue)}
          </span>
        </label>
        <input
          type="color"
          {...register("boxColor", {
            required: "Box color is required",
          })}
          className="color-input"
          value={colorValue}
        />
      </div>

      {/* Destination Country Dropdown */}
      <div>
        <label className="text-label">
          {STATIC_VARIABLES.destinationCountry}
        </label>
        <select
          {...register("destinationCountry", {
            required: "Destination country is required",
          })}
          className="form-input-field"
        >
          <option key={"select"} value="">
            {STATIC_VARIABLES.select_country}
          </option>
          {Object.keys(COUNTRY_RATES).map((country) => (
            <option key={country} value={country}>
              {country} ({COUNTRY_RATES[country]} {STATIC_VARIABLES.inr_per_kg})
            </option>
          ))}
        </select>
        {errors.destinationCountry && (
          <p className="text-error">{errors.destinationCountry.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-button">
        {STATIC_VARIABLES.submit}
      </button>
    </form>
  );
};
export default ShippingForm;
