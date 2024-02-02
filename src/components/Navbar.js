import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => {
  return (
    <Stack className='navbar'
    direction='row'
    justifyContent='space-around'
    sx={{gap: '100px', height: "100px"}}
    backgroundColor="#000000"
    display= 'flex' flexDirection='right'>
        <div className='leftSide'>

        </div>

        <Stack className='rightSide' justifyContent='baseline' direction='row'>
            <Link to='/' style={{padding:'35px 100px', color: 'white'}}>Search</Link>
            <Link to='/about' style={{padding:'35px 100px', color: 'white'}}>About</Link>
            <Link to='/profile' style={{padding:'35px 0px 35px 100px', color: 'white'}}>Profile</Link>
        </Stack>
    </Stack>
  )
}

export default Navbar