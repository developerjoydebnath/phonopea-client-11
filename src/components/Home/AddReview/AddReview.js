import { Alert } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './AddReview.css';

const AddReview = ({reviews, setReviews}) => {
    const [user] = useAuthState(auth);
    const [reviewDone, setReviewDone] = useState(false);
    const userName = user?.displayName;
    const navigate = useNavigate();

    // const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const colors = ['red', 'green', 'blue', 'orange'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const review = e.target.review.value;
        const userEmail = user?.email;
        const newDate = new Date();
        const todayDate = newDate.getDate();
        const year = newDate.getFullYear();
        // const dayName = weekday[newDate.getDay()]
        const monthName = monthNames[newDate.getMonth()];
        const date = `${monthName} ${todayDate},${year}`;
        const nameFirstLetter = user?.displayName.slice(0, 1);
        const reviewObject = { name, review, date, nameFirstLetter, color, userEmail };
        const previousReviews = [...reviews];
        const { data } = await axios.post(`http://localhost:5000/addReview`, reviewObject);
        if (data?.acknowledged) {
            const newObject = { ...reviewObject, _id: data?.insertedId };
            previousReviews.push(newObject);
            console.log(previousReviews);
            setReviews(previousReviews);
            e.target.reset();
            setReviewDone(true);
            setTimeout(() => {
                setReviewDone(false);
            }, 1500);
        }
    }

    return (
        <div className='add-review-container'>
            <h2>Add a review</h2>
            <span>{reviewDone && <Alert className='py-0 d-flex justify-content-center mx-auto' severity='success' >Review added</Alert>}</span>
            <div className='review-inner-div'>
                {
                    user ?
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" className='review-input' name="name" value={userName} readOnly /> <br />
                            <label htmlFor="review">Review:</label>
                            <textarea name="review" className='review-area' placeholder='Write a review' id="" cols="30" rows="2" required ></textarea> <br />
                            <input type="submit" className='review-btn' value="Submit" />
                        </form>
                        :
                        <form>
                            <Alert severity='warning'>Please login first to give a review!</Alert>
                            <label htmlFor="name">Name:</label>
                            <input type="text" className='review-input' name="name" placeholder='' value='Please login to give a review' readOnly /> <br />
                            <label htmlFor="review">Review:</label>
                            <textarea name="review" className='review-area' placeholder='Write a review' id="" cols="30" rows="2" disabled ></textarea> <br />
                            <input type="submit" className='disabled-btn' value="Submit" disabled />
                            <input type="button" className='review-btn' onClick={() => navigate('/login')} value="Login" />
                        </form>
                }
            </div>
        </div>
    );
};

export default AddReview;