import React from 'react'
import Head from 'next/head'

import Sidebar from '@components/Sidebar'

import { Display, Main } from '@styles/global-components'

const Clothes: React.FC = () => {
  return (
    <>
      <Head>
        <title>Clothes Store Managers</title>
      </Head>

      <Display>
        <Sidebar />
        <Main>
          {/* <div className="shortcuts"></div> */}
          <div className="dashboard">
            <h1>Cadastrar nova roupa</h1>
          </div>
        </Main>
      </Display>
    </>
  )
}

export default Clothes
