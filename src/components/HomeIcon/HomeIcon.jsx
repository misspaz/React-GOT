import "../HomeIcon/HomeIcon.css"
import { NavLink } from "react-router-dom";

export default function HomeIcon() {
  return (
    <>
      <NavLink to="/">
        <img
          className="home-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06EDz6RZ1hY6izvYv8JlJY7_E_N5xMyB59q3XTWOur24EXaP_vKoQQPm45K4kd6dgq5M&usqp=CAU"
          alt="Home"
        ></img>
      </NavLink>
    </>
  );
}
