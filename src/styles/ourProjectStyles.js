import styled from 'styled-components'

export const StyledOurProject = styled.div`
  h1 {
    margin-bottom: 3rem;
  }
  
  h2 {
    text-decoration: underline;
    text-decoration-color: #719d69;
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
