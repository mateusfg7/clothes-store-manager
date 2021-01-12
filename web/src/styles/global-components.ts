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
    background: ${props => transparentize(0.9, props.theme.colors.primary)};

    h1 {
      margin-bottom: 1.5rem;
    }
  }
`
