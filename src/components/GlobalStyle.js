import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html{
  @media (max-width: 1700px) {
    font-size: 75%
  }
  
}

body {
  background: #1b1b1b;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

button {
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #fc8621;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: 'Inter', sans-serif;
  margin-top: 1.5rem;
  &:hover{
    background-color: #fc8621;
    color: white;
  }
}
h1 {
  font-weight: lighter;
  font-size:6rem;
}
h2 {
  font-weight: lighter;
  font-size:4rem;
}

h3 {
  color: white;
}

h4{
  font-weight:bold;
  font-size: 2rem;
}

a{
  font-size: 1.7rem;
}

span {
  font-weight:bold;
  color:#fc8621
}

p {
  padding: 1.5rem 0rem;
  color: white;
  font-size: 1.4rem;
  line-height: 150%;
}
`
export default GlobalStyle
