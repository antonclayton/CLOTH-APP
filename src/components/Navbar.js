import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => {
  return (
    <Stack className='navbar'
    direction='row'
    justifyContent='flex-end'
    alignItems='baseline'
    backgroundColor="#000000">
        <div className='leftSide'>

        </div>

        <Stack className='rightSide' justifyContent='baseline' direction='row'>
            <Link to='/' className='link' style={{padding:'30px 100px', color: 'white', fontSize: '24px', textDecoration: 'none'}}>Search</Link>
            <Link to='/about' className='link'style={{padding: '30px 100px', color: 'white', fontSize: '24px', textDecoration: 'none'}}>About</Link>
            <Link to='/profile' className='link' style={{padding:'30px 100px', color: 'white', fontSize: '24px', textDecoration: 'none'}}>Profile</Link>
        </Stack>
    </Stack>
    //asdasdasdasd
  )
}

export default Navbar