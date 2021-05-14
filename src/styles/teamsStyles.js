import styled from 'styled-components'

export const StyledTeams = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .team-wrapper {
    margin-top: 2rem;
  }

  .team-card {
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
    align-items: end;

    h1 {
      font-size: 1.8rem;
      font-weight: 300;
    }

    p {
      font-size: 1.2rem;
      font-weight: 300;
    }

    img {
      max-width: 400px;
      width: 100%;
      height: fit-content;
      margin-right: 2rem;
    }
  }
`
