import React from 'react';
import 'swiper/css';
import sliderImg1 from '../../../../images/banner/banner1.png'
import sliderImg2 from '../../../../images/banner/banner2.png'
import sliderImg3 from '../../../../images/banner/banner3.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css'
import ShortPhone from '../../ShortPhone/ShortPhone';
import PageTitle from '../../../Shared/PageTitle';
import CustomerReview from '../../CustomerReview/CustomerReview';
import Partners from '../../Partners/Partners';
import ContactMe from '../../ContactMe/ContactMe';
import AboutUs from '../../AboutUs/AboutUs';
import FAQ from '../../../FAQ/FAQ';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='container'>
                <PageTitle title='Home' />
                <div className="slider pt-4">
                    <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
                        <div className="slider-img">
                            <img src={sliderImg1} alt='' />
                        </div>
                        <div className="slider-img">
                            <img src={sliderImg2} alt='' />
                        </div>
                        <div className="slider-img">
                            <img src={sliderImg3} alt='' />
                        </div>
                    </Carousel>
                    <ShortPhone />
                    <Partners/>
                    <AboutUs/>
                    <CustomerReview />
                    <ContactMe/>
                    <FAQ/>
                </div>
            </div>
        </div>
    );
};

export default Home;