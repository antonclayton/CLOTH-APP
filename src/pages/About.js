import React from 'react'
import { Stack, Typography } from '@mui/material'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-header'>About CLOTH</h1>
      <p className='about-paragraph'>CLOTH is a search engine for secondhand / vintage clothes that pulls from websites such as Grailed, Mercari, Poshmark, etc</p>
    </div>
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