import React from 'react'
import spinner from './spinner.gif'



export default function Spinner() {
  return (
      <div>
        <div className='text-center'>
        <img src={spinner} alt="loading"></img>
      </div>
      </div>
    )
}

