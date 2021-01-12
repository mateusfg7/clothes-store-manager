import styled from 'styled-components'
import { transparentize } from 'polished'

import { Main } from '../global-components'

export const NavSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 14rem;

  padding: 1rem 0;

  text-align: center;

  img {
    width: 6rem;
    border-radius: 100%;
  }

  h1 {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }

  nav {
    margin-top: 2rem;
    width: 100%;

    div.option {
      display: flex;
      align-items: center;

      padding: 1rem 2.1rem;

      border-left: 0.2rem solid transparent;

      transition: 0.2s;

      &:hover {
        cursor: pointer;
        border-left: 0.2rem solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`

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
