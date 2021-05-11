import styled from 'styled-components'

export const StyledFooter = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.4rem;
  background-color: #323434;
  color: white;
  font-weight: 200;

  .wrapper {
    display: flex;
    align-items: center;

    p {
      margin: 0;
      color: white;
      margin-right: 1rem;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .divider {
    width: 1px;
    height: 40px;
    display: block;
    background-color: white;
    margin: 0 2rem;
  }

  .iconWrapper {
    display: flex;
    align-items: center;
  }

  a {
    display: grid;
    place-items: center;
  }

  img {
    width: 30px;
    margin: 0 0.4rem;
  }

  .phoneIcon {
    width: 32px;
  }
`
