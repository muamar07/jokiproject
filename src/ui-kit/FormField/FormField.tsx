import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Icon, Input, SelectDropdownGroup, TextArea } from 'ui-kit'
import './FormField.scss'
import { ISelectOption } from 'interfaces/Select.interface'
import Select, { ActionMeta, MultiValue, SingleValue } from 'react-select'
import { Asset } from 'interfaces/Asset.interfaces'

export type FormFieldType =
  | 'text'
  | 'password'
  | 'textarea'
  | 'select'
  | 'multi-select'
  | 'multi-select-checkbox'
  | 'file'

export interface IFormFieldProps {
  className?: string
  label?: string
  name?: string
  type: FormFieldType
  error?: string
  isDisabled?: boolean
  value?: string //required for select type
  multiValue?: ISelectOption[]
  defaultMultiValue?: Asset[]
  options?: ISelectOption[] //required for select type
  placeholder?: string
  isFocused?: boolean
  isRequired?: boolean
  isIcon?: boolean
  menuPortalTarget?: boolean //for react select container
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlurTextArea?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onFocusTextArea?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onChangeTextArea?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onChangeSelect?: (value: string) => void
  onChangeMultiSelect?: (value: ISelectOption[]) => void
  handleCopy?: () => void
}

export const FormField = ({
  className,
  label,
  name,
  type,
  isDisabled,
  error,
  value,
  multiValue,
  defaultMultiValue,
  options,
  placeholder,
  isFocused,
  isRequired,
  menuPortalTarget,
  onBlur,
  onFocus,
  onChange,
  onBlurTextArea,
  onFocusTextArea,
  onChangeTextArea,
  onChangeSelect,
  onChangeMultiSelect,
  isIcon = false,
  handleCopy,
}: IFormFieldProps): JSX.Element => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [selectData, setSelectData] = useState<ISelectOption | null>()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handlePasswordShow = () => {
    setIsShowPassword((prevState) => !prevState)
  }

  const handleType = (type: string) => {
    if (type === 'text') {
      return 'text'
    }
    if (type === 'password') {
      type = isShowPassword ? 'text' : 'password'
      return type
    }
  }

  const handleSelectOption = (
    newValue: SingleValue<ISelectOption>,
    actionMeta: ActionMeta<ISelectOption>
  ) => {
    onChangeSelect ? onChangeSelect(newValue ? newValue.value : '') : ''
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };


  const handleMultiSelectOption = (
    newValue: MultiValue<ISelectOption>,
    actionMeta: ActionMeta<ISelectOption>
  ) => {
    switch (actionMeta.action) {
      case 'remove-value':
      case 'pop-value':
        if (
          defaultMultiValue
            ? defaultMultiValue?.filter((data) => actionMeta.removedValue.value === data.id)
                .length > 0
            : false
        ) {
          return
        }
        break
      case 'clear':
        newValue = multiValue
          ? multiValue
              .filter((item) => defaultMultiValue?.some((data) => data.id === item.value))
              .map((item) => ({ ...item }))
          : []
        break
    }

    onChangeMultiSelect
      ? onChangeMultiSelect(newValue.length !== 0 ? (newValue as ISelectOption[]) : [])
      : ''
  }

  useEffect(() => {
    if (options && value !== '') {
      const tempSelectedData = options.find((o) => o.value === value)
      tempSelectedData ? setSelectData(tempSelectedData) : ''
    } else if (value === '') {
      setSelectData(null)
    }
  }, [value, options])

  const renderInput = () => {
    return (
      <Input
        className={classNames({})}
        value={value}
        autoComplete='on'
        error={error}
        name={name}
        isDisabled={isDisabled}
        placeholder={placeholder}
        type={handleType(type)}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        isFocused={isFocused}
      />
    )
  }

  return (
    <div
      className={classNames('FormField', className, {
        // FormField__active: isFocused,
        // FormField__error: error,
      })}
    >
      <label className='FormField-Label'>
        {label}
        {isRequired && <span className='FormField-LabelRequired'> *</span>}
      </label>
      {type === 'text' && (
        <>
          {/* {renderInput()} */}
          <div className='FormField-InputWrapper'>
            {renderInput()}
            {isIcon == true && (
              <div className='FormField-Icon' onClick={handleCopy}>
                <Icon type='Copy' />
              </div>
            )}
          </div>
          {error && <div className='ErrorMessage'>{error}</div>}
        </>
      )}

      {type === 'password' && (
        <>
          <div className='FormField-InputWrapper'>
            {renderInput()}
            <div className='FormField-Icon' onClick={handlePasswordShow}>
              {isShowPassword ? <Icon type='VisibilityOff' /> : <Icon type='Visibility' />}
            </div>
          </div>
          {error && <div className='ErrorMessage'>{error}</div>}
        </>
      )}

      {type === 'textarea' && (
        <TextArea
          className={classNames({
            Input__active: isFocused,
            Input__error: error,
          })}
          name={name}
          value={value}
          error={error}
          isDisabled={isDisabled}
          placeholder={placeholder}
          onFocus={onFocusTextArea}
          onBlur={onBlurTextArea}
          onChange={onChangeTextArea}
        />
      )}

      {type === 'select' && (
        <Select
          className={classNames('basic-select', {})}
          classNamePrefix='react-select'
          name={name}
          value={selectData}
          defaultValue={selectData}
          options={options}
          placeholder={placeholder}
          isDisabled={isDisabled}
          isSearchable={true}
          onChange={handleSelectOption}
          components={{ IndicatorSeparator: () => null }}
          // menuIsOpen={true}
          menuPortalTarget={menuPortalTarget ? document.body : null}
          // styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        />
      )}

      {type === 'multi-select' && (
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
          onChange={handleMultiSelectOption}
          components={{ IndicatorSeparator: () => null }}
          menuPortalTarget={menuPortalTarget ? document.body : null}
        />
      )}

      {type === 'multi-select-checkbox' && (
        <SelectDropdownGroup
          className={classNames('basic-select', {})}
          name={name}
          multiValue={multiValue}
          options={options}
          placeholder={placeholder}
          isDisabled={isDisabled}
          onChange={handleMultiSelectOption}
          menuPortalTarget={menuPortalTarget}
        />
      )}
      {type === 'file' && (
        <>
        <div className='FormField'>
          <input
            type='file'
            className='inputBtn'
            name={name}
            onChange={onChange}
            disabled={isDisabled}
            multiple={false}
            accept='image/*'
          />
        </div>
        {/* {selectedImage && <img src={selectedImage} alt='Selected' />} */}
        </>
        
      )}
    </div>
  )
}
