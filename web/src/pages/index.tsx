/* eslint-disable multiline-ternary */

import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { BiCloset } from 'react-icons/bi'

import api from '@services/api'
import numberFormat from '@utils/number-format'

import Sidebar from '@components/layout/Sidebar'
import { VariantsContainer, VariantsItem } from '@components/motion/Variants'

import { Display } from '@styles/global-components'
import { ExtendedMain, EmptyList } from '@styles/pages/index'

interface Props {
  clothesList: Clothes[]
}

const ClothesCard: React.FC<Clothes> = ({ clothes }) => {
  return (
    <Link href={`/clothes/${clothes.id}`}>
      <div className="item content">
        <span className="product-field product-description">
          {clothes.product}
        </span>
        <span className="product-field">{clothes.brand}</span>
        <span className="product-field">{clothes.current_inventory}</span>
        <span className="product-field">
          {numberFormat.format(clothes.price)}
        </span>
      </div>
    </Link>
  )
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
            <header>
              <h1>Roupas Cadastradas</h1>
            </header>

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
            <div>
              {clothesList.length > 0 ? (
                <VariantsContainer>
                  {clothesList.map(clothes => (
                    <VariantsItem key={clothes.id} direction="y">
                      <ClothesCard clothes={clothes} />
                    </VariantsItem>
                  ))}
                </VariantsContainer>
              ) : (
                <EmptyList className="content">
                  <BiCloset className="icon" />
                  Nenhuma roupa cadastrada
                </EmptyList>
              )}
            </div>
          </div>
        </ExtendedMain>
      </Display>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/clothes')
  const clothesList: Clothes[] = response.data

  return {
    props: {
      clothesList
    }
  }
}
