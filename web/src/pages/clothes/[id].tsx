import React from 'react'
import { GetServerSideProps } from 'next'

interface Props {
  clothes: Clothes
}

const Clothes: React.FC<Props> = ({ clothes }) => {
  return (
    <div>
      <h1>{clothes.product}</h1>
    </div>
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
