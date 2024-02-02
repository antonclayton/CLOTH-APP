import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => {
  return (
    <Stack className='navbar'
    direction='row'
    justifyContent='space-around'
    sx={{gap: '100px', height: "100px", paddingTop: '20px'}}
    backgroundColor="#DDDDDD"
    display= 'flex' flexDirection='right'>
        <div className='leftSide'>

        </div>

        <div className='rightSide'>
            <Link to='/' style={{padding:'50px'}}>Search</Link>
            <Link to='/about' style={{padding:'50px'}}>About</Link>
            <Link to='/profile' style={{padding:'50px'}}>Profile</Link>
        </div>
    </Stack>
  )
}

export default Navbar