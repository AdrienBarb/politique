import styled from 'styled-components'

export const StyledMeetUs = styled.div`
  background-color: #f7f7f7;
  margin: 4rem 0;
  padding: 2rem 0;
  text-align: center;

  .wrapper {
    padding: 0 2rem;
    max-width: 1400px;
    margin 0 auto;
  }

p {
  margin-top: 0;
}

  .slick-list {
    max-width: 1280px;
    margin: 0 auto;
  }

  .slick-dots {
    bottom: 0px;
  }

  .horizontal-divider {
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
  }

  .slick-next::before,
  .slick-prev::before {
    color: black !important;
    font-size: 26px;
  }

  .slick-next {
    right: 0px;
    z-index: 3000;
  }

  .slick-prev {
    left: 0px;
    z-index: 3000;
  }
`
