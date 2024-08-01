/* eslint-disable react/jsx-key */
import React, { PropsWithChildren, ReactElement, useEffect, useMemo, useState } from 'react'
import {
  Column,
  IdType,
  useColumnOrder,
  useExpanded,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table'
import classNames from 'classnames'
import { Button, Icon, Pagination, Search } from '..'
import './Table.scss'
import { SortingIcon } from './SortingIcon'
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggingStyle,
  Droppable,
  OnDragEndResponder,
} from 'react-beautiful-dnd'
import { FilterDropdown } from 'ui-kit/FilterDropdown'
// import { IFilterDropdownOptions } from 'ui-kit/FilterDropdown/filterDropdown'
// import { getAllVessel } from 'services'
import { logout } from 'utils/redux/slice/login.slice'
import { useDispatch, useSelector } from 'react-redux'
import { ISelectOption } from 'interfaces/Select.interface'
import { Asset } from 'interfaces/Asset.interfaces'

export type SortingType = IdType<string> | `-${IdType<string>}`

export interface ITableProps<T extends Record<string, unknown>> {
  className?: string
  columns: Column<object>[]
  data: T[]
  searchPlaceholder?: string
  isPagination?: boolean
  isSearch?: boolean
  isViewOption?: boolean
  isSelection?: boolean
  isTableFunction?: boolean
  isFilterVrOption?: boolean
  isScroll?: boolean
  actionFilter?: (data: any) => void
}

