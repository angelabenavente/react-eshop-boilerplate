import * as React from 'react';
import { useState } from 'react'; 
import { useEffect } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@mui/material';


const LikeReview = ()=> {

    const [currentCountLikes, setCountLike] = useState(0);
    
    useEffect(()=> {
    console.log("Gracias por su valoracion positiva", currentCountLikes)
    }, [currentCountLikes]); 

    return(
        <div>
              <button backgroundColor= "#1976d2 !important" onClick={() => {setCountLike(currentCountLikes + 1); console.log("onclick", currentCountLikes + 1)}} >
              <IconButton>
                <ThumbUpIcon> 
                </ThumbUpIcon> 
            </IconButton>\
              </button>
            
            <b>{currentCountLikes}</b>
        </div> 
    );
};

export default LikeReview; 