import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import swi1 from '../../assets/home/slide1.jpg';
import swi2 from '../../assets/home/slide2.jpg';
import swi3 from '../../assets/home/slide3.jpg';
import swi4 from '../../assets/home/slide4.jpg';
import swi5 from '../../assets/home/slide5.jpg';
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const Category = () => {
  return (
    <>
        <SectionTitle
        subHeading={"From 11 AM to 10 PM"}
        heading={"Order"}>
            
        </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12 "
      >
        <SwiperSlide>
           <img src={swi1}/>
           <p className="-mt-12 text-center uppercase text-4xl text-white">Salad</p>
        </SwiperSlide>
        <SwiperSlide>
           <img src={swi2}/>
           <p className="-mt-12 text-center uppercase text-4xl text-white">Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
           <img src={swi3}/>
           <p className="-mt-12 text-center uppercase text-4xl text-white">Soup</p>
        </SwiperSlide>
        <SwiperSlide>
           <img src={swi4}/>
           <p className="-mt-12 text-center uppercase text-4xl text-white">Dissert</p>
        </SwiperSlide>
        <SwiperSlide>
           <img src={swi5}/>
           <p className="-mt-12 text-center uppercase text-4xl text-white">Salad</p>
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
};

export default Category;
