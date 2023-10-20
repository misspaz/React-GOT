import "../Flags/Flags.css";
import i18n from "../../i18n";
// import { useTranslation } from "react-i18next";

export default function Flags() {
  // const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="div-flags" >
      <img className="flags"
        src="https://cdn-icons-png.flaticon.com/512/197/197593.png"
        alt="Spain's Flag"
        onClick={() => changeLanguage("es")}
      ></img>
      <img className="flags"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/768px-United-kingdom_flag_icon_round.svg.png?20170727094807"
        alt="UK's flag"
        onClick={() => changeLanguage("en")}
      ></img>
    </div>
  );
}
