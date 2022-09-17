import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { green } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import { useEffect } from 'react';

const Review = ({ rvw }) => {
    const {name, nameFirstLetter, review, date, color} = rvw;
    const [avatarColor, setAvatarColor] =useState(green);
    const g = (color === 'green')
    const b = (color === 'blue')
    const o = (color === 'orange')
    const r = (color === 'red')
    

    useEffect(()=> {
        if(g){
            setAvatarColor(green)
        }
        if(b){
            setAvatarColor(blue)
        }
        if(o){
            setAvatarColor(orange)
        }
        if(r){
            setAvatarColor(red)
        }
    },[])

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
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
                </CardActions>
            </Card>
        </div>
    );
};

export default Review;