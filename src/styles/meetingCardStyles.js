import styled from 'styled-components'

export const StyledMeetingCard = styled.div`
  width: fit-content;
  padding: 1.4rem 3rem;
  @media (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  .info {
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .event,
  .place {
    p {
      font-size: 1.2rem;
      font-weight: 400;
      color: #c4c4c4;
      margin: 0.2rem 0 0.6rem 0;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }

  a {
    width: 100%;
    text-align: center;
    padding: 0.6rem 0.4rem;
    display: block;
    background-color: #c4c4c4;
    box-sizing: border-box;
    font-weight: 500;
    color: black;
  }
`
