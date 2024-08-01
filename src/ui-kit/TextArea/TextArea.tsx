import { DetailedHTMLProps, ForwardedRef, HTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import './TextArea.scss'

export interface ITextAreaProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  className?: string
  name?: string
  type?: string
  error?: string
  value?: string
  isDisabled?: boolean
}

export const TextArea = forwardRef(
  (
    { className, name, error, value, isDisabled, ...rest }: ITextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <>
        <textarea
          className={classNames(className, 'text-textarea', {
            
          })}
          name={name}
          ref={ref}
          value={value}
          disabled={isDisabled}
          {...rest}
        />
      </>
    )
  }
)

TextArea.displayName = 'FormTextArea'
