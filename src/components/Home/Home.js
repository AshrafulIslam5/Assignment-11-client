import React from 'react';
import Banner from './Banner/Banner';
import Chart from './Chart/Chart';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Chart></Chart>
        </div>
    );
};

export default Home;