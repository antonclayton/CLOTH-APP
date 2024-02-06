/*import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const[openLinks, setOpenLinks] = useState(true); //openLinks is current state; setOpenLinks acts on that state; useState(initial state is true)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks) //flip from true -> false or false -> true
  }

  useEffect(() => {
    const handleResize = () => {
      setOpenLinks(window.innerWidth > 950) //set true if greater 600px
      // console.log(window.innerWidth > 800);
      // console.log(window.innerWidth) debugging
    }

    window.addEventListener('resize', handleResize); //activates if 'resize' occurs

    handleResize() //called initially once when the page is first rendered to check if the window is of a certain width

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[]) //empty dependency array to make sure the effect only runs once

  return (
    <Stack className='navbar'
    direction='row'                 //styles
    justifyContent='flex-end'
    alignItems='baseline'
    backgroundColor="#000000">

        <Stack className='rightSide' 
        justifyContent='center' 
        direction='row'
        height='40px'
        margin='45px 100px'> 
          <div className={openLinks ? 'open' : 'closed'}>
            <Link to='/' className='link' style={{margin:'25px 25px', padding: '15px 25px', color: 'white', fontSize: '24px', textDecoration: 'none', border: '1px solid white', borderRadius: '10px'}}>Search</Link>
            <Link to='/about' className='link'style={{margin: '25px 25px', padding: '15px 25px', color: 'white', fontSize: '24px', textDecoration: 'none', border: '1px solid white', borderRadius: '10px'}}>About</Link>
            <Link to='/profile' className='link' style={{margin:'30px 25px', padding: '25px 15px 10px 15px', color: 'white', fontSize: '24px', textDecoration: 'none', border: '1px solid white', borderRadius: '50px'}}><AccountCircle fontSize='large'/></Link>
          </div>

          <button onClick={toggleNavbar} id='toggle'><MenuIcon fontSize='large'/></button>
        </Stack>
    </Stack>
  )
}

export default Navbar */