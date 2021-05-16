import styled from 'styled-components'

export const StyledFullnav = styled.div`
  .fullnav-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    visibility: hidden;
    opacity: 0;
    z-index: 10000;
    height: 100vh;
    overflow-y: hidden;
  }

.fullnav {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: fit-content;

  a {
    font-size: 2rem;
    margin: 1.2rem 0;
    color: black;
  }
}

.humburger {
  position: relative;
  z-index: 40000 !important;
  transform: translateX(+12px);
  color: ${(props) => (props.isOpen ? 'black' : 'white')};
}
`
