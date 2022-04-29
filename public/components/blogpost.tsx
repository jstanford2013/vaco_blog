import React from 'react'
import {Card, Typography, Button, CardContent, CardActions} from '@mui/material'

export default function BlogPost(props){
    return (
        <Card sx={{ minWidth: 275 }} style={props.style}>
            <CardContent>
                <Typography variant="h5" component="div">
                {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.timestamp}
                </Typography>
                <Typography sx={{ fontSize: 8 }} color="text.secondary" gutterBottom>
                {props.id}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: props.text }}/>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined">Edit</Button>
                <Button size="small" variant="outlined">Delete</Button>
            </CardActions>
        </Card>
    )
}