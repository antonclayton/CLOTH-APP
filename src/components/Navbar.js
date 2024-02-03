import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const[openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }

  useEffect(() => {
    const handleResize = () => {
      setOpenLinks(window.innerWidth <= 600) //set true if less than 600px
    }

    window.addEventListener('resize', handleResize); //activates if 'resize' occurs

    handleResize() //called initially once when the page is first rendered to check if the window is of a certain width

  },[]) //empty dependency array to make sure the effect only runs once

  return (
    <Stack className='navbar'
    direction='row'                 //styles
    justifyContent='flex-end'
    alignItems='baseline'
    backgroundColor="#000000">

        <Stack className='leftSide'> 
            
        </Stack>

        <Stack className='rightSide' 
        justifyContent='center' 
        direction='row'
        height='40px'
        padding='40px 100px'> 
          <div id={openLinks ? 'open' : 'closed'}>
            <Link to='/' className='link' style={{padding:'30px 100px', color: 'white', fontSize: '24px', textDecoration: 'none'}}>Search</Link>
            <Link to='/about' className='link'style={{padding: '30px 100px', color: 'white', fontSize: '24px', textDecoration: 'none'}}>About</Link>
            <Link to='/profile' className='link' style={{padding:'30px 100px', color: 'white', fontSize: '24px', textDecoration: 'none'}}>Profile</Link>
          </div>

          <button onClick={toggleNavbar}><MenuIcon/></button>
        </Stack>
    </Stack>
  )
}

export default Navbar