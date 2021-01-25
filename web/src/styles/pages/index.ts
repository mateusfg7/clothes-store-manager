import styled from 'styled-components'
import { transparentize } from 'polished'

import { Main } from '@styles/global-components'

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

    div.item.title {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    div.item.content {
      border-radius: 1rem;
      transition: 0.4s;
      &:hover {
        cursor: pointer;
        background: ${props =>
          transparentize(0.92, props.theme.colors.primary)};
      }
    }
  }
`

export const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 5rem;

  font-size: 1.5rem;

  opacity: 0.6;

  .icon {
    font-size: 2rem;
  }
`
