import ReactDOM from 'react-dom'
import './ModalView.scss'
import classNames from 'classnames'
import { Icon, TextArea } from 'ui-kit'
import React from 'react'

interface ModalDescriptionInterface {
  visible: boolean
  toggle: () => void
  title: string
  description?: string
}

const ModalView: React.FC<ModalDescriptionInterface> = ({
  visible,
  toggle,
  title,
  description,
}) => {

  const renderBody = () => {
    return (
      <div className='modals'>
        <div className='modalAddHeader'>
          <span className='modalAddHeader-text'>{title}</span>
          <Icon type='Close' size='small' onClick={toggle} />
        </div>
        <div className='modalAddBody'>
          <div className='flex flex-col gap-2'>
            {/* <span className='text-black'>Description</span> */}
            <span className='textDesc'>
              {description?.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return ReactDOM.createPortal(
    <div
      className={classNames('modal', {
        'modal-open': visible,
      })}
    >
      <div className='modal-box p-0'>{visible ? renderBody() : ''}</div>
    </div>,
    document.body
  )
}

export default ModalView
