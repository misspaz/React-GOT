import "../Arrow/Arrow.css"
import { NavLink } from "react-router-dom";

export default function Arrow() {
  return (
    <>
      <NavLink to="/houses">
        <img
          className="arrow" src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=left-arrow" alt="arrow"
        ></img>
      </NavLink>
      </>
  );
}
