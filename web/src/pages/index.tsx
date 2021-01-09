import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { Dashboard, NavSection, MainSection } from '../styles/pages/index'

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
            <ul>
              <li>option 1</li>
              <li>option 2</li>
              <li>option 3</li>
            </ul>
          </nav>
        </NavSection>
        <MainSection></MainSection>
      </Dashboard>
    </div>
  )
}

export default Home
