import { NODATA_PROPTYPES } from "../utils/constants";
import NoDataLogo from "../assets/nodata.svg";
export default function NoData({ message }) {
  return (
    <div className="w-full text-center font-semibold tracking-wide m-4">
      <img src={NoDataLogo} alt="No data" className="mx-auto my-8 max-w-md " />
      <h1 className="text-xl">{message}</h1>
    </div>
  );
}
NoData.propTypes = NODATA_PROPTYPES;
