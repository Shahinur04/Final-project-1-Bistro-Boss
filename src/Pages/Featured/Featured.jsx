import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featured from "../../assets/home/featured.jpg";
import './featured.css';
const Featured = () => {
  return (
    < div className="featured-img mb-12 mt-12 pt-10 bg-fixed">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"featured item"}
      ></SectionTitle>
      <div className="md:flex justify-center  items-center py-7 px-14 bg-slate-500 bg-opacity-50 ">
        <div className="m-10">
        <img src={featured} />
        </div>
        <div className="text-white ml-10">
          <p>August , 20, 2023</p>
          <p className="uppercase">Where can i get some ?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
            deleniti, consectetur fugiat ea pariatur laborum asperiores est a
            quaerat, ad neque minima excepturi aperiam veritatis!
          </p>
          <button className="btn btn-outline text-black border-0 border-b-4">Readme More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
