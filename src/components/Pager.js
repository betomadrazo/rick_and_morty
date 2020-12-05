import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchCharacters } from '../actions/characterActions'
import PageDot from './PageDot'

const Pager = ({ pagerInfo }) => {
  const [prevPage, setPrevPage] = useState(pagerInfo.prev)
  const [nextPage, setNextPage] = useState(pagerInfo.next)

  const dispatch = useDispatch()

  const searchTermCurrent = useSelector(state => state.searchTerm)
  const { currentSearch } = searchTermCurrent

  const pageCurrent = useSelector(state => state.currentPage)
  const { currentPage } = pageCurrent

  const handleGoToPage = (e, page) => {
    e.preventDefault()

    // let queryString = ''
    // if (isNaN(page)) {
    //   const tempURL = `https://a.com/${page}`
    //   const searchParams = new URL(tempURL).searchParams
    //   const currentPage = searchParams.get('page')
    //   queryString = `name=${searchParams.get('name')}&page=${currentPage}`
    //   setCurrPage(currentPage)
    // } else {
    //   const searchParams = new URL(prevPage || nextPage).searchParams
    //   queryString = `name=${searchParams.get('name')}&page=${page}`
    //   setCurrPage(page)
    // }

    console.log("searchTerm=>", currentSearch);
    console.log("page=>", page);

    dispatch(searchCharacters(currentSearch, page))
  }

  return (
    <div class='pager'>
      {prevPage ? (
        <div>
          <div className='left-arrow' onClick={(e) => handleGoToPage(e, currentPage - 1)}>
          </div>
        </div>
      ) : null}

      {[...Array(pagerInfo.pages).keys()].map((x) => (
        <div onClick={e => handleGoToPage(e, x + 1)}>
          <PageDot key={x} pageNumber={x + 1} active={x + 1 === currentPage ? true : false} />
        </div>
      ))}
      {nextPage ? (
        <div className='right-arrow' onClick={(e) => handleGoToPage(e, currentPage + 1)}>
        </div>
      ) : null}
    </div>
  )
}

export default Pager
