import React from "react";
import About from "../components/main/About";
import Banner from "../components/main/Banner";
import Skill from "../components/main/Skill";

const Main = () => {

  window.addEventListener("scroll", function () {
    const top = document.documentElement.scrollTop;
    const home = document.querySelector(".home").offsetTop;
    const about = document.querySelector(".about").offsetTop;
    const skill = document.querySelector(".skill").offsetTop;
    const h = window.screen.height;

    if (top + h / 2 > home && top + h / 2 < about) {
      document.querySelector(".home-nav").classList.add("active");
    } else {
      document.querySelector(".home-nav").classList.remove("active");
    } 
    if (top + h / 2 > about && top + h / 2 < skill) {
      document.querySelector(".about-nav").classList.add("active");
    } else {
      document.querySelector(".about-nav").classList.remove("active");
    }
  });

  return (
    <>
      <Banner />
      <About />
      <Skill />
    </>
  );
};
export default Main;
