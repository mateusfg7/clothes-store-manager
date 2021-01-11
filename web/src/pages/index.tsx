import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { Dashboard, NavSection, Main } from '../styles/pages/index'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Clothes Store Managers</title>
      </Head>

      <Dashboard>
        <NavSection>
          <Image
            src="/img/logo.jpg"
            layout="intrinsic"
            width={500}
            height={500}
          />
          <h1>Brito Clothes</h1>
          <p>Clothes manager dashboard</p>
          <nav>
            <div className="option">[A] Roupas</div>
            <div className="option">[B] Adicionar Roupa</div>
            <div className="option">[C] Deletar Roupa</div>
          </nav>
        </NavSection>
        <Main></Main>
      </Dashboard>
    </div>
  )
}

export default Home
