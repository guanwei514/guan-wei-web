import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import aboutPic from "../../assets/images/aboutPic.png";
import cv from "../../assets/files/GuanWei Su - CV (July 2021).pdf";
import ClickBtn from "../common/ClickBtn";
import { scrollTo } from "../../helpers/router";

const About = (props) => {
  const { t } = useTranslation("about");

  return (
    <div className="about section">
      <div className="title">
        <div className="title-inner">{t("aboutMe")}</div>
      </div>
      <div className="subtitle">{t("subtitle")}</div>
      <div className="main-area">
        <div className="about-left">
          <img src={aboutPic} alt="aboutPic" />
        </div>
        <div className="about-right">
          <div className="about-name">{t("name")}</div>
          <div className="about-position">
            <div>{t("a")}</div>
            <div className="primary-text">{t("position")}</div>
            <div>{t("basedIn")}</div>
            <div className="primary-text">{t("taiwan")}</div>
          </div>
          <div className="about-intro">{t("intro")}</div>
          <div className="about-self-info">
            <div className="info">
              <div className="info-label">{t("birthday")}</div>
              <div className="info-value">14th May 1994</div>
            </div>
            <div className="info">
              <div className="info-label">{t("age")}</div>
              <div className="info-value">27 Yr</div>
            </div>
            <div className="info">
              <div className="info-label">{t("email")}</div>
              <div className="info-value">guanweisu514@gmail.com</div>
            </div>
            <div className="info">
              <div className="info-label">{t("phone")}</div>
              <div className="info-value">0929961079</div>
            </div>
          </div>
          {/* <a className="primaryBtn click-btn about-downloadCV" href={cv} download target="_blank" rel="noreferrer">
            {t("downloadCV")}
          </a> */}
          <div
            className={`about-downloadCV click-btn primaryBtn`}
            onClick={() => scrollTo(0, 600, `.contact`)}
          >
            {t("downloadCV")}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
