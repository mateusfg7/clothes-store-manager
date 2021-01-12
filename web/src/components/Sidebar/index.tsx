import React from 'react'
import Image from 'next/image'

import { Section, Menu, Option } from './styles'

const Sidebar: React.FC = () => {
  return (
    <Section>
      <Image src="/img/logo.jpg" layout="intrinsic" width={500} height={500} />
      <h1>Brito Clothes</h1>
      <p>Clothes manager dashboard</p>
      <Menu>
        <Option className="option">[A] Roupas</Option>
        <Option className="option">[B] Adicionar Roupa</Option>
        <Option className="option">[C] Deletar Roupa</Option>
      </Menu>
    </Section>
  )
}

export default Sidebar
