import React from "react";
import Banner from "../../Home/Banner";
import Category from "../../Category/Category";
import Menu from "../../Menu/Menu";
import Featured from "../../Featured/Featured";
import Testimonials from "../../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss-Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Menu></Menu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
