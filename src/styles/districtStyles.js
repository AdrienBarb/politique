import styled from 'styled-components'

export const StyledDistrict = styled.div`
  margin: 4rem 0;
  display: flex;
  align-items: end;
  justify-content: space-betwwen;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    margin: 2rem 0;
  }

  .district-details {
    width: 100%;
    margin-right: 2rem;
    max-width: 600px;
    @media (max-width: 1024px) {
      max-width: 100%;
    }
  }

  .image-wrapper {
    width: 100%;
    display: grid;
    place-items: center;
    @media (max-width: 1024px) {
      margin-top: 1rem;
    }

    .image {
      max-width: 500px;
    }
  }
`