export const Table = <T extends Record<string, unknown>>(
  props: PropsWithChildren<ITableProps<T>>
): ReactElement => {
  const [searchedKeyword, setSearchedKeyword] = useState<string>('')
  const [pageIndex, setPageIndex] = useState<number>(0)
  const [filterData, setFilterData] = useState('')
  const [dataLength, setDataLength] = useState<number>(0)
  const dispatch = useDispatch()
  // const currentSize = useSelector((state: any) => state.expandableTableData.currentSize)
  const [currentSize, setCurrentSize] = useState(50)

  const tableData = useMemo(() => {
    if (props.data.length !== dataLength) {
      setPageIndex(0)
    }
    setDataLength(props.data.length)
    if (!props.data) return []
    return props.data.filter((row) => {
      return Object.values(row).some((cell: any) => {
        return cell && cell.toString().toLowerCase().includes(searchedKeyword.toLowerCase())
      })
    })
  }, [props.data, searchedKeyword])

  const columnData = useMemo(() => {
    return props.columns.map((obj) => {
      if (Object.prototype.hasOwnProperty.call(obj, 'collapse')) {
        return obj
      } else {
        return { ...obj, collapse: true }
      }
    })
  }, [props.columns])

  const {
    className,
    columns,
    searchPlaceholder,
    isPagination,
    isSearch,
    isViewOption,
    isSelection,
    isFilterVrOption,
    isTableFunction,
    actionFilter,
    isScroll,
  } = props
  const emptyHook = () => ({})
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    allColumns,
    gotoPage,
    setPageSize,
    setColumnOrder,
    visibleColumns,
    toggleHideAllColumns,
    state: { pageSize: currentPageSize, expanded },
  } = useTable(
    {
      columns: columnData,
      data: tableData,
      initialState: { pageIndex: pageIndex },
    },
    useSortBy,
    useExpanded,
    usePagination,
    useColumnOrder,
    isSelection
      ? (hooks) => {
          hooks.visibleColumns.push((columns) => [
            // Let's make a column for selection
            {
              id: 'selection',
              // The header can use the table's getToggleAllRowsSelectedProps method
              // to render a checkbox
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <div>
                  <input type='checkbox' />
                </div>
              ),
              // The cell can use the individual row's getToggleRowSelectedProps method
              // to the render a checkbox
              Cell: ({ row }) => (
                <div>
                  <input type='checkbox' />
                </div>
              ),
            },
            ...columns,
          ])
        }
      : emptyHook
  )

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedKeyword(event.target.value)
    setPageIndex(0)
    gotoPage(0)
  }

  const onPageChange = ({ selected }: { selected: number }) => {
    setPageIndex(selected)
    gotoPage(selected)
  }

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log('ini currentSize: ' + currentSize + ' ,ini current page size:' + currentPageSize)
    setPageSize(Number(event.target.value))
    setPageIndex(0)
    gotoPage(0)
  }

  const [headColumns, updateColumns] = useState(headerGroups[0].headers)

  const handleOnDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) return
    const items = Array.from(headColumns)
    const [reorderedItem] = items.splice(result.source.index, 1)

    const itemsShowHeader = Array.from(headerGroups[0].headers)
    const [reorderedHeaderItem] = itemsShowHeader.splice(result.source.index, 1)

    const itemsShowVisible = Array.from(visibleColumns)
    const [reorderedVisibleItem] = itemsShowVisible.splice(result.source.index, 1)

    if (result && result.destination) {
      items.splice(result.destination.index, 0, reorderedItem)
      itemsShowHeader.splice(result.destination.index, 0, reorderedHeaderItem)
      itemsShowVisible.splice(result.destination.index, 0, reorderedVisibleItem)
    }
    updateColumns(items)
    headerGroups[0].headers = itemsShowHeader
    setColumnOrder(items.map((d) => d.id))
  }

  const exceptColumn = ['req_assets.code', 'requisition_number', 'id']

  let posX: any
  let posY: any
  function clickComponent(e: { clientX: any; clientY: any }) {
    posX = e.clientX
    posY = e.clientY
  }

  const transformVessels = (vessels: Asset[]): any[] => {
    const vesselOptions = vessels.map((v, idx) => {
      return {
        id: idx + 1,
        title: v.code,
        status: false,
      }
    })
    return vesselOptions
  }

  return (
    <>
      {isTableFunction && (
        <div className='flex items-center Table-Function mb-6'>
          {isSearch && (
            <Search
              searchedKeyword={searchedKeyword}
              searchedPlaceholder={searchPlaceholder}
              onSearchChange={onSearchChange}
            />
          )}
          {isViewOption && (
            <div className='dropdown mr-4 concise-dropdown' tabIndex={0}>
              <div className='flex items-center'>
                <Icon type='List' className='mr-2' />
                <span>View Option</span>
              </div>
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='headColumns'>
                  {(provided) => (
                    <ul
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      tabIndex={0}
                      className='dropdown-content menu shadow dragDrops bg-base-100 w-60 rounded-lg'
                    >
                      <li className='dropdown-header'>
                        <label className='toggle-label'>
                          <span className='dropdown-headerText'>View Option</span>
                          <Button
                            // buttonType='frameless'
                            className='btn-showall'
                            onClick={() => toggleHideAllColumns(false)}
                          >
                            Show All
                          </Button>
                        </label>
                      </li>
                      {headColumns.map((column, index) => (
                        <Draggable key={column.id} draggableId={column.id} index={index}>
                          {(provided: DraggableProvided, snapshot) => {
                            if (snapshot.isDragging && provided.draggableProps.style) {
                              provided.draggableProps.style = {
                                ...provided.draggableProps.style,
                                left: 0,
                                top: posY - 400,
                              } as DraggingStyle
                            }
                            return (
                              <li
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                key={column.id}
                                className='dragging'
                                onMouseDown={clickComponent}
                              >
                                <div className='toggle-label'>
                                  <Icon type='Drag' className='mr-2' />
                                  <div className='grow'>
                                    <span className='label-text'>{column.render('Header')}</span>
                                  </div>
                                  {!exceptColumn.includes(column.id) && (
                                    <label className='switch'>
                                      <input type='checkbox' {...column.getToggleHiddenProps()} />
                                      <span className='slider round'></span>
                                    </label>
                                  )}
                                  {exceptColumn.includes(column.id) && (
                                    <div className='w-10'>&nbsp;</div>
                                  )}
                                </div>
                              </li>
                            )
                          }}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          )}
        </div>
      )}
      <div className={classNames(isScroll ? 'scroll-display' : '', 'table-border', className)}>
        <table
          className={classNames(page.length === 0 ? 'Table-no-data' : 'Table', '')}
          {...getTableProps()}
        >
          <thead className={classNames(isScroll ? 'scroll-display-thead' : '', 'Table-THead')}>
            {headerGroups.map((headerGroup) => (
              <tr className='Table-TR' {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps({
                      className:
                        column.render && column.render('collapse')
                          ? 'collapse Table-TH'
                          : 'Table-TH',
                    })}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div className='Table-THInner text-black'>
                      <div className='Table-THText'>{column.render('Header')}</div>
                      <>
                        {column.canSort && (
                          <div className='Table-SortingIcon'>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <SortingIcon sort={'descending'} />
                              ) : (
                                <SortingIcon sort={'ascending'} />
                              )
                            ) : (
                              <SortingIcon sort={'none'} />
                            )}
                          </div>
                        )}
                      </>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            className={page.length === 0 ? 'flex w-full no-data py-[25px]' : 'Table-TBody'}
            {...getTableBodyProps()}
          >
            {page.length === 0 ? (
              <tr>
                <td colSpan={0}>No data.</td>
              </tr>
            ) : (
              page.map((row) => {
                prepareRow(row)
                const originalRow = row.original as any
                return (
                  <tr
                    className={classNames('Table-TR', {
                      tableRow_disabled: originalRow && originalRow.deleted_at,
                    })}
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps({
                            className:
                              cell.column.render && cell.column.render('collapse')
                                ? 'collapse Table-TD'
                                : 'Table-TD',
                          })}
                        >
                          {cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })
            )}
          </tbody>
          <tfoot className={classNames(isScroll ? 'scroll-display-tfoot' : '', 'Table-TFoot')}>
            {page.length !== 0 && (
              <tr>
                <th className='Table-THFoot' colSpan={headerGroups[0].headers.length}>
                  {isPagination && Math.ceil(currentSize / currentPageSize) && (
                    <div className='flex justify-between items-center'>
                      <div className='basis-1/2 text-left flex items-center'>
                        <span className='show-label mr-3 text-black'>Show</span>
                        <select
                          className='page-dropdown mr-3 bg-white'
                          value={currentPageSize}
                          onChange={handlePageSizeChange}
                        >
                          <option value={5}>5</option>
                          <option value={10}>10</option>
                          <option value={15}>15</option>
                          <option value={20}>20</option>
                          <option value={25}>25</option>
                          <option value={30}>30</option>
                          <option value={35}>35</option>
                          <option value={40}>40</option>
                          <option value={45}>45</option>
                          <option value={50}>50</option>
                          {/* <option value={55}>55</option>
                          <option value={60}>60</option>
                          <option value={65}>65</option>
                          <option value={70}>70</option> */}
                        </select>
                        <span className='show-label text-black'>Items</span>
                      </div>
                      <div className='basis-1/2 justify-end '>
                        <Pagination
                          initialPage={pageIndex}
                          pagesCount={Math.ceil(currentSize / currentPageSize)}
                          onChange={onPageChange}
                        />
                      </div>
                    </div>
                  )}
                </th>
              </tr>
            )}
          </tfoot>
        </table>
      </div>
    </>
  )
}
