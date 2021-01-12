import styled from 'styled-components'

export const Section = styled.section`
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
`

export const Menu = styled.nav`
  margin-top: 2rem;
  width: 100%;
`

export const Option = styled.div`
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
`
