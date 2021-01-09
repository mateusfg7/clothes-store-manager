import styled from 'styled-components'

export const Dashboard = styled.div`
  display: flex;
  height: 100vh;
  border: 1px solid red;
`

export const NavSection = styled.section`
  border: 5px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 14rem;

  text-align: center;

  img {
    width: 6rem;
    border-radius: 100%;
  }

  h1 {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  nav {
    margin-top: 2rem;
  }
`

export const Main = styled.main`
  border: 5px solid green;
  width: 100%;
`
