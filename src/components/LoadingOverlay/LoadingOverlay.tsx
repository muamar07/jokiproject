import './LoadingOverlay.scss'

const LoadingOverlay = () => {
  return (
    <div className='loading-overlay'>
      <div className='loading-message'>
        <p>Mohon tunggu, data sedang dikirimkan...</p>
      </div>
    </div>
  )
}
export default LoadingOverlay
