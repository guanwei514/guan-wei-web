import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import aboutPic from "../../assets/images/aboutPic.png";
import cv from "../../assets/files/GuanWei Su - CV (July 2021).pdf";

const About = (props) => {
  const { t } = useTranslation("about");

  return (
    <div className="about">
      <div className="title">
        <div className="title-inner">{t("aboutMe")}</div>
      </div>
      <div className="subtitle">{t("subtitle")}</div>
      <div className="main-area">
        <div className="about-left">
          <img src={aboutPic} alt="aboutPic" />
        </div>
        <div className="about-right">
          <div className="name">{t("name")}</div>
          <div className="position">
            <div>{t("a")}</div>
            <div className="primary-text">{t("position")}</div>
            <div>{t("basedIn")}</div>
            <div className="primary-text">{t("taiwan")}</div>
          </div>
          <div className="intro">{t("intro")}</div>
          <div className="self-info">
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
              <div className="info-value">guanweisu@gmail.com</div>
            </div>
            <div className="info">
              <div className="info-label">{t("phone")}</div>
              <div className="info-value">0929961079</div>
            </div>
          </div>
          <a className="primaryBtn click-btn downloadCV" href={cv} download target="_blank" rel="noreferrer">
            {t("downloadCV")}
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
