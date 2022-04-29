import React from 'react'
import { Toolbar, AppBar, Typography, IconButton, Button, Stack } from '@mui/material'

function MyApp({ Component, pageProps }) {
  return <Stack spacing={8}>
    <AppBar>
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Blog
          </Typography>
          <Button variant="outlined">Create Blog Post</Button>
        </Toolbar>
    </AppBar>
    <Component {...pageProps} />
    
    </Stack>
}

export default MyApp
