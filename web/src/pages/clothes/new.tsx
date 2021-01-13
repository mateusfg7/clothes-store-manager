/* eslint-disable camelcase */
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
  const [inputValues, setInputValues] = useState<number>()
  const [outputValues, setOutputValues] = useState<number>()
  // currentInventory = quantity

  const [PP_button_state, setPPButtonState] = useState<boolean>(false)
  const [P_button_state, setPButtonState] = useState<boolean>(false)
  const [M_button_state, setMButtonState] = useState<boolean>(false)
  const [G_button_state, setGButtonState] = useState<boolean>(false)
  const [GG_button_state, setGGButtonState] = useState<boolean>(false)
  const [GGG_button_state, setGGGButtonState] = useState<boolean>(false)

  const handleButtonState = {
    PP: () => {
      PP_button_state ? setPPButtonState(false) : setPPButtonState(true)
    },
    P: () => {
      P_button_state ? setPButtonState(false) : setPButtonState(true)
    },
    M: () => {
      M_button_state ? setMButtonState(false) : setMButtonState(true)
    },
    G: () => {
      G_button_state ? setGButtonState(false) : setGButtonState(true)
    },
    GG: () => {
      GG_button_state ? setGGButtonState(false) : setGGButtonState(true)
    },
    GGG: () => {
      GGG_button_state ? setGGGButtonState(false) : setGGGButtonState(true)
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    alert('enviado!')
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
                  className={`size-button ${PP_button_state ? 'active' : ''}`}
                  onClick={handleButtonState.PP}
                >
                  PP
                </button>
                <button
                  type="button"
                  className={`size-button ${P_button_state ? 'active' : ''}`}
                  onClick={handleButtonState.P}
                >
                  P
                </button>
                <button
                  type="button"
                  className={`size-button ${M_button_state ? 'active' : ''}`}
                  onClick={handleButtonState.M}
                >
                  M
                </button>
                <button
                  type="button"
                  className={`size-button ${G_button_state ? 'active' : ''}`}
                  onClick={handleButtonState.G}
                >
                  G
                </button>
                <button
                  type="button"
                  className={`size-button ${GG_button_state ? 'active' : ''}`}
                  onClick={handleButtonState.GG}
                >
                  GG
                </button>
                <button
                  type="button"
                  className={`size-button ${GGG_button_state ? 'active' : ''}`}
                  onClick={handleButtonState.GGG}
                >
                  GGG
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
