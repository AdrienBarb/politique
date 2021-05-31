import styled from 'styled-components'

export const StyledOurProject = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  h1 {
    margin-bottom: 3rem;
    text-align: center;
  }

  .section {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    font-weight: 300;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`
