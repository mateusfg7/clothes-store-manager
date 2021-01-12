import styled from 'styled-components'
import { transparentize } from 'polished'

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    min-width: 700px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;

    div {
      padding: 15px;
      width: 100%;

      line-height: 1.9rem;

      p {
        display: flex;
        justify-content: space-between;

        & + p {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        span.title {
          color: ${props => transparentize(0.2, props.theme.colors.text)};
        }
      }
    }
  }
`
