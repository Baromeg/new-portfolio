import React from "react"
import styled from "styled-components"
// Animations
import { motion } from "framer-motion"
import { pageAnimation, titleAnimation } from "../Animation"
import ScrollTop from "../components/ScrollTop"

const Contact = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: "#fff" }}
    >
      <ScrollTop/>
      <StyledTitle>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </Hide>
      </StyledTitle>
      <div>

      <Hide>
        <Social variants={titleAnimation}>
          <Circle>
            <h2>Send me a message</h2>
          </Circle>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnimation}>
          <Circle>
            <h2>Send me a message</h2>
          </Circle>
        </Social>
        </Hide>
        </div>

    </StyledContact>
  )
}

const StyledContact = styled(motion.div)`
  padding: 5 rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`
const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`

const Hide = styled.div`
  overflow: hidden;
`

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`

export default Contact
