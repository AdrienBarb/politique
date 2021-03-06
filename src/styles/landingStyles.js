import styled from 'styled-components'

export const StyledLanding = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1200px;

  .image {
    width: fit-content;
    margin: 0 auto;
    display: block;
  }

  .image-bandeau {
    width: 100%;
    max-width: 800px;
    margin: 2rem auto 0 auto;
    display: block;
  }

  p {
    font-size: 1.6rem;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

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
