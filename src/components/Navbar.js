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
            <Link to='/' style={{padding:'30px 100px', color: 'white', fontSize: '24px', textDecoration: 'none'}}>Search</Link>
            <Link to='/about' style={{padding: '30px 100px', color: 'white', fontSize: '24px', textDecoration: 'none'}}>About</Link>
            <Link to='/profile' style={{padding:'30px 0px 30px 100px', color: 'white', fontSize: '24px', textDecoration: 'none'}}>Profile</Link>
        </Stack>
    </Stack>
  )
}

export default Navbar