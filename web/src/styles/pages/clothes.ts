import styled from 'styled-components'
import { transparentize } from 'polished'

import { Main } from '../global-components'

export const ExtendedMain = styled(Main)`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      padding: 15px;
      width: 100%;

      line-height: 2.7rem;

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
