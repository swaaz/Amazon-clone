import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img 
                className='home_image'
                src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg' />
            </div>

            <div className='home_row'>
            <Product />
            <Product />
            {/* <Product /> */}

            </div>

            <div className='home_row'>
            <Product />
            <Product />
            <Product />
            </div>

            <div className='home_row'>
            <Product />
           
            </div>
        

            
        </div>
    );
}
export default Home;
