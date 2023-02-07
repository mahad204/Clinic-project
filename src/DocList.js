import {  Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'

import docImg from "./static/images/cards/doc.jpg"
import docImg1 from "./static/images/cards/doc1.jpg"
import docImg2 from "./static/images/cards/doc2.jpg"
const docImgArray = [docImg, docImg1, docImg2];
function DocList({myDocs,handleDelete}) {
  return (
    <div className='doc-list'>
        {myDocs.map((doc) => (
          
            <Card sx={{ maxWidth: 345 }} className = 'doc-preview' style={{ backgroundColor: 'lightblue' }} key={doc.id}>
              <CardHeader title={doc.title}/>{doc.specialty}<CardMedia
                component="img"
                height="194"
                image={docImgArray[2]}
                alt="Doctor image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Doctor with massive experience
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <button onClick={() => handleDelete(doc.id)}>Delete</button>
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
            
        // <div className="doc-preview" key={doc.id}>
        //   <h2>{doc.title}</h2>
        //   <p>{doc.specialty}</p>
        //   <button onClick={() => handleDelete(doc.id)}>Delete</button>
        // </div>
        ))}
    </div>
    
  )
}

export default DocList