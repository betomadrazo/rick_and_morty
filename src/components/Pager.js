import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchCharacters } from '../actions/characterActions'
import PageDot from './PageDot'

const Pager = ({ pagerInfo }) => {
  const [prevPage, setPrevPage] = useState(pagerInfo.prev)
  const [nextPage, setNextPage] = useState(pagerInfo.next)
  const [currPage, setCurrPage] = useState(1)
  const [currSearchTerm, setCurrSearchTerm] = useState()
  const dispatch = useDispatch()

  const handleGoToPage = (e, page) => {
    e.preventDefault()

    const searchTerm = page.split('?')[1]

    dispatch(searchCharacters(searchTerm))
  }

  return (
    <div class='pager'>
      {prevPage ? (
        <div>
          <div className='left-arrow' onClick={(e) => handleGoToPage(e, prevPage)}>
          </div>
        </div>
      ) : null}

      {[...Array(pagerInfo.pages).keys()].map((x) => (
        <PageDot key={x} pageNumber={x + 1} />
      ))}
      {nextPage ? (
        <div className='right-arrow' onClick={(e) => handleGoToPage(e, nextPage)}>
        </div>
      ) : null}
    </div>
  )
}

export default Pager
