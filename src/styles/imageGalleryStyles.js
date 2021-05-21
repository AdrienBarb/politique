import styled from 'styled-components'


export const StyledImageGallery = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  h1 {
    margin-bottom: 2rem;
  }

  .grid {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    grid-gap: 2rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 425px) {
      grid-template-columns: 1fr;
    }

    .image-wrapper {
      overflow: hidden;
      height: 500px;
      position: relative;
      opacity: 0.8;
    }

    .gatsby-image-wrapper {
      cursor: pointer;
      min-width: 100%;
      min-height: 100%;
      max-width: 150%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`
