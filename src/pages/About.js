import React from 'react'
import { Stack, Typography } from '@mui/material'
import '../styles/About.css'

const About = () => {
  return (
    <body>
      <div className="about-header-container">
        <h1 className='about-header'>About CLOTH</h1>
        
        

      </div>
      <div className="header-image">j</div>
      <div className='about-container'>
        
        <p className='about-paragraph'>CLOTH is a search engine for secondhand / 
        vintage clothes that pulls from websites such as Grailed, Mercari, Poshmark, etc.
        We are currently in the development stage and will be adding features as we finish them. 
        Grailed will most likely be the first marketplace we will implement to our search engine</p>
      </div>
    </body>
    
  )
}

{/* <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      padding='0 0 100px 0'>
        <Typography variant='h2' padding='0 0 40px 0'>About CLOTH</Typography>
        <Typography variant='h5'>CLOTH is a search engine for secondhand / vintage clothes that pulls from websites such as Grailed, Mercari, Poshmark, etc</Typography>
      </Stack> */}

export default About