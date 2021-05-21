import styled from 'styled-components'

export const StyledDistrict = styled.div`
  margin: 6rem 0;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 768px) {
    margin: 4rem 0;
  }

  .container {
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: space-evenly;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }
  }

  p {
    font-size: 1.2rem;
  }

  .divider {
    display: block;
    height: 1px;
    width: 50%;
    background-color: #719d69;
    margin: 2rem auto;
  }

  .district-details {
    width: 100%;
    margin-right: 2rem;
    max-width: 600px;
    @media (max-width: 1024px) {
      max-width: 100%;
      text-align: center;
      margin-right: 0;
    }
  }

  .image-wrapper {
    display: grid;
    place-items: center;
    @media (max-width: 1024px) {
      margin-top: 1rem auto 0 auto;
      max-width: 420px;
      width: 100%;
    }

    .image {
      max-width: 420px;
    }
  }
`
