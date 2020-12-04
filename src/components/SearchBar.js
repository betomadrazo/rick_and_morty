import React from 'react'
import logo from '../images/logo.png'

const SearchBar = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="Rick and Morty logo"/>
        <span>Family Album 2.0</span>
      </div>
      <form class="search-form">
        <input type="text" placeholder='What character?' />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
