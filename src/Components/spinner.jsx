import React from 'react'
import loading from './Loading.gif'

export default function spinner() {
  return (
    <div className='text-center m-3'>
        <img src={loading} alt='loading' width={"40px"}></img>
    </div>
  )
}
