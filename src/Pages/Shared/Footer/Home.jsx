import React from 'react';
import Banner from '../../Home/Banner';
import Category from '../../Category/Category';
import Menu from '../../Menu/Menu';
import Featured from '../../Featured/Featured';
import Testimonials from '../../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;