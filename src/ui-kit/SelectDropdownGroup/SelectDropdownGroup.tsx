import classNames from 'classnames'
import { ISelectOption } from 'interfaces/Select.interface'
import Select, {
  ActionMeta,
  components,
  MultiValue,
  MultiValueProps,
  OptionProps,
} from 'react-select'
import './SelectDropdownGroup.scss'

export interface GroupedOption {
  label: string
  options: ISelectOption[]
}

export interface SelectDropdownGroup {
  className?: string
  name?: string
  multiValue?: ISelectOption[]
  options?: ISelectOption[]
  placeholder?: string
  isDisabled?: boolean
  menuPortalTarget?: boolean
  onChange: (newValue: MultiValue<ISelectOption>, actionMeta: ActionMeta<ISelectOption>) => void
}

export const SelectDropdownGroup: React.FC<SelectDropdownGroup> = ({
  className,
  name,
  multiValue,
  options,
  placeholder,
  isDisabled,
  menuPortalTarget,
  onChange,
}) => {
  const Option = (props: OptionProps<ISelectOption>) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            className='align-middle'
            type='checkbox'
            checked={props.isSelected}
            onChange={() => null}
          />{' '}
          <label className='align-middle react-select-text-elip'>{props.label}</label>
        </components.Option>
      </div>
    )
  }

  const MoreSelectedBadge = (items: any) => {
    const style = {
      marginLeft: 'auto',
      background: '#d4eefa',
      borderRadius: '4px',
      fontSize: '10px',
      padding: '3px',
      order: 99,
    }
    const length = items.items.length
    const label = `+ ${length} item${length !== 1 ? 's' : ''} selected`

    return <div style={style}>{label}</div>
  }

  const MultiValue = (props: MultiValueProps<ISelectOption>) => {
    const labelToBeDisplayed = `${props.data.label}`
    const maxToShow = 1
    const overflow = props
      .getValue()
      .slice(maxToShow)
      .map((x) => x.label)

    return props.index < maxToShow ? (
      <components.MultiValue className='max-w-[130px]' {...props}>
        <span>{labelToBeDisplayed}</span>
      </components.MultiValue>
    ) : props.index === maxToShow ? (
      <MoreSelectedBadge items={overflow} />
    ) : null
  }

  return (
    <>
      <Select
        className={classNames('basic-select', {})}
        classNamePrefix='react-select'
        name={name}
        value={multiValue}
        defaultValue={multiValue}
        options={options}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isSearchable={true}
        isMulti={true}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        blurInputOnSelect={false}
        menuPortalTarget={menuPortalTarget ? document.body : null}
        components={{
          // Option,
          // MultiValue,
          IndicatorSeparator: () => null,
        }}
        onChange={onChange}
        isOptionDisabled={(option) => multiValue!.length >= 20}
      />
    </>
  )
}
