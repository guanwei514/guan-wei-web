import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import logoW from "../../assets/images/logo_w.svg";
import { useHistory } from "react-router-dom";
import { useTranslation } from "../../langs/useTranslation";
import LangSelect from "../common/LangSelect";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BuildIcon from "@mui/icons-material/Build";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Navbar = () => {
  const { t } = useTranslation("common");
  const [showDrawer, setShowDrawer] = useState(false);
  const history = useHistory();
  const scrollTo = (number, time, element) => {
    if (!time) {
      document.body.scrollTop = document.documentElement.scrollTop = number;
      return number;
    }
    const top1 = document.documentElement.scrollTop;
    const top2 = document.querySelector(element).offsetTop;
    const spacingTime = 20; // 設置循環的間隔時間  值越小消耗性能越高
    let spacingInex = time / spacingTime; // 計算循環的次數
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 獲取當前滾動條位置
    let everTop = (top2 - top1) / spacingInex; // 計算每次滑動的距離
    let scrollTimer = setInterval(function () {
      if (spacingInex > 0) {
        spacingInex--;
        scrollTo((nowTop += everTop));
      } else {
        clearInterval(scrollTimer);
      }
    }, spacingTime);
  };

  const clickHandler = (title) => {
    scrollTo(0, 600, `.${title}`);
  };
  
  const list = () => (
    <Box
      role="presentation"
      onClick={() => setShowDrawer(false)}
      onKeyDown={() => setShowDrawer(false)}
    >
      <img src={logoW} alt="logo" onClick={() => history.push("/main")} />
      <List>
        {navItems.map((e) => (
          <ListItem button key={e.title}>
            <ListItemIcon>{e.icon}</ListItemIcon>
            <ListItemText primary={t(e.title)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const navItems = [
    { title: "home", router: "#home", icon: <HomeIcon />, active: true },
    { title: "about", router: "#about", icon: <AssignmentIndIcon /> },
    { title: "skill", router: "#skill", icon: <BuildIcon /> },
    { title: "project", router: "#project", icon: <BusinessCenterIcon /> },
    { title: "contact", router: "#contact", icon: <ContactMailIcon /> },
  ];

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" onClick={() => clickHandler("home")} />
      </div>
      <div className="navbar-right">
        <div className="navbar-items">
          {navItems.map((e) => (
            <div
              key={e.title}
              className={`navbar-item ${e.title}-nav ${e.active && "active"}`}
              onClick={() => clickHandler(e.title)}
            >
              {t(`${e.title}`)}
            </div>
          ))}
        </div>
        <div>
          <div className="navbar-rwd-button">
            <DehazeIcon onClick={() => setShowDrawer(!showDrawer)} />
          </div>
        </div>
        <LangSelect />
      </div>
      <SwipeableDrawer
        anchor="top"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        onOpen={() => setShowDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
