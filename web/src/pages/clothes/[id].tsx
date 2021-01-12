import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import numberFormat from '@utils/number-format'

import Sidebar from '@components/Sidebar'

import { Display } from '@styles/global-components'
import { ExtendedMain } from '@styles/pages/clothes'

interface Props {
  clothes: Clothes
}

const Clothes: React.FC<Props> = ({ clothes }) => {
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
            <section>
              <h1>{clothes.product}</h1>
              <div>
                <p>
                  <span className="title">ID:</span>
                  <span className="content"> {clothes.id}</span>
                </p>
                <p>
                  <span className="title">Marca:</span>
                  <span className="content"> {clothes.brand}</span>
                </p>
                <p>
                  <span className="title">Quantidade comprada:</span>
                  <span className="content"> {clothes.quantity}</span>
                </p>
                <p>
                  <span className="title">Quantidade em estoque:</span>
                  <span className="content"> {clothes.current_inventory}</span>
                </p>
                <p>
                  <span className="title">Tamanho:</span>
                  <span className="content"> {clothes.size}</span>
                </p>
                <p>
                  <span className="title">Preço do produto:</span>
                  <span className="content">
                    {' '}
                    {numberFormat.format(clothes.price)}
                  </span>
                </p>
                <p>
                  <span className="title">Preço de entrada:</span>
                  <span className="content">
                    {' '}
                    {numberFormat.format(clothes.input_values)}
                  </span>
                </p>
                <p>
                  <span className="title">Preço de saida:</span>
                  <span className="content">
                    {' '}
                    {numberFormat.format(clothes.output_values)}
                  </span>
                </p>
                <p>
                  <span className="title">Provedor:</span>
                  <span className="content"> {clothes.provider}</span>
                </p>
                <p>
                  <span className="title">Data de cadastro:</span>
                  <span className="content"> {clothes.createdAt}</span>
                </p>
                <p>
                  <span className="title">Data da última atualização:</span>
                  <span className="content"> {clothes.updatedAt}</span>
                </p>
              </div>
            </section>
          </div>
        </ExtendedMain>
      </Display>
    </>
  )
}

export default Clothes

export const getServerSideProps: GetServerSideProps = async context => {
  const query = context.query

  const response = await fetch(`http://localhost:8000/clothes/${query.id}`)
  const clothes: Clothes = await response.json()

  return {
    props: {
      clothes
    }
  }
}
