import styled from 'styled-components'

export const StyledContact = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  .contact-wrapper {
    display: flex;
    margin: 4rem auto 4rem auto;
    justify-content: space-evenly;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .left-side {
    max-width: 300px;
    width: 100%;
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
