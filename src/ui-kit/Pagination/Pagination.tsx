import React, { useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import classNames from 'classnames'
import { Icon } from '..'
import './Pagination.scss'

export interface IPaginationProps {
  className?: string
  initialPage?: number
  marginPagesDisplayed?: number
  pagesCount: number
  pageRangeDisplayed?: number
  onChange: ({ selected }: { selected: number }) => void
}

export const Pagination: React.FC<IPaginationProps> = ({
  className,
  initialPage = 1,
  marginPagesDisplayed = 3,
  pagesCount,
  pageRangeDisplayed = 3,
  onChange,
}) => {
  const handlePageChange = (selected: { selected: number }) => {
    onChange(selected)
  }

  const handlePreviousClick = () => {
    if (initialPage > 1) {
      onChange({ selected: initialPage - 1 })
    }
  }

  const handleNextClick = () => {
    if (initialPage < pagesCount) {
      onChange({ selected: initialPage + 1 })
    }
  }

  useEffect(() => {
    handlePageChange({ selected: initialPage })
  }, [initialPage])

  return (
    <ReactPaginate
      forcePage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pagesCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={handlePageChange}
      containerClassName={classNames('Pagination', className)}
      activeClassName='Pagination__active'
      pageLinkClassName='Pagination__page-link'
      breakLinkClassName='Pagination__page-link'
      nextLinkClassName='Pagination__page-link'
      previousLinkClassName='Pagination__page-link'
      pageClassName='Pagination__page-item'
      breakClassName='Pagination__page-item'
      nextClassName='Pagination__page-item'
      previousClassName='Pagination__page-item'
      previousLabel={<Icon type='Back' className='arrowBack' onClick={handlePreviousClick} />}
      nextLabel={<Icon type='Next' className='arrowRight' onClick={handleNextClick} />}
    />
  )
}
