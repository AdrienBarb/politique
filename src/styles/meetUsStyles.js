import styled from 'styled-components'

export const StyledMeetUs = styled.div`
  margin: 4rem 0;

  .slick-list {
    max-width: 1280px;
    margin: 0 auto;
  }

  .slick-dots {
    bottom: 10px;
  }

  .slick-next::before, .slick-prev::before {
    color: black !important;
    font-size: 26px;
  }

  .slick-next {
    right: 0px;
  }

  .slick-prev {
    left: 0px;
  }
`