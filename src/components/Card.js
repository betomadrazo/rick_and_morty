import React from 'react'

const Card = ({ character }) => {
  return (
    <div className='card'>
      <div className='sides'>
        <div className='front'>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
        </div>
        <div className='back'>
          <h2>{character.name}</h2>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Location:</strong> {character.location.name}
          </p>
          <p>
            <strong>Origin:</strong> {character.origin.name}
          </p>
          <p>
            <strong>Alive:</strong>{' '}
            {character.status === 'Dead'
              ? 'No'
              : character.status === 'Alive'
              ? 'Yes'
              : 'Unknown'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
