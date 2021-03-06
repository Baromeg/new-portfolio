import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fade } from '../Animation'

import ThemeToggle from './ThemeToggle'

const Navbar = ({ theme, themeToggler }) => {
  const { pathname } = useLocation()
  return (
    <StyledNavbar>
      <motion.div variants={fade}>
        <Link id='logo' to='/'>
          <svg
            width='50'
            height='50'
            viewBox='0 0 282 202'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M46.592 202H0.512002V0.399986H35.648C60.992 0.399986 80.096 5.10399 92.96 14.512C105.824 23.728 112.256 36.784 112.256 53.68C112.256 72.88 104.192 86.992 88.064 96.016C111.488 104.848 123.2 121.456 123.2 145.84C123.2 163.12 116.864 176.848 104.192 187.024C91.52 197.008 72.32 202 46.592 202ZM46.592 193.36C55.616 193.36 63.872 192.688 71.36 191.344C78.848 189.808 85.952 187.408 92.672 184.144C99.584 180.688 104.96 175.696 108.8 169.168C112.64 162.64 114.56 154.864 114.56 145.84C114.56 125.296 104.672 111.376 84.896 104.08L67.616 97.744L83.744 88.528C96.992 81.232 103.616 69.616 103.616 53.68C103.616 23.92 80.96 9.04 35.648 9.04H9.152V193.36H46.592ZM189.757 193.36H269.245L234.397 97.744L250.525 88.528C263.773 81.232 270.397 69.616 270.397 53.68C270.397 23.92 247.741 9.04 202.429 9.04H175.933V202H167.293V0.399986H202.429C227.773 0.399986 246.877 5.10399 259.741 14.512C272.605 23.728 279.037 36.784 279.037 53.68C279.037 72.88 270.973 86.992 254.845 96.016L245.053 101.488L281.629 202H189.757V193.36Z' />
          </svg>
        </Link>
        {/* </h1> */}
      </motion.div>

      <ul>
        <li>
          <Link to='/'>About Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/myprojects'>My Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/myprojects' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/contact'>Get in Touch</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '100%' : '0%' }}
          />
        </li>
      </ul>
      <div id='toggle'>
        <ThemeToggle theme={theme} toggleTheme={themeToggler} />
      </div>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  min-height: 7vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 10rem;
  background-color: ${({ theme }) => theme.navbarBackground};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    @media (max-width: 667px) {
      font-size: 120%;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    svg {
      padding-top: 1rem;
      fill: ${({ theme }) => theme.text};
    }
    font-size: 4rem;
    font-family: 'Megrim', cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 8rem;
    position: relative;
    font-family: 'Megrim', cursive;
    align-content: center;
    a {
      font-size: 2rem;
    }
    @media (max-width: 414px) {
      a {
        font-size: 1.8rem;
      }
    }
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    #logo {
      font-size: 2.5rem;
      padding: 0.5rem 0rem;
      order: 0;
    }
    #toggle {
      padding: 0.5rem 0rem;
      order: 1;
    }
    ul {
      order: 2;
      padding: 0.5rem 0rem 1rem 0rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
  @media (max-width: 667px) {
    padding: 1rem 0 0 0;
  }
`

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #fc8621;
  width: 0%;
  position: absolute;
  bottom: -30%;
  left: 40%;
  @media (max-width: 1300px) {
    width: 80%;
    left: 0%;
  }
`
export default Navbar
