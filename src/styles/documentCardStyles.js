import styled from 'styled-components'

export const StyledDocumentCard = styled.div`
  margin: 0 1rem 1rem 0;
  display: flex;
  width: fit-content;
  padding: 0.4rem 0.6rem;
  border: 1px solid black;
  align-items: center;
  font-size: 2.6rem;

  .document-info {
    margin-left: 1rem;

    h1 {
      font-size: 1.2rem;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }

    h2 {
      font-size: 0.8rem;
      color: #686868;
      @media (max-width: 768px) {
        font-size: 0.6rem;
      }
    }
  }

  &:hover {
    box-shadow: 2px 2px 20px rgb(0 0 0 / 20%);
    cursor: pointer;
  }
`
