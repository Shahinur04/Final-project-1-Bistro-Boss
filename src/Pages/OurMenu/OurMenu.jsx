import React from "react";
import { Helmet } from "react-helmet-async";
import Covered from "../Shared/Covered/Covered";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const OurMenu = () => {
  const [menu]=useMenu();
  const dessert=menu.filter(item=>item.category ==='dessert');
  const soup=menu.filter(item=>item.category ==='soup');
  const pizza=menu.filter(item=>item.category ==='pizza');
  const salad=menu.filter(item=>item.category ==='salad');
  const offered=menu.filter(item=>item.category ==='offered');
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss-OurMenu</title>
      </Helmet>

      <Covered img={menuImg}
      title="our menu"></Covered>
      <SectionTitle subHeading={"Don't Mis"} heading={"Today's Offer"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert} img={dessertImg} title={'dessert'}></MenuCategory>
      <MenuCategory items={soup} img={soupImg} title={'soup'}></MenuCategory>
      <MenuCategory items={pizza} img={pizzaImg} title={'pizza'}></MenuCategory>
      <MenuCategory items={salad} img={saladImg} title={'salad'}></MenuCategory>
      
     
    </div>
  );
};

export default OurMenu;
