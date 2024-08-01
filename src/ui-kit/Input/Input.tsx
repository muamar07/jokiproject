import { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'
import './Input.scss'

export interface IInputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string
  autoComplete?: string
  name?: string
  type?: string
  error?: string
  isDisabled?: boolean
  isFocused?: boolean
  value?: string
}

export const Input = forwardRef(
  (
    { className, autoComplete, name, type, error, value, isDisabled, isFocused, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input
        className={classNames(className, 'concise-input', {
          input__active: isFocused,
          input__error: error,
        })}
        autoComplete={autoComplete}
        data-testid='test-input'
        name={name}
        type={type}
        ref={ref}
        value={value}
        disabled={isDisabled}
        {...rest}
      />
    )
  }
)

Input.displayName = 'Input'
