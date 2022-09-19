import { Alert } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useCustomerReview from '../../../hooks/useCustomerReview';
import AddReview from '../AddReview/AddReview';
import Review from './Review';
import './CustomerReview.css';

const CustomerReview = () => {
    const { reviews, setReviews } = useCustomerReview();
    const [deleted, setDeleted] = useState(false);

    return (
        <div>
            <div className='mt-5 mb-3'>
                <h4 className='customer-review'>Customer reviews (<small>Recent reviews</small>)</h4>
                {deleted && <Alert severity='success' className=''>Deleted.</Alert>}
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows={true}
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className="mb-5 mt-2"
                containerClass="container-with-dots"
                dotListClass=""
                draggable={true}
                focusOnSelect={false}
                infinite
                itemClass="ps-2"
                keyBoardControl
                minimumTouchDrag={160}
                pauseOnHover
                removeArrowOnDeviceType={['mobile', 'tablet']}
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
                            max: 768,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 768
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
                    reviews.map(rvw => <Review key={rvw?._id} rvw={rvw} reviews={reviews} setDeleted={setDeleted} setReviews={setReviews} />)
                }

            </Carousel>
            <AddReview reviews={reviews} setReviews={setReviews} />
        </div>
    );
};

export default CustomerReview;