import { NavLink } from "react-router-dom";
import "../Menu/Menu.css";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { t } = useTranslation();

  return (
    <nav className="menu-style">
      {/* <NavLink to="">Home</NavLink> */}

      <NavLink to="characters">{t("characters")}</NavLink>
      <NavLink to="houses">{t("houses")}</NavLink>
      <NavLink to="chronology">{t("chronology")}</NavLink>
    </nav>
  );
}
