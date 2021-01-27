import React from 'react'
import { BiX } from 'react-icons/bi'

import { Container } from './styles'

interface Props {
  text: string
  closeButton?: boolean
  closeModal?: () => void
}

const PopUp: React.FC<Props> = ({ text, closeButton = false, closeModal }) => {
  return (
    <Container>
      <div className="controls">
        {closeButton && <BiX className="close" onClick={closeModal} />}
      </div>
      <div className="content">{text}</div>
      <div />
    </Container>
  )
}

export default PopUp
