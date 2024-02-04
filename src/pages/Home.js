import React from 'react'
import { TextField, Box, Stack, Typography, Button } from '@mui/material'

const Home = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    margin='200px 0px'>
      <Stack width='50%'>
        <Typography variant='h4' padding='20px 20px 20px 40px'>
          Search for clothes:
        </Typography>
        <TextField style={{padding: '0px 0px 10px 0px'}}label='' variant='outlined'/>
        <Button style={{width: '25%'}} variant='contained' color='secondary'>Search</Button>
      </Stack>
    </Box>
  )
}

export default Home