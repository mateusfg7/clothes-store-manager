import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Display, NavSection, Main } from '../styles/pages/index'

interface Props {
  clothesList: Clothes[]
}

const Home: React.FC<Props> = ({ clothesList }) => {
  const numberFormat = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <div>
      <Head>
        <title>Clothes Store Managers</title>
      </Head>

      <Display>
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
        <Main>
          {/* <div className="shortcuts"></div> */}
          <div className="dashboard">
            <h1>Roupas Cadastradas</h1>

            <div className="item">
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
                <div key={clothes.id} className="item">
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
              )
            })}
          </div>
        </Main>
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
