import styled from 'styled-components'

export const StyledLanding = styled.div`
  margin: 0 auto;

  .introduction {
    margin: 2rem auto;
    text-align: center;

    h1 {
      font-size: 3rem;
      white-space: nowrap;

      @media (max-width: 768px) {
        font-size: 2rem;
      }

      @media (max-width: 425px) {
        font-size: 1.8rem;
      }
    }

    .divider {
      display: block;
      width: 300px;
      height: 1px;
      background-color: #719d69;
      margin: 1rem auto 0 auto;
    }
  }

  .second-intro {
    text-align: center;

    h2 {
      font-weight: 500;
    }

    .quote {
      color: #719d69;
      font-weight: bold;
    }
  }
`
