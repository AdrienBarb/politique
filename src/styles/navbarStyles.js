import styled from 'styled-components'

export const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  box-shadow: 2px 0 10px rgb(0 0 0 / 80%);
  font-weight: 800;
  font-size: 1.4rem;
  z-index: 10000;
  background-color: white;
  @media (max-width: 768px) {
    padding: 0.4rem 2rem;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
  }

  .right-links {
    font-size: 1.2rem;
    font-weight: 400;

    .active {
      font-weight: 700;
    }
  }
`
