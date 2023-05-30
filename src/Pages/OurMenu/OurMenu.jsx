import React from "react";
import { Helmet } from "react-helmet-async";
import Covered from "../Shared/Covered/Covered";
import menuImg from "../../assets/menu/banner3.jpg";
import Menu from "../Menu/Menu";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss-OurMenu</title>
      </Helmet>

      <Covered img={menuImg}
      title="our menu"></Covered>
      <Menu></Menu>
      <Covered img={menuImg}
      title="our menu"></Covered>
      <Menu></Menu>
      <Covered img={menuImg}
      title="our menu"></Covered>
      <Menu></Menu>
      <Covered img={menuImg}
      title="our menu"></Covered>
      <Menu></Menu>
      
     
    </div>
  );
};

export default OurMenu;
