import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 90%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    transition: 0.2s;
  }
  body {
    background: ${props => props.theme.colors.background};
    font-family: 'Inter', sans-serif;
    color: ${props => props.theme.colors.text};

    button:hover {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.primary};
    }
  }
`
