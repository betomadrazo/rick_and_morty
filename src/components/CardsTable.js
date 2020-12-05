import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const CardsTable = () => {
  const characterSearch = useSelector((state) => state.characterSearch)
  const { loading, error, characters } = characterSearch

  return (
    <div className='cards-table'>
      {characters && characters.length
        ? characters.map((character) => <Card character={character} />)
        : 'nothing to show!!!'}
    </div>
  )
}

export default CardsTable
