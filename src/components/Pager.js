import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchCharacters } from '../actions/characterActions'
import PageDot from './PageDot'

const Pager = ({ pagerInfo }) => {
  const dispatch = useDispatch()

  const searchTermCurrent = useSelector((state) => state.searchTerm)
  const { currentSearch } = searchTermCurrent

  const pageCurrent = useSelector((state) => state.currentPage)
  const { currentPage } = pageCurrent

  const handleGoToPage = (e, page) => {
    e.preventDefault()

    if (page !== currentPage) {
      dispatch(searchCharacters(currentSearch, page))
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div class='pager'>
        {pagerInfo.prev ? (
          <div>
            <div
              className='left-arrow'
              onClick={(e) => handleGoToPage(e, currentPage - 1)}
            ></div>
          </div>
        ) : null}

        {[...Array(pagerInfo.pages).keys()].map((x) => (
          <div onClick={(e) => handleGoToPage(e, x + 1)}>
            <PageDot
              key={x}
              pageNumber={x + 1}
              active={x + 1 === currentPage ? true : false}
            />
          </div>
        ))}
        {pagerInfo.next ? (
          <div
            className='right-arrow'
            onClick={(e) => handleGoToPage(e, currentPage + 1)}
          ></div>
        ) : null}
      </div>
    </div>
  )
}

export default Pager
