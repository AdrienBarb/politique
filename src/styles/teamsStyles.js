import styled from 'styled-components'

export const StyledTeams = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    margin-bottom: 1rem;
    margin-top: 4rem;
  }

  .image {
    width: 100%;
  }

  .team-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 6rem;
    margin-top: 2rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .team-card {
    width: 100%;

    h1 {
      font-size: 1.8rem;
      margin-top: 1rem;
      font-weight: 300;

    }
  }
`
