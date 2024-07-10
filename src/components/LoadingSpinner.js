import React from 'react'
import Loading from './loading.gif'

const LoadingSpinner = () => {
  return (
    <div className='text-center'>
      <img className='my-3' src={Loading} alt='Loading'></img>      
    </div>
  )
}

export default LoadingSpinner
