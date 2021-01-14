import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiBox, BiPlusCircle } from 'react-icons/bi'

import { Section, Menu, Option } from './styles'

const Sidebar: React.FC = () => {
  return (
    <Section>
      <Image src="/img/logo.jpg" layout="intrinsic" width={500} height={500} />
      <h1>Brito Clothes</h1>
      <p>Clothes manager dashboard</p>
      <Menu>
        <Link href="/">
          <Option className="option">
            <span className="icon">
              <BiBox />
            </span>
            <span className="title">Roupas</span>
          </Option>
        </Link>
        <Link href="/clothes/new">
          <Option className="option">
            <span className="icon">
              <BiPlusCircle />
            </span>
            <span className="title">Adicionar Roupa</span>
          </Option>
        </Link>
      </Menu>
    </Section>
  )
}

export default Sidebar
