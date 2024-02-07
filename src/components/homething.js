import React from 'react'
import '../App.css';
import '../styles/homething.css';
import { Button } from '../components/Button';

function HomeThing() {
    return (
        <div className='home-container'>
            <section className='footer-subscription'>
            
        <div className='input-areas'>
          <form>
            <input
              className='user-input'
              name='email'
              type='input'
              placeholder='Search'
            />
            <Button buttonStyle='btn--outline'>Search</Button>
          </form>
        </div>
      </section>
        </div>
    )
}

export default HomeThing