import styled from 'styled-components'

export const StyledFooter = styled.div`
  padding: 2rem 4rem;
  display: flex;
  font-weight: 800;
  font-size: 1.4rem;
  background-color: #323434;
  color: white;
  font-weight: 200;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-section {
    color: white;

    h3,
    a {
      color: white;
      font-size: 1rem;
      font-weight: 400;
    }

    h3 {
      margin-top: 0;
    }

    a {
      color: #686868;
      white-space: nowrap;
      font-size: 0.9rem;

      &:hover {
        color: white;
      }
    }


    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  .divider {
    width: 1px;
    display: block;
    height: 100px;
    background-color: #5C5C5C;
    margin: 0 4rem;
    @media (max-width: 768px) {
      height: 1px;
      width: 100px;
      margin: 2rem 0;
    }
  }
`
