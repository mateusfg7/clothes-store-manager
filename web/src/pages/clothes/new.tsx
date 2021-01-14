import React, { FormEvent, useState } from 'react'
import Head from 'next/head'

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

    const data = {
      product,
      brand,
      quantity,
      provider,
      price,
      currentInventory: quantity,
      size: sizeList.toString(),
      inputValues,
      outputValues
    }

    const response = await fetch('/api/clothes', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    const status = response.status

    const statusCodes = {
      201: () => {
        alert('enviado!')
      },
      400: () => {
        alert('bad request')
      },
      500: () => {
        alert('internal server error!')
      }
    }

    statusCodes[status]()
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
              <div className="input-block">
                <label htmlFor="product">Descrição do produto</label>
                <input
                  id="product"
                  value={product}
                  onChange={event => setProduct(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="brand">Marca</label>
                <input
                  id="brand"
                  value={brand}
                  onChange={event => setBrand(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="quantity">Quantidade</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={event => setQuantity(Number(event.target.value))}
                />
              </div>

              <div className="input-block">
                <label htmlFor="provider">Fornecedor</label>
                <input
                  id="provider"
                  value={provider}
                  onChange={event => setProvider(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="price">Preço</label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={event => setPrice(Number(event.target.value))}
                />
              </div>

              <div className="input-block">
                <label>Tamanhos disponíveis</label>
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
              </div>

              <div className="input-block">
                <label htmlFor="inputValues">Valores de entrada</label>
                <input
                  type="number"
                  id="inputValues"
                  value={inputValues}
                  onChange={event => {
                    setInputValues(Number(event.target.value))
                  }}
                />
                <label htmlFor="outputValues">Valores de saida</label>
                <input
                  type="number"
                  id="outputValues"
                  value={outputValues}
                  onChange={event => {
                    setOutputValues(Number(event.target.value))
                  }}
                />
              </div>

              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </ExtendedMain>
      </Display>
    </>
  )
}

export default Clothes
