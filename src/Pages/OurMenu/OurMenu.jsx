import React from "react";
import { Helmet } from "react-helmet-async";
import Covered from "../Shared/Covered/Covered";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";


const OurMenu = () => {
  const [menu]=useMenu();
  const dessert=menu.filter(item=>item.category ==='dessert');
  const soup=menu.filter(item=>item.category ==='soup');
  const pizza=menu.filter(item=>item.category ==='pizza');
  const salad=menu.filter(item=>item.category ==='salad');
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss-OurMenu</title>
      </Helmet>

      <Covered img={menuImg}
      title="our menu"></Covered>
      
      
     
    </div>
  );
};

export default OurMenu;
