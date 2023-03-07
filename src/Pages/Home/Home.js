import React from 'react';
import HomeBanner from './HomeBanner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <div>
                <HomeBanner></HomeBanner>
            </div>

            <div className='mt-20 pt-8 text-center'>
                <h1 className='text-5xl font-bold text-red-400 m-4'>LATEST NEWS</h1>
                <h2 className='text-3xl font-semibold'>Fashion New Trends</h2>
            </div>
            <div className='mt-8 pt-8'>
                <Products></Products>
            </div>
        </div>
    );
};

export default Home;