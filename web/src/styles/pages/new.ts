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
      }

      section.content {
      }

      section.description {
        opacity: 0.8;

        width: 85%;

        div.description-texts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem;

          div.description-fieldset {
            margin-bottom: 1rem;

            p {
              margin-top: 0.7rem;
              font-size: 0.9rem;
            }
          }
        }

        div.table {
          display: flex;
          justify-content: center;
          align-items: center;

          border: 1px solid ${props => props.theme.colors.text};
          border-radius: 0.5rem;

          div.column {
            flex: 1;
            text-align: center;

            & + div.column {
              border-left: 1px solid ${props => props.theme.colors.text};
            }

            div.title {
              padding: 0.5rem;
            }

            div.content {
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              padding: 0.5rem;

              border-top: 1px solid ${props => props.theme.colors.text};
            }
          }
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

      &:hover {
        background: ${props => props.theme.colors.primary};
        color: white;
      }
    }
  }
`
