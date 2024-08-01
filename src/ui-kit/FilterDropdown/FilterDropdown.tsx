import { Icon } from '..'
import './FilterDropdown.scss'
import classNames from 'classnames'

interface IFilterContent {
  id: number
  title: string
  status?: boolean
  date?: string
}

export interface IFilterDropdownOptions {
  id: number
  title: string
  content: IFilterContent[]
  isDate: boolean
}

interface IFilterDropdownProps {
  options: IFilterDropdownOptions[]
  className?: string
  functionReset: () => void
  functionChecked: (pId: number, id: number, value: boolean) => void
  handleDateChange: (id: number, value: string) => void
}

const FilterDropdown: React.FC<IFilterDropdownProps> = ({
  className,
  options,
  functionReset,
  functionChecked,
  handleDateChange,
}) => {
  return (
    <>
      <div className={classNames('dropdown concise-dropdown', className)} tabIndex={0}>
        <label className='flex items-center'>
          <Icon type='List' className='mr-2 w-[12px]' />
          <span className='font-normal'>Filter</span>
        </label>
        <ul className='dropdown-content drops bg-base-100'>
          <li className='h-[44px] header-filter px-[16px]'>
            <div className='header-title'>Filter</div>
            <div className='header-subtitle text-[#4A7CDC]' onClick={functionReset}>
              Reset
            </div>
          </li>
          {options.map((opt) => (
            <div className='collapse collapse-arrow' id='section' key={opt.id}>
              <input type='checkbox' className='peer' />
              <div className='collapse-title w-full py-[12px] px-[16px] font-medium'>
                {opt.title}
              </div>
              <div className='collapse-content p-0 content-container'>
                <div className='content-filter'>
                  {opt.isDate === true ? (
                    <div className='date-content'>
                      {opt.content.map((date, index) => (
                        <div key={date.id} className='gap-[4px] flex flex-col'>
                          <span className='date-header'>{date.title}</span>
                          <input
                            type='date'
                            id={date.title}
                            value={date.date}
                            className='input input-bordered h-[42px] date-picker'
                            onChange={(e) => handleDateChange(date.id, e.target.value)}
                            max={(index === 0 ? opt.content[1].date : undefined)}
                            min={(index === 1 ? opt.content[0].date : undefined)}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className='content-checkbox'>
                      {opt.content.map((c) => (
                        <label className='label-container' key={c.id}>
                          <input
                            type='checkbox'
                            onChange={(e) => functionChecked(opt.id, c.id, e.target.checked)}
                            id={c.title}
                            checked={c.status}
                          />
                          <span>{c.title}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FilterDropdown
