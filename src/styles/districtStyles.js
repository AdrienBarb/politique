import styled from 'styled-components'

export const StyledDistrict = styled.div`
  margin: 4rem 0;
  @media (max-width: 768px) {
    margin: 2rem 0;
  }

  .image-wrapper {
    width: 100%;
    display: grid;
    place-items: center;
    margin-top: 2rem;

    .image {
      max-width: 500px;
    }
  }
`
