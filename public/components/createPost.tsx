import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Stack } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

async function CreatePost(title, content) { 
  const url = "https://us-central1-mbtcandidate.cloudfunctions.net/posts/jjohnson"
  var date = new Date().toLocaleString();
  var input = { title: title, text: content, timestamp: date, id: uuidv4()}

  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
      'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(input)
  });
  console.log(response.json)
  return response.json(); // parses JSON response into native JavaScript objects
  
}

export default function CreatePostButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [titleInput, setTitletInput] = useState('');
  const [contentInput, setContentInput] = useState('');


  const handleTitleInputChange = event => {
    setTitletInput(event.target.value);
  };
  const handleContentInputChange = event => {
      setContentInput(event.target.value);
  };

  const handleCreatePost = (title, content) =>
  {
    CreatePost(title, content)
    setOpen(false)
  }

  return (
    <div>
      <Button variant='outlined' onClick={handleOpen}>Create Blog Post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} spacing={4}>
          <Typography id="modal-modal-description">
            Create your own blog post!
          </Typography>
          <TextField id="outlined-basic" label="Title" variant="outlined" onChange={handleTitleInputChange}/>
          <TextField id="outlined-basic" label="Content" variant="outlined" onChange={handleContentInputChange} multiline placeholder="Type the content of your blog post here!"/>
          <Button onClick={() => {handleCreatePost(titleInput, contentInput)}} variant='outlined'>Create Post!</Button>
        </Stack>
      </Modal>
    </div>
  );
}
