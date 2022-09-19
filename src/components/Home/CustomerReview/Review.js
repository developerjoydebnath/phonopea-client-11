import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import { green } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';

const Review = (props) => {
    const { name, nameFirstLetter, review, date, color, _id, userEmail } = props?.rvw;
    const [avatarColor, setAvatarColor] = useState(green);
    const [user] = useAuthState(auth);
    const g = (color === 'green');
    const b = (color === 'blue');
    const o = (color === 'orange');
    const r = (color === 'red');




    useEffect(() => {
        if (g) {
            setAvatarColor(green)
        }
        if (b) {
            setAvatarColor(blue)
        }
        if (o) {
            setAvatarColor(orange)
        }
        if (r) {
            setAvatarColor(red)
        }
    }, [])

    const handleDeleteReview = async () => {
        const confirm = window.confirm('Do you want to delete this review');
        if (confirm) {
            const { data } = await axios.delete(`https://warehouse-manager-258000.herokuapp.com/deleteReview?id=${_id}&email=${user?.email}&userEmail=${userEmail}`)
            if (data?.deletedCount === 1) {
                const matched = props?.reviews.filter(r => r._id !== _id)
                props?.setDeleted(true);
                props?.setReviews(matched);
                setTimeout(() => {
                    props?.setDeleted(false)
                }, 1500);
            }
        }
    }

    return (
        <div>
            <Card sx={{ maxWidth: 350, border: "1px solid #e8e8e8", boxShadow: "1px 1px 10px 2px rgba(0, 0, 0, 0.198)", marginBottom: '5px', marginTop: '5px' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: avatarColor[500] }} aria-label="recipe">
                            {nameFirstLetter}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={name}
                    subheader={date}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {review}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    {
                        user?.email === userEmail || user?.email === "joydebnathjp017@gmail.com" ?
                            <IconButton onClick={handleDeleteReview} aria-label="share">
                                <DeleteIcon />
                            </IconButton>
                            :
                            <IconButton disabled aria-label="share">
                                <DeleteIcon />
                            </IconButton>
                    }
                </CardActions>
            </Card>
        </div>
    );
};

export default Review;