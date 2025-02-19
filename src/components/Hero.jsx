import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section style={{position: 'relative',width: '100%',height: '100%',marginLeft: 'auto', marginRight:'auto'}}>

      <div style={{...styles.paddingX.sm, position: 'absolute', 
        inset: 0, top: "120px",maxWidth: "80rem", margin:'auto',
        display:'flex', flexDirection:'row',alignItems:'flex-start',gap: '20px'}}>

          <div style={{display: 'flex', flexDirection: 'column',
             justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>

              <div style={{width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#915eff'}}/>
              <div style={{width: '4px', height: '160px', background: 'linear-gradient(180deg, #915eff, #d8b4fe)'}} />

          </div>
          <div>
            <h1 style={styles.heroHeadText}>Hi, I'm <span style={{color:'#915eff'}}>Sohan</span></h1>
            <p style={{...styles.heroSubText ,marginTop: '8px', color: '#f3f4f6'}}>I develop 3D visuals, user<br/> 
            interfaces and web applications</p>
          </div>
          <ComputersCanvas/>
      </div>
      </section>
  )
}

export default Hero