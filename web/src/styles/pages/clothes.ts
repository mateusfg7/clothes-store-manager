import styled from 'styled-components'
import { transparentize } from 'polished'

import { Main } from '@styles/global-components'

export const ExtendedMain = styled(Main)`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 15px;
      width: 100%;

      .arrow-back {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.primary};

        cursor: pointer;
      }

      div {
        width: min-content;
      }
    }

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
