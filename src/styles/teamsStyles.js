import styled from 'styled-components'

export const StyledTeams = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .team-wrapper {
    margin-top: 2rem;
    @media (max-width: 768px) {
      width: 80%;
      margin: 2rem auto 0 auto;
    }
    @media (max-width: 425px) {
      width: 100%;
    }
  }

  .team-card {
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
    align-items: end;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 300;
      @media (max-width: 1024px) {
        font-size: 1.4rem;
      }
      @media (max-width: 768px) {
        font-size: 1.6rem;
      }
    }

    p {
      font-size: 1.2rem;
      font-weight: 300;
      @media (max-width: 1024px) {
        font-size: 1rem;
      }
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    .image {
      max-width: 400px;
      margin-right: 2rem;
      @media (max-width: 1024px) {
        max-width: 260px;
        margin-right: 1rem;
      }
      @media (max-width: 768px) {
        max-width: 100%;
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  }
`
