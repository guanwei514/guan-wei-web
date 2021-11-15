import React from "react";
import { useHistory } from "react-router-dom";
import About from "../components/main/About";
import Banner from "../components/main/Banner";

const Main = () => {
  const history = useHistory();

  window.addEventListener("scroll", function () {
    const top = document.documentElement.scrollTop;
    const home = document.querySelector(".home").offsetTop;
    const about = document.querySelector(".about").offsetTop;
    const h = window.screen.height;

    if (top + h / 2 > home && top + h / 2 < about) {
      document.querySelector(".home-nav").classList.add("active");
    } else {
      document.querySelector(".home-nav").classList.remove("active");
    }
  });

  return (
    <>
      <Banner history={history} />
      <About history={history} />
    </>
  );
};
export default Main;
