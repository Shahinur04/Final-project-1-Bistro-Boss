import React from "react";
import { Helmet } from "react-helmet-async";
import Covered from "../Shared/Covered/Covered";
import menuImg from "../../assets/menu/menu-bg.png";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss-OurMenu</title>
      </Helmet>

      <Covered img={menuImg}></Covered>
    </div>
  );
};

export default OurMenu;
