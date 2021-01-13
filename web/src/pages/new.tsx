import React from 'react'
import Head from 'next/head'
import { format as dateFormat } from 'date-fns'

import api from '@services/api'
import numberFormat from '@utils/number-format'

import Sidebar from '@components/Sidebar'

import { Display } from '@styles/global-components'
import { ExtendedMain } from '@styles/pages/clothes'

const Clothes: React.FC = () => {
  return (
    <>
      <Head>
        <title>Clothes Store Managers</title>
      </Head>

      <Display>
        <Sidebar />
        <ExtendedMain>
          {/* <div className="shortcuts"></div> */}
          <div className="dashboard">
            <h1>Cadastrar nova roupa</h1>
          </div>
        </ExtendedMain>
      </Display>
    </>
  )
}

export default Clothes
