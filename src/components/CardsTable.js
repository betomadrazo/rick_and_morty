import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Pager from '../components/Pager'

const CardsTable = () => {
  const characterSearch = useSelector((state) => state.characterSearch)
  const { loading, error, characters, pagerInfo } = characterSearch

  return loading ? (
    <h1 style={(styles.loading, styles.message)}>LOADING...</h1>
  ) : error ? (
    <h1 style={(styles.error, styles.message)}>NO RESULTS, SEARCH ANOTHER</h1>
  ) : characters && characters.length ? (
    <div className='cards-table'>
      <div class='cards-container'>
        {characters.map((character) => (
          <Card character={character} />
        ))}
      </div>
      {pagerInfo && (pagerInfo.prev || pagerInfo.next) && (
        <Pager pagerInfo={pagerInfo} />
      )}
    </div>
  ) : null
}

const styles = {
  message: {
    fontFamily: 'Get Schwifty',
    textAlign: 'center',
  },
}

export default CardsTable
