import styled from 'styled-components'
import { transparentize } from 'polished'

import { Main } from '../global-components'

export const ExtendedMain = styled(Main)`
  div.dashboard {
    div.item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 1.6rem 0;

      span.category {
        font-weight: bolder;
      }

      span.product-field {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 100%;
      }

      span.product-field.product-description {
        justify-content: left;
      }
    }

    div.item.content {
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        background: ${props =>
          transparentize(0.95, props.theme.colors.primary)};
      }
    }

    div.item + div.item {
      border-top: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`
