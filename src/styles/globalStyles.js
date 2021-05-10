import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    * {
        text-decoration: none;
        font-family: 'Roboto';
        color: #323434;
    }

    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    body {
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

export const StyledConstructionSite = styled.div`
  margin: 8rem auto;
  margin: 8rem auto;
  background-color: black;
  text-align: center;
  font-size: 4rem;
  padding: 2rem;
  border-radius: 12px;
  width: fit-content;
  color: white;
`
