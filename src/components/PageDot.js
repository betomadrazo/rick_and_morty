import React from 'react'

const PageDot = ({ pageNumber, active }) => {
  return (
    <div className={`page-dot ${active ? 'active' : ''}`}>
      {pageNumber}
    </div>
  )
}

export default PageDot
