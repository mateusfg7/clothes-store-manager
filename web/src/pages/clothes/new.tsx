/* eslint-disable camelcase */

import React, { FormEvent, useState } from 'react'
import Head from 'next/head'

import api from '@services/api'

import Sidebar from '@components/Sidebar'

import { Display } from '@styles/global-components'
import { ExtendedMain } from '@styles/pages/new'

const Clothes: React.FC = () => {
  const [product, setProduct] = useState<string>()
  const [brand, setBrand] = useState<string>()
  const [quantity, setQuantity] = useState<number>()
  const [provider, setProvider] = useState<string>()
  const [price, setPrice] = useState<number>()
  const [sizeList, setSizeList] = useState<string[]>([])
  const [inputValues, setInputValues] = useState<number>()
  const [outputValues, setOutputValues] = useState<number>()

  const [sizeState, setSizeState] = useState({
    PP: false,
    P: false,
    M: false,
    G: false,
    GG: false,
    GGG: false
  })

  function handleSizeState(size) {
    if (!sizeList.includes(size)) {
      setSizeList([...sizeList, size])
      setSizeState({ ...sizeState, [size]: true })
    }
  }
  function resetSizes() {
    setSizeList([])
    setSizeState({
      PP: false,
      P: false,
      M: false,
      G: false,
      GG: false,
      GGG: false
    })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const data = new FormData()

    data.append('product', product)
    data.append('brand', brand)
    data.append('quantity', quantity)
    data.append('provider', provider)
    data.append('price', price)
    data.append('currentInventory', quantity)
    data.append('size', sizeList.toString())
    data.append('inputValues', inputValues)
    data.append('outputValues', outputValues)

    const response = await api.post('/clothes', data)
    // const response = await fetch('http://localhost:8000/clothes', {
    //   method: 'POST',
    //   body: data
    // })

    if (response.status === 201) {
      alert('enviado!')
    }
  }

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
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Descrição do produto</legend>
                <input
                  id="product"
                  value={product}
                  onChange={event => setProduct(event.target.value)}
                />
              </fieldset>
              <fieldset>
                <legend>Marca</legend>
                <input
                  id="brand"
                  value={brand}
                  onChange={event => setBrand(event.target.value)}
                />
              </fieldset>
              <fieldset>
                <legend>Quantidade</legend>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={event => setQuantity(Number(event.target.value))}
                />
              </fieldset>
              <fieldset>
                <legend>Fornecedor</legend>
                <input
                  id="provider"
                  value={provider}
                  onChange={event => setProvider(event.target.value)}
                />
              </fieldset>
              <fieldset>
                <legend>Preço</legend>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={event => setPrice(Number(event.target.value))}
                />
              </fieldset>
              <fieldset>
                <legend>Tamanhos disponíveis</legend>
                <button
                  type="button"
                  className={`size-button ${sizeState.PP ? 'active' : ''}`}
                  onClick={() => {
                    handleSizeState('PP')
                  }}
                >
                  PP
                </button>
                <button
                  type="button"
                  className={`size-button ${sizeState.P ? 'active' : ''}`}
                  onClick={() => {
                    handleSizeState('P')
                  }}
                >
                  P
                </button>
                <button
                  type="button"
                  className={`size-button ${sizeState.M ? 'active' : ''}`}
                  onClick={() => {
                    handleSizeState('M')
                  }}
                >
                  M
                </button>
                <button
                  type="button"
                  className={`size-button ${sizeState.G ? 'active' : ''}`}
                  onClick={() => {
                    handleSizeState('G')
                  }}
                >
                  G
                </button>
                <button
                  type="button"
                  className={`size-button ${sizeState.GG ? 'active' : ''}`}
                  onClick={() => {
                    handleSizeState('GG')
                  }}
                >
                  GG
                </button>
                <button
                  type="button"
                  className={`size-button ${sizeState.GGG ? 'active' : ''}`}
                  onClick={() => {
                    handleSizeState('GGG')
                  }}
                >
                  GGG
                </button>
                <button
                  type="button"
                  className="reset-sizes"
                  onClick={resetSizes}
                >
                  resetar
                </button>
              </fieldset>
              <fieldset>
                <legend>Valores de entrada e saida</legend>
                <label htmlFor="inputValues">entrada</label>
                <input
                  type="number"
                  id="inputValues"
                  value={inputValues}
                  onChange={event => {
                    setInputValues(Number(event.target.value))
                  }}
                />
                <label htmlFor="outputValues">saida</label>
                <input
                  type="number"
                  id="outputValues"
                  value={outputValues}
                  onChange={event => {
                    setOutputValues(Number(event.target.value))
                  }}
                />
              </fieldset>
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </ExtendedMain>
      </Display>
    </>
  )
}

export default Clothes
