import styled from 'styled-components'

export const Dashboard = styled.div`
  display: flex;
  height: 100vh;
`

export const NavSection = styled.section`
  border: 1px solid red;

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
`
