import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import ClickBtn from "../common/ClickBtn";

const Contact = (props) => {
  const { history } = props;
  const { t } = useTranslation("contact");

  return (
    <div className="contact section">
      <div className="title">
        <div className="title-inner">{t("contact")}</div>
      </div>
      <div className="subtitle">{t("subtitle")}</div>
      <div className="main-area"></div>
    </div>
  );
};
export default Contact;
