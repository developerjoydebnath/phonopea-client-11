import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useCustomerReview from '../../../hooks/useCustomerReview';
import AddReview from '../AddReview/AddReview';
import Review from './Review';

const CustomerReview = () => {
    const {reviews} = useCustomerReview();

    return (
        <div>
            <div className='mt-5'>
                <h4>Customer reviews (<small>Recent reviews</small>)</h4>
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className="mb-5"
                containerClass="container-with-dots"
                dotListClass=""
                draggable={true}
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable={true}
            >

                {
                    reviews.map(rvw=> <Review key={rvw?._id} rvw={rvw}/>)
                }
                
            </Carousel>
            <AddReview/>
        </div>
    );
};

export default CustomerReview;