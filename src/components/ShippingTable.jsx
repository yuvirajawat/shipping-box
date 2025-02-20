import {
  SHIPPING_TABLE_COLUMNS,
  SHIPPING_TABLE_PROPTYPES,
  STATIC_VARIABLES,
} from "../utils/constants";
import { getCountryRate } from "../utils/helpers";

export default function ShippingTable({ boxes }) {
  return (
    <table className="w-full border border-gray-300 shadow-lg rounded-lg">
      <thead>
        <tr className="bg-blue-500 text-white">
          {Object.values(SHIPPING_TABLE_COLUMNS).map((column) => (
            <th key={column} className="p-3 text-left font-semibold">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {boxes.map((box) => (
          <tr
            key={box.id}
            className="even:bg-gray-100 odd:bg-white border-none"
          >
            <td className="p-3">{box.receiverName}</td>
            <td className="p-3">
              {box.weight} {STATIC_VARIABLES.kg}
            </td>
            <td className="p-3">
              <div
                className="w-6 h-6 rounded-full border-gray-200 border"
                style={{ backgroundColor: box.boxColor }}
              ></div>
            </td>
            <td className="p-3">{box.destinationCountry}</td>
            <td className="p-3">
              {(box.weight * getCountryRate(box.destinationCountry)).toFixed(2)}{" "}
              {STATIC_VARIABLES.inr}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
ShippingTable.propTypes = SHIPPING_TABLE_PROPTYPES;
