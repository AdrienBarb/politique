import styled from 'styled-components'

export const StyledDocumentation = styled.div`
  margin: 4rem auto 0 auto;
  padding: 0 2rem;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    margin: 2rem 0;
  }

  .documents-wrapper {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
  }
`
