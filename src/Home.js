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
            <Product title='HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black ' price={279.99} image='https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SY550_.jpg' rating={4}  />
            <Product title='Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics' price={694.95} image='https://images-na.ssl-images-amazon.com/images/I/71Ji9RvCfXL._AC_SX466_.jpg' rating={5}  />
            {/* <Product /> */}

            </div>

            <div className='home_row'>
            <Product title='DualShock 4 Wireless Controller for PlayStation 4 - Magma Red ' price={64.99} image='https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg' rating={3}  />
            <Product title='Echo (3rd Gen) bundle with Amazon Smart Plug - Charcoal ' price={649.00} image='https://images-na.ssl-images-amazon.com/images/I/61iOgNYmTHL._AC_SX679_.jpg' rating={5}  />

            <Product title='Darksiders Genesis - Nephilim Edition - PC Nephilim Edition' price={54.00} image='https://images-na.ssl-images-amazon.com/images/I/517J1Mfca0L._AC_SY200_.jpg' rating={4}  />

            </div>

            <div className='home_row'>
            <Product title=' LG 34WK650-W 34" UltraWide 21:9 IPS Monitor with HDR10 and FreeSync (2018),Black/White  ' price={39.00} image='https://images-na.ssl-images-amazon.com/images/I/819F1MjJJ8L._AC_SY450_.jpg' rating={2}  />

            </div>
        

            
        </div>
    );
}
export default Home;
