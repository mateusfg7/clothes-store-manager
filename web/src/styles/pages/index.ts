import styled from 'styled-components'
import { transparentize } from 'polished'

export const Display = styled.div`
  display: flex;
  height: 100vh;
`

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
