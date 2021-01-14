import styled from 'styled-components'

export const Description = styled.section`
  opacity: 0.8;

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
`
