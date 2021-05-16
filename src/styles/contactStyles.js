import styled from 'styled-components'

export const StyledContact = styled.div`
  .contact-wrapper {
    display: flex;
    margin: 4rem auto 8rem auto;
    justify-content: space-evenly;
  }

  .section {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  a {
    font-size: 1.2rem;
    color: #686868;

    &:hover {
      color: black;
    }
  }
`
