import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 1000;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 50%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  border-radius: 1rem;

  background-color: ${props => props.theme.colors.static_background};

  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);

  font-weight: bold;

  div {
    width: 100%;
  }

  div.controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .close {
      cursor: pointer;

      transition: 0.2s;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  div.content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
