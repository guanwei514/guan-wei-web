import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import ClickBtn from "../common/ClickBtn";
import selfPhoto from "../../assets/images/self.svg";
import mainBall from "../../assets/images/mainBall.svg";

const Banner = (props) => {
  const { history } = props;
  const { t } = useTranslation("banner");
  return (
    <div className="banner">
      <div className="banner-left">
        <div className="hello">{t("helloIam")}</div>
        <div className="name">{t("selfName")}</div>
        <div className="position">{t("position")}</div>
        <div className="intro">{t("intro")}</div>
        <div className="btn-area">
          <ClickBtn
            width="180px"
            type="primaryBtn"
            text={t("myWork")}
            fontSize="20px"
            onClick={() => history.push("/portfolio")}
          />
          <ClickBtn
            width="180px"
            type="secBtn"
            text={t("contact")}
            fontSize="20px"
            onClick={() => history.push("/experience")}
          />
        </div>
      </div>
      <div className="banner-right">
        <div className="banner-img">
          <img src={selfPhoto} alt="selfPhoto" className="selfPhoto" />
          <img src={mainBall} alt="mainBall" className="mainBall" />
        </div>
      </div>
      <div className="go-to">
        <a href="#about">
          <span></span>
        </a>
      </div>
    </div>
  );
};
export default Banner;
