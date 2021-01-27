import styled from 'styled-components'
import { transparentize, mix } from 'polished'

import { Main } from '@styles/global-components'

export const ExtendedMain = styled(Main)`
  div.dashboard {
    div.sections {
      display: flex;
      justify-content: center;

      section {
        width: 100%;
        padding: 0.5rem;

        &.description {
          width: 85%;
        }
      }
    }
  }

  form {
    overflow: hidden;

    div.input-section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    div.input-block {
      display: flex;
      flex-direction: column;

      max-width: 18rem;

      line-height: 2rem;

      input {
        padding: 0.7rem;

        border: 1px solid ${props => props.theme.colors.primary};
        border-radius: 0.5rem;

        background-color: rgba(255, 255, 255, 0.01);
        color: ${props => props.theme.colors.text};
      }

      div.all-buttons {
        display: flex;
        flex-direction: column;

        width: 15rem;

        margin: auto;

        button {
          background: none;
          border: none;
          border-radius: 0.5rem;

          transition: 0.2s;
        }

        div.size-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0.5rem;

          margin-bottom: 1rem;

          button.size-button {
            padding: 0.8rem;

            border: 1px solid ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.primary};
            opacity: 0.5;

            &:hover {
              background: ${props => props.theme.colors.primary};
              color: white;
              opacity: 1;
            }

            &.active {
              opacity: 1;
              background: ${props =>
                transparentize(0.9, props.theme.colors.primary)};

              &:hover {
                color: ${props => props.theme.colors.primary};
              }
            }
          }
        }
        button.reset-sizes {
          padding: 0.8rem;

          border: 1px dashed ${props => props.theme.colors.primary};
          color: ${props => props.theme.colors.primary};

          &:hover {
            border-color: ${props =>
              mix(0.4, '#ff0000', props.theme.colors.primary)};
            color: ${props => mix(0.4, '#ff0000', props.theme.colors.primary)};
          }
        }
      }
    }

    button[type='submit'] {
      margin-top: 1rem;
      width: 100%;
      padding: 1.5rem;

      background: none;
      color: ${props => props.theme.colors.primary};

      border: 1px solid ${props => props.theme.colors.primary};
      border-radius: 0.5rem;

      transition: 0.2s;

      &:hover {
        background: ${props => props.theme.colors.primary};
        color: white;
      }
    }
  }
`
