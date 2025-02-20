import { useSelector } from "react-redux";
import ShippingTable from "../components/ShippingTable";
import NoData from "../components/NoData";
import { STATIC_VARIABLES } from "../utils/constants";

export default function FormPage() {
  const boxes = useSelector((state) => state.shipping.boxes);
  return (
    <div className="mt-6 w-full max-w-3xl mx-auto">
      <div className="overflow-x-auto">
        {boxes.length ? (
          <>
            <h2 className="heading">{STATIC_VARIABLES.shipping_boxes}</h2>
            <ShippingTable boxes={boxes} />
          </>
        ) : (
          <NoData message={STATIC_VARIABLES.empty_list} />
        )}
      </div>
    </div>
  );
}
