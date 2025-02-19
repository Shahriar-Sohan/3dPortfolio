import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants/index'
import { logo, menu, close } from '../assets'


const Navbar = () => {

  const isSmallScreen = window.innerWidth >= 640; // Check if the screen size is >= 640px

  const spanStyle = {
    display: isSmallScreen ? 'block' : 'inline', // Apply 'block' for sm and 'inline' otherwise
  };





  const [active, setActive] = useState()



  return (
    <nav style={{
      ...styles.paddingX.default, width: '100%',
      alignItems: 'center', paddingTop: '1.25rem', display: 'flex', paddingBottom: '1.25rem',
      position: 'fixed', top: '0', left: '0', zIndex: 20, colorScheme: 'dark', backgroundColor: '#000B18'
    }} >

      <div style={{
        width: '100%', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto'
      }} >

        <Link style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', }}
          to='/'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}>

          <img src={logo} alt='logo' style={{ width: '36px', height: '36px', objectFit: 'contain' }} />

          <p style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
            Shahriar Sohan | <span style={spanStyle} >Rivalry</span></p>
        </Link>
            <ul style={{listStyleType: 'none', display: isSmallScreen ? 'flex' : 'none',
                flexDirection: 'row', gap: '2.5rem', }}
              >
                {navLinks.map((link)=>(
                  <li key={link.id} style={{}}>
                    <a href= {`#${link.id}`}>{link.title}</a>
                  </li>
                ))}

        </ul>

      </div>

    </nav>
  )
}

export default Navbar