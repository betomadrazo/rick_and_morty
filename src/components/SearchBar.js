import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../images/logo.png'
import { searchCharacters } from '../actions/characterActions'


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()


  const handleSearchCharacter = (e) => {
    e.preventDefault()

    dispatch(searchCharacters(searchTerm))
  }

  return (
    <div className='search-container'>
      <div className='header'>
        <img src={logo} alt='Rick and Morty logo' />
        <span>Family Album 2.0</span>
      </div>
      <form class='search-form' onSubmit={handleSearchCharacter}>
        <input type='text' placeholder='What character?' onChange={e => setSearchTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
