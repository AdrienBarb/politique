import styled from 'styled-components'

export const StyledTeams = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  h1 {
    margin-bottom: 1rem;
    margin-top: 4rem;
    text-align: center;
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

    h2 {
      margin-top: 1rem;
      font-weight: 300;
    }
  }
`
