import { NavLink } from "react-router-dom";
import { NAVBAR_PROPTYPES } from "../utils/constants";
export default function Navbar({ links }) {
  return (
    <div className="flex justify-center p-4">
      <nav>
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
Navbar.propTypes = NAVBAR_PROPTYPES;
