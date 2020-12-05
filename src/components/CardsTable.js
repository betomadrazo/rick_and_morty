import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const CardsTable = () => {
  const characterSearch = useSelector((state) => state.characterSearch)
  const { loading, error, characters } = characterSearch

  return loading ? (
    <h1 style={styles.loading, styles.message}>LOADING...</h1>
  ) : error ? (
    <h1 style={styles.error, styles.message}>NO RESULTS, SEARCH ANOTHER</h1>
  ) : (
    <>
      <div className='cards-table'>
        {characters.map((character) => (
          <Card character={character} />
        ))}
      </div>
    </>
  )
}

const styles = {
  message: {
    fontFamily: 'Get Schwifty',
    textAlign: 'center',
  }
}

export default CardsTable
