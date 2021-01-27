import styled from 'styled-components'
import { transparentize } from 'polished'

export const Display = styled.div`
  display: flex;
  height: 100vh;
`
export const Main = styled.main`
  width: 100%;
  padding: 1rem;

  div.shortcuts {
    border: 1px solid green;

    width: 100%;
    height: 3rem;

    margin-bottom: 1.5rem;
  }

  div.dashboard {
    width: 100%;
    min-height: 35rem;

    padding: 1rem;

    border-radius: 1rem;
    /* background: ${props =>
      transparentize(0.9, props.theme.colors.primary)}; */

    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);

    header {
      margin-bottom: 1.5rem;
    }

    h1 {
      color: ${props => props.theme.colors.primary};
    }
  }
`
