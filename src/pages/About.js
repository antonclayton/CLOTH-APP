import React from 'react'
import { Stack, Typography, Box, Container } from '@mui/material';

const About = () => {
  return (
    <Box style={{width: '50%'}} direction='row' alignItems='center' 
    backgroundColor='#FDB0C0' 
    margin='100px 0px 100px 100px'
    border='2px solid #313639'
    borderRadius='50px'>
      <Stack
      direction='column'
      alignItems='flex-start'
      justifyContent='center'
      spacing={4}
      margin='100px 140px'
      >
        <Typography variant='h3' padding='0px 75px' color='#313639'>
          Clothing Search Engine
        </Typography>

        <Typography variant='h6' padding='20px 0px' color='grey'>
          This project uses gem.app as a reference and attempts to recreate the search capabilities for 
          secondhand / vintage items. Currently, we are at the frontend stage of the project where we are
          utilizing React.js. The next step would be to create a web scraping bot to extract information
          from websites such as Grailed. Then, we would need to figure out how to use our search engine to connect to that information
        </Typography>
      </Stack>
      
      </Box>
    
  )
}

export default About