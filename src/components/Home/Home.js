import React from 'react';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import Chart from './Chart/Chart';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Chart></Chart>
            <Brands></Brands>
        </div>
    );
};

export default Home;