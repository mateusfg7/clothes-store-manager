import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import numberFormat from '@utils/number-format'

import Sidebar from '@components/Sidebar'

import { Display } from '@styles/global-components'
import { ExtendedMain } from '@styles/pages/index'

interface Props {
  clothesList: Clothes[]
}

const Home: React.FC<Props> = ({ clothesList }) => {
  return (
    <div>
      <Head>
        <title>Clothes Store Managers</title>
      </Head>

      <Display>
        <Sidebar />
        <ExtendedMain>
          {/* <div className="shortcuts"></div> */}
          <div className="dashboard">
            <h1>Roupas Cadastradas</h1>

            <div className="item title">
              <span className="product-field product-description category">
                Produto
              </span>
              <span className="product-field category">Marca</span>
              <span className="product-field category">
                Quantidade disponível
              </span>
              <span className="product-field category">Preço</span>
            </div>
            {clothesList.map(clothes => {
              return (
                <Link key={clothes.id} href={`/clothes/${clothes.id}`}>
                  <div className="item content">
                    <span className="product-field product-description">
                      {clothes.product}
                    </span>
                    <span className="product-field">{clothes.brand}</span>
                    <span className="product-field">
                      {clothes.current_inventory}
                    </span>
                    <span className="product-field">
                      {numberFormat.format(clothes.price)}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </ExtendedMain>
      </Display>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:8000/clothes')
  const clothesList: Clothes[] = await response.json()

  return {
    props: {
      clothesList
    }
  }
}
