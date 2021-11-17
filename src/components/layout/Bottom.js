import React from "react";
import logo from "../../assets/images/logo_w.png";
import { useTranslation } from "../../langs/useTranslation";

const Bottom = () => {
  const { t } = useTranslation("common");


  return (
    <div className="bottom">
      <div className="bottom-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="bottom-copyright">{t("copyright")}</div>
      <div className="bottom-cooperator">
      <div className="bottom-logo-rwd">
        <img src={logo} alt="logo" />
      </div>
        <div>
          {t("cooperator")} :{" "}
          <a
            href="https://github.com/dylantsouy"
            target="_blank"
            rel="noreferrer"
          >
            Dylan Tsou
          </a>
        </div>
        <div className="bottom-copyright-rwd">{t("copyright")}</div>
      </div>
    </div>
  );
};

export default Bottom;
