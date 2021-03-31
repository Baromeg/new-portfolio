import React from 'react'
import baltasar from '../img/Baltasar.jpeg'

// Framer Motion
import { motion } from 'framer-motion'
import { fade, photoAnimation } from '../Animation'

// Style
import styled from 'styled-components'
import {
  StyledGlobal,
  StyledDescription,
  StyledImg,
  StyledHide
} from '../styles'

// Animation
import { scrollReveal } from '../Animation'
import { UseScroll } from './UseScroll'

const About = () => {
  const [element, controls] = UseScroll()

  return (
    <StyledHide>
      <StyledAbout
        variants={scrollReveal}
        initial='hidden'
        animate={controls}
        ref={element}
      >
        <AboutDescription>
          <h2>About me</h2>
          <motion.div
          // variants={titleAnimation}
          // initial="hidden"
          // animate="show"
          // className='title'
          >
            <StyledHide>
              <motion.p>
                Hi!<span> I'm Baltasar</span>, self-taught and graduated
                <span> full-stack software engineer</span> with an ever-evolving portfolio backing my worth and potential.
              </motion.p>
            </StyledHide>
            <StyledHide>
              <motion.p>
              I seek my first <span>React</span>, <span>JavaScript</span> or <span>Python</span>  developer role to demonstrate my <span> adaptability</span> & <span>dedication</span>, <span>communication</span> & <span>problem-solving</span> skills, impacting real-world applications on both sides of the stack.
              </motion.p>
            </StyledHide>
            <StyledHide>
              <motion.p>
              After more than 12 years of hospitality background,<span> I've taken the risk</span> of a career shift, <span>confident</span> that the blend of my <span>professional trajectory</span>, geeky mindset, passion for <span>constant learning</span> & <span>self-improvement</span>, and <span>resilience</span> confronting a challenge is a <span>strong endorsement of my capabilities</span>.
              </motion.p>
            </StyledHide>
          </motion.div>
          
          <motion.p variants={fade}><u>As a hotelier</u>, I've thrived on leading & motivating people, communicating & improving operational processes, ultimately creating memorable customer's experiences. <br/> <u>As a developer</u>, I'm ready to thrive again as build great apps! <br/> <span>Can you imagine what else I can achieve if I get a chance?</span> </motion.p>
          <motion.button variants={fade}>Get in touch</motion.button>
        </AboutDescription>
        <StyledImg>
          <motion.img
            variants={photoAnimation}
            // initial="hidden"
            // animate="show"
            src={baltasar}
            alt=''
          />
        </StyledImg>
      </StyledAbout>
    </StyledHide>
  )
}
const StyledAbout = styled(StyledGlobal)`
  @media (max-width: 1300px) {
    display: block;
    /* padding: 5rem 4rem; */
    text-align: center;
    width: 100%;
  }
  @media (max-width: 414px) {
    /* padding: 5rem 4rem; */
    padding: 2rem 3rem;
  }
`
const AboutDescription = styled(StyledDescription)`
  @media (max-width: 1450px) {
    p {
      font-size: 1.2rem;
      padding-right: 2rem;
    }
    padding: 0rem;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
  @media (max-width: 414px) {
    p {
      padding-top: 0.5rem;
    }
    button {
      margin: 1rem 0rem 5rem 0rem;
    }
  }
`

export default About
