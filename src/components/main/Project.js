import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import project1 from "../../assets/images/project1.gif";
import project2 from "../../assets/images/project2.gif";
import project3 from "../../assets/images/project3.gif";
import project4 from "../../assets/images/project4.gif";
import project5 from "../../assets/images/project5.jpg";
import project6 from "../../assets/images/project6.jpg";
import project7 from "../../assets/images/project7.gif";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { scrollTo } from "../../helpers/router";

// Import Swiper styles
import SwiperCore, { Navigation } from "swiper"; // Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
SwiperCore.use([ Navigation]);

const Project = (props) => {
  const { t } = useTranslation("project");
  const projectSet = [
    { src: project1, text: t("project1"), date: "Oct, 2021" },
    { src: project2, text: t("project2"), date: "Oct, 2021" },
    { src: project3, text: t("project3"), date: "Dec, 2020" },
    { src: project4, text: t("project4"), date: "Dec, 2020" },
    { src: project7, text: t("project7"), date: "Mar, 2020" },
    { src: project5, text: t("project5"), date: "Mar, 2019" },
    { src: project6, text: t("project6"), date: "Mar, 2016" },
  ];

  return (
    <div className="project section">
      <div className="title">
        <div className="title-inner">{t("myProjects")}</div>
      </div>
      <div className="subtitle">{t("subtitle")}</div>
      <div className="main-area">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          breakpoints={{
            '500': {
              slidesPerView: 1,
            },
            '700': {
              slidesPerView: 2,
            },
            '1200': {
              slidesPerView: 3,
            },
            '1400': {
              slidesPerView: 4,
            },
          }}
          navigation={true}
          className="project-swiper"
        >
          {projectSet.length > 0 &&
            projectSet.map((e, index) => (
              <SwiperSlide key={index} className="project-item" onClick={() => scrollTo(0, 600, `.contact`)}>
                <div className="project-img">
                  <div
                    className="img-self"
                    style={{ backgroundImage: `url(${e.src})` }}
                  />
                  <div className="project-info">
                    <div className="project-text">{e.text}</div>
                    <div className="project-date">{e.date}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Project;
