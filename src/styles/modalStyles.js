import styled from 'styled-components'

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  z-index: 10000;

  .close {
    background-color: white;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 20000;

    &:hover {
      box-shadow: 2px 2px 20px rgb(255 255 255 / 20%);
      cursor: pointer;
    }
  }

  img {
    margin: 6rem auto;
    max-width: 60%;
    max-height: 80%;
    border: 2px solid white;
  }
`
