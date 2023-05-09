import * as React from 'react';
import { useState } from 'react'; 
import { useEffect } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@mui/material';


const LikeReview = ()=> {

    const [currentCountLikes, setCountLike] = useState(0);
    
    useEffect(()=> {
       console.log("Gracias por su valoracion positiva")
    }, currentCountLikes); 

    return(
        <div>
             
            <IconButton>
                <ThumbUpIcon>
                    <button onClick={() => setCountLike(currentCountLikes + 1)}></button>
                </ThumbUpIcon> 
                <b>{currentCountLikes}</b>
            </IconButton>
        </div>
           
    );
};

export default LikeReview; 