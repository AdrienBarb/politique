import styled from 'styled-components'

export const StyledMeetingCard = styled.div`
  width: fit-content;
  box-shadow: 2px 0 30 rgba(0, 0, 0, 0.3);
  box-shadow: 2px 0 35px rgb(0 0 0 / 20%);
  padding: 1rem;

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .info {
    margin: 1rem 0;
  }

  .date,
  .place {
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 26px;

    p {
      font-size: 18px;
      margin: 0.6rem 0 0.6rem 0.6rem;
    }
  }

  a {
    width: 100%;
    text-align: center;
    padding: 0.6rem 0.4rem;
    display: block;
    background-color: #719d69;
    box-sizing: border-box;
    font-weight: 500;
    color: white;
  }
`
