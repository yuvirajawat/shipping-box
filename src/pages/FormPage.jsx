import ShippingForm from "../components/ShippingForm";
import { SHIPPING_FORM_CONFIG } from "../utils/constants";

export default function FormPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-4">
      <h2 className="heading">{SHIPPING_FORM_CONFIG.title}</h2>
      <ShippingForm />
    </div>
  );
}
