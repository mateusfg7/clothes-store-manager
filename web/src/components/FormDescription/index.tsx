import React from 'react'

import { Description } from './styles'

const FormDescription: React.FC = () => {
  return (
    <Description className="description">
      <div className="description-texts">
        <div className="description-fieldset">
          <h4>Descrição do produto</h4>
          <p>
            faça uma descrição característica do produto, como o nome, material
            e cor.
          </p>
        </div>
        <div className="description-fieldset">
          <h4>Marca</h4>
          <p>Nome da marca do produto</p>
        </div>
        <div className="description-fieldset">
          <h4>Quantidade</h4>
          <p>Quantidade de peças adquiridas</p>
        </div>
        <div className="description-fieldset">
          <h4>Fornecedor</h4>
          <p>Pessoa/empresa fornecedora da peça</p>
        </div>
        <div className="description-fieldset">
          <h4>Valores de entrada</h4>
          <p>Lucro obtido</p>
        </div>
        <div className="description-fieldset">
          <h4>Valores de saida</h4>
          <p>Gastos de compra e manutenção</p>
        </div>
        <div className="description-fieldset">
          <h4>Preço</h4>
          <p>Valor a ser revendido</p>
        </div>
        <div className="description-fieldset">
          <h4>Tamanhos disponíveis</h4>
          <p>Tamanhos da peça comprada</p>
        </div>
      </div>
      <div className="table">
        <div className="column">
          <div className="title">PP</div>
          <div className="content">
            <div className="number">34</div>
          </div>
        </div>
        <div className="column">
          <div className="title">P</div>
          <div className="content">
            <div className="number">36</div>
            <div className="number">38</div>
          </div>
        </div>
        <div className="column">
          <div className="title">M</div>
          <div className="content">
            <div className="number">40</div>
            <div className="number">42</div>
          </div>
        </div>
        <div className="column">
          <div className="title">G</div>
          <div className="content">
            <div className="number">44</div>
            <div className="number">46</div>
          </div>
        </div>
        <div className="column">
          <div className="title">GG</div>
          <div className="content">
            <div className="number">48</div>
            <div className="number">50</div>
          </div>
        </div>
        <div className="column">
          <div className="title">GGG</div>
          <div className="content">
            <div className="number">+</div>
          </div>
        </div>
      </div>
    </Description>
  )
}

export default FormDescription
