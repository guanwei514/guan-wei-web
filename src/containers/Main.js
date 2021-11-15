import React from "react";
import { useHistory } from "react-router-dom";
import Banner from "../components/main/Banner";

const Main = () => {
  const history = useHistory();
  return (
    <>
      <Banner history={history} />
    </>
  );
};
export default Main;
