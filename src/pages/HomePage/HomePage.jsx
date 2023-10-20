import "../HomePage/HomePage.css";
import Menu from "../../components/Menu/Menu";
import Flags from "../../components/Flags/Flags";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="bg-image">
    <Flags/>
      <h1 className="title">{t("Game of Thrones")}</h1>
      <Menu />
    </div>
  );
}
