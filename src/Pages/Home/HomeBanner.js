import React from 'react';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div>
            <section id="home">
                <div class="home_page ">
                    <div class="home_img ">
                        <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img " />
                    </div>
                    <div class="home_txt ">
                        <p class="collectio ">SUMMER COLLECTION</p>
                        <h2>FALL - WINTER<br />Collection 2023</h2>
                        <div class="home_label ">
                            <p>A specialist label creating luxury essentials. Ethically crafted<br />with an unwavering commitment to exceptional quality.</p>
                        </div>
                        <button><a href="#">SHOP NOW</a><i class='bx bx-right-arrow-alt'></i></button>
                        <div class="home_social_icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-twitter'></i></a>
                            <a href="#"><i class='bx bxl-pinterest'></i></a>
                            <a href="#"><i class='bx bxl-instagram'></i></a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomeBanner;